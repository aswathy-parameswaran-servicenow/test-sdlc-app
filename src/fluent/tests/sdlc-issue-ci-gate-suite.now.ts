import { Record } from '@servicenow/sdk/core'
import { createSdlcIssueViaForm } from './create-sdlc-issue-via-form.now'
import { sdlcIssueModulesVisible } from './sdlc-issue-modules-visible.now'

// The sys_id assigned to this record (see keys.ts after build) is the
// ATF_TEST_SUITE_ID used by the CI gate workflow.
export const sdlcIssueCiGateSuite = Record({
    $id: Now.ID['sdlc-issue-ci-gate-suite'],
    table: 'sys_atf_test_suite',
    data: {
        name: 'SDLC Issue CI Gate Suite',
        description: 'Representative ATF tests gating PR merges for the SDLC Issues app',
        active: true,
    },
})

Record({
    $id: Now.ID['sdlc-issue-ci-gate-suite-test-form'],
    table: 'sys_atf_test_suite_test',
    data: {
        test_suite: sdlcIssueCiGateSuite,
        test: createSdlcIssueViaForm,
        order: 100,
        active: true,
    },
})

Record({
    $id: Now.ID['sdlc-issue-ci-gate-suite-test-nav'],
    table: 'sys_atf_test_suite_test',
    data: {
        test_suite: sdlcIssueCiGateSuite,
        test: sdlcIssueModulesVisible,
        order: 200,
        active: true,
    },
})
