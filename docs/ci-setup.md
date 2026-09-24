# CI setup for `.github/workflows/pr-build-deploy-gate.yml`

This app's PR workflow builds with frozen keys, installs to a shared
non-prod test instance, then gates the merge on an ATF suite run. It needs
the following one-time setup. See also:
`npx @servicenow/sdk explain ci-integration`.

## 1. Target instance

Pick a shared, non-prod ServiceNow instance (dev/test/integration) that PR
branches can install to. Do not point this at production -- CI installs
should never go straight to prod; use the platform's normal app promotion
path for that.

## 2. OAuth Application Registry (instance side)

1. **System OAuth > Application Registry > New >** "Create an OAuth API
   endpoint for external clients".
   - Public Client: `false`
   - OAuth Application User: the service user from step 3
   - Grant type: must include `Client Credentials`
2. Ensure the system property
   `glide.oauth.inbound.client.credential.grant_type.enabled` exists and is
   `true` (create it under `sys_properties` if missing).
3. Create a dedicated service user for CI installs:
   - Roles sufficient to install the app (typically `admin`)
   - `Identity Type = Human` (a `Machine` identity is blocked from the
     session bootstrap the SDK's OAuth flow performs)
4. Note the Application Registry's **Client ID** and **Client Secret**.

## 3. GitHub repo configuration

**Repository variables** (Settings > Secrets and variables > Actions > Variables):

| Name | Value |
|---|---|
| `SN_SDK_INSTANCE_URL` | `https://<your-test-instance>.service-now.com` |
| `ATF_TEST_SUITE_ID` | sys_id of the `SDLC Issue CI Gate Suite` (`sys_atf_test_suite`) -- look up the `sdlc-issue-ci-gate-suite` entry in `src/fluent/generated/keys.ts` after building, or query the instance once installed: `npx @servicenow/sdk query sys_atf_test_suite -q "name=SDLC Issue CI Gate Suite" -o json` |

**Repository secrets** (Settings > Secrets and variables > Actions > Secrets):

| Name | Value |
|---|---|
| `SN_SDK_OAUTH_CLIENT_ID` | Client ID from step 2 |
| `SN_SDK_OAUTH_CLIENT_SECRET` | Client Secret from step 2 |

## 4. What the workflow does

1. **`build`** -- `npm run build:ci` (`now-sdk build --frozenKeys`). Fails if
   someone introduced a new/changed `Now.ID` without committing the
   regenerated `src/fluent/generated/keys.ts`.
2. **`install-and-atf`** (skipped for fork PRs, since forks don't get
   secrets) -- installs the built app to the test instance via OAuth
   `client_credentials`, then runs `tools/run-atf-suite.mjs`, which:
   - Fetches an access token from `/oauth_token.do`.
   - Starts the `ATF_TEST_SUITE_ID` suite via
     `POST /api/now/v1/atf/test_suite/{id}/run`.
   - Polls `sys_atf_execution_tracker` until the run reaches a terminal
     status (`success`, `failure`, `cancelled`, `error`), failing the job
     unless the result is `success`.
3. **`gate`** -- a single required status check that fails if either job
   above didn't succeed. Point the branch protection rule at this job.

## 5. Fork PRs

`pull_request` runs from forks don't receive repo secrets, so
`install-and-atf` (and therefore `gate`) will fail for them by design.
After reviewing a fork PR, a maintainer should re-run the workflow from a
context that has the secrets (e.g. push to a branch in this repo, or use
`workflow_dispatch` if added later) before merging.

## 6. Adding more ATF coverage

The gate suite (`src/fluent/tests/sdlc-issue-ci-gate-suite.now.ts`) currently
runs two representative tests:

- `create-sdlc-issue-via-form-test` -- opens the SDLC Issue form, fills in
  required fields, submits, and validates the record server-side.
- `sdlc-issue-modules-visible-test` -- confirms the SDLC Issues application
  menu's modules are visible and navigable.

To add more, define a new `Test()` in `src/fluent/tests/`, then add a
`sys_atf_test_suite_test` `Record()` linking it to `sdlcIssueCiGateSuite` in
`sdlc-issue-ci-gate-suite.now.ts`.
