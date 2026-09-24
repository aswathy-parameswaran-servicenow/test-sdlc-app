import { ApplicationMenu, Record } from '@servicenow/sdk/core'

export const sdlcIssueMenu = ApplicationMenu({
    $id: Now.ID['sdlc-issue-app-menu'],
    title: 'SDLC Issues',
    hint: 'Track and manage SDLC issues flagged during development',
    description: 'Application for tracking issues flagged across the software development lifecycle',
    active: true,
})

export const sdlcIssueListModule = Record({
    $id: Now.ID['sdlc-issue-list-module'],
    table: 'sys_app_module',
    data: {
        title: 'All SDLC Issues',
        application: sdlcIssueMenu,
        link_type: 'LIST',
        name: 'x_test_sdlc_app_sdlc_issue',
        hint: 'View all SDLC issues',
        active: true,
        order: 100,
    },
})

export const sdlcIssueNewModule = Record({
    $id: Now.ID['sdlc-issue-new-module'],
    table: 'sys_app_module',
    data: {
        title: 'Create New SDLC Issue',
        application: sdlcIssueMenu,
        link_type: 'NEW',
        name: 'x_test_sdlc_app_sdlc_issue',
        hint: 'Flag a new SDLC issue',
        active: true,
        order: 200,
    },
})
