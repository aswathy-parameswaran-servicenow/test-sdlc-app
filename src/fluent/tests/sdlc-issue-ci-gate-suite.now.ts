import { TestSuite } from '@servicenow/sdk/core'
import { createSdlcIssueViaForm } from './create-sdlc-issue-via-form.now'
import { sdlcIssueModulesVisible } from './sdlc-issue-modules-visible.now'

// The sys_id assigned to this record (see keys.ts after build) is the
// ATF_TEST_SUITE_ID used by the CI gate workflow.
export const sdlcIssueCiGateSuite = TestSuite({
    $id: Now.ID['sdlc-issue-ci-gate-suite'],
    name: 'SDLC Issue CI Gate Suite',
    description: 'Representative ATF tests gating PR merges for the SDLC Issues app',
    active: true,
    tests: [createSdlcIssueViaForm, sdlcIssueModulesVisible],
})
