#!/usr/bin/env node
// Runs an ATF test suite independently (no now-sdk cicd dependency) via
// the sn_cicd REST API, then polls progress until the run finishes.
// See docs/ci-setup.md for the required environment variables.
//
// Note: the previous implementation posted to
// /api/now/v1/atf/test_suite/{id}/run, which isn't a real endpoint on
// this instance (400 "Requested URI does not represent any resource").
// /api/sn_cicd/testsuite/run is the correct one -- it's what
// `now-sdk cicd testsuite run` itself wraps, and its query parameters
// (test_suite_sys_id, browser_name, etc.) match that command's flags.

const { SN_SDK_INSTANCE_URL, SN_SDK_OAUTH_CLIENT_ID, SN_SDK_OAUTH_CLIENT_SECRET, ATF_TEST_SUITE_ID } =
    process.env

const POLL_INTERVAL_MS = 5000
const TIMEOUT_MS = 20 * 60 * 1000

function requireEnv() {
    const missing = Object.entries({
        SN_SDK_INSTANCE_URL,
        SN_SDK_OAUTH_CLIENT_ID,
        SN_SDK_OAUTH_CLIENT_SECRET,
        ATF_TEST_SUITE_ID,
    })
        .filter(([, value]) => !value)
        .map(([name]) => name)

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
    }
}

async function getAccessToken() {
    const response = await fetch(`${SN_SDK_INSTANCE_URL}/oauth_token.do`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: SN_SDK_OAUTH_CLIENT_ID,
            client_secret: SN_SDK_OAUTH_CLIENT_SECRET,
        }),
    })

    if (!response.ok) {
        throw new Error(`Failed to obtain OAuth token: ${response.status} ${await response.text()}`)
    }

    const { access_token } = await response.json()
    return access_token
}

async function startSuiteRun(token) {
    const url = new URL(`${SN_SDK_INSTANCE_URL}/api/sn_cicd/testsuite/run`)
    url.searchParams.set('test_suite_sys_id', ATF_TEST_SUITE_ID)
    // Without this, ATF has no runner to execute the suite's UI-based
    // steps in a non-interactive context and cancels the run immediately.
    url.searchParams.set('run_in_cloud', 'true')

    const response = await fetch(url, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
    })

    if (!response.ok) {
        throw new Error(`Failed to start ATF suite run: ${response.status} ${await response.text()}`)
    }

    const { result } = await response.json()
    return result.links.progress.id
}

async function pollProgress(token, progressId) {
    const deadline = Date.now() + TIMEOUT_MS

    while (Date.now() < deadline) {
        const response = await fetch(`${SN_SDK_INSTANCE_URL}/api/sn_cicd/progress/${progressId}`, {
            headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
        })

        if (!response.ok) {
            throw new Error(`Failed to poll progress: ${response.status} ${await response.text()}`)
        }

        const { result } = await response.json()

        if (Number(result.percent_complete) >= 100) {
            return result
        }

        console.log(`ATF suite still running (${result.percent_complete ?? 0}% complete)...`)
        await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS))
    }

    throw new Error(`Timed out waiting for ATF suite to finish after ${TIMEOUT_MS / 1000}s`)
}

async function main() {
    requireEnv()

    console.log(`Starting ATF suite ${ATF_TEST_SUITE_ID} on ${SN_SDK_INSTANCE_URL}...`)
    const token = await getAccessToken()
    const progressId = await startSuiteRun(token)
    console.log(`Execution tracker: ${progressId}`)

    const result = await pollProgress(token, progressId)
    console.log(`ATF suite finished: ${result.status_label}`)

    const passed = typeof result.status_label === 'string' && /success/i.test(result.status_label)
    if (!passed) {
        console.error(`ATF suite did not pass (${result.status_label}): ${result.status_message || result.error || ''}`)
        console.error(`See ${SN_SDK_INSTANCE_URL}/sys_execution_tracker.do?sys_id=${progressId}`)
        process.exitCode = 1
    }
}

main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
})
