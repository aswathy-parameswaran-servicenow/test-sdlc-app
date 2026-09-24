import { Test } from '@servicenow/sdk/core'

export const createSdlcIssueViaForm = Test(
    {
        $id: Now.ID['create-sdlc-issue-via-form-test'],
        name: 'Create SDLC Issue via Form',
        description:
            'Opens a new SDLC Issue form, fills in the required fields, submits it, and validates the record was created server-side',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.form.openNewForm({
            $id: Now.ID['create-sdlc-issue-open-form'],
            table: 'x_test_sdlc_app_sdlc_issue',
        })

        atf.form.setFieldValue({
            $id: Now.ID['create-sdlc-issue-set-fields'],
            table: 'x_test_sdlc_app_sdlc_issue',
            fieldValues: {
                short_description: 'ATF sample flagged issue',
                issue_type: 'bug',
                severity: 'high',
                sdlc_phase: 'testing',
            },
        })

        const submitted = atf.form.submitForm({
            $id: Now.ID['create-sdlc-issue-submit-form'],
            assert: 'form_submitted_to_server',
        })

        atf.server.recordValidation({
            $id: Now.ID['create-sdlc-issue-validate-record'],
            table: 'x_test_sdlc_app_sdlc_issue',
            recordId: submitted.record_id,
            fieldValues: 'short_description=ATF sample flagged issue^issue_type=bug^severity=high',
            assert: 'record_validated',
        })
    }
)
