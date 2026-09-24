import {
    Table,
    StringColumn,
    ChoiceColumn,
    ReferenceColumn,
    DateColumn,
} from '@servicenow/sdk/core'

// Variable name MUST match the name property
export const x_test_sdlc_app_sdlc_issue = Table({
    name: 'x_test_sdlc_app_sdlc_issue',
    label: 'SDLC Issue',
    display: 'short_description',
    schema: {
        short_description: StringColumn({
            label: 'Short Description',
            maxLength: 160,
            mandatory: true,
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 4000,
        }),
        issue_type: ChoiceColumn({
            label: 'Issue Type',
            mandatory: true,
            default: 'bug',
            choices: {
                bug: 'Bug',
                code_quality: 'Code Quality',
                security: 'Security',
                performance: 'Performance',
                design_flaw: 'Design Flaw',
                technical_debt: 'Technical Debt',
                documentation: 'Documentation',
                test_coverage: 'Test Coverage',
                requirement_gap: 'Requirement Gap',
            },
        }),
        severity: ChoiceColumn({
            label: 'Severity',
            mandatory: true,
            default: 'medium',
            choices: {
                critical: 'Critical',
                high: 'High',
                medium: 'Medium',
                low: 'Low',
            },
        }),
        state: ChoiceColumn({
            label: 'State',
            mandatory: true,
            default: 'new',
            choices: {
                new: 'New',
                in_review: 'In Review',
                in_progress: 'In Progress',
                resolved: 'Resolved',
                closed: 'Closed',
                wont_fix: "Won't Fix",
            },
        }),
        sdlc_phase: ChoiceColumn({
            label: 'SDLC Phase',
            choices: {
                requirements: 'Requirements',
                design: 'Design',
                development: 'Development',
                testing: 'Testing',
                deployment: 'Deployment',
                maintenance: 'Maintenance',
            },
        }),
        environment: ChoiceColumn({
            label: 'Environment',
            choices: {
                dev: 'Development',
                qa: 'QA',
                staging: 'Staging',
                production: 'Production',
            },
        }),
        component: StringColumn({
            label: 'Component / Repository',
            maxLength: 100,
        }),
        flagged_by: ReferenceColumn({
            label: 'Flagged By',
            referenceTable: 'sys_user',
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
        }),
        target_resolution_date: DateColumn({
            label: 'Target Resolution Date',
        }),
        resolution_notes: StringColumn({
            label: 'Resolution Notes',
            maxLength: 4000,
        }),
    },
})
