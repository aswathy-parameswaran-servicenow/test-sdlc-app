import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_test_sdlc_app_sdlc_issue',
    view: default_view,
    sections: [
        {
            caption: 'Issue Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [{ field: 'short_description', type: 'table_field' }],
                },
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'issue_type', type: 'table_field' },
                        { field: 'severity', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'sdlc_phase', type: 'table_field' },
                        { field: 'environment', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'component', type: 'table_field' },
                        { field: 'description', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Assignment & Resolution',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'flagged_by', type: 'table_field' },
                        { field: 'assigned_to', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'state', type: 'table_field' },
                        { field: 'target_resolution_date', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'resolution_notes', type: 'table_field' }],
                },
            ],
        },
    ],
})
