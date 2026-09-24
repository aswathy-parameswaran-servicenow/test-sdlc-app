import { Test } from '@servicenow/sdk/core'
import { sdlcIssueListModule, sdlcIssueNewModule } from '../menus/sdlc-issue-menu.now'

export const sdlcIssueModulesVisible = Test(
    {
        $id: Now.ID['sdlc-issue-modules-visible-test'],
        name: 'SDLC Issue Modules Visible in Navigator',
        description:
            'Confirms the SDLC Issues application menu modules are visible and that the list module can be navigated to',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.applicationNavigator.moduleVisibility({
            $id: Now.ID['sdlc-issue-modules-visibility-check'],
            navigator: 'ui16',
            visibleModules: [sdlcIssueListModule, sdlcIssueNewModule],
        })

        atf.applicationNavigator.navigateToModule({
            $id: Now.ID['sdlc-issue-navigate-to-list'],
            module: sdlcIssueListModule,
        })
    }
)
