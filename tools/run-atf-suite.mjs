#!/usr/bin/env node
// Runs an ATF test suite on the target instance via OAuth client_credentials,
// then polls the execution tracker until the run reaches a terminal status.
// See docs/ci-setup.md for the required environment variables.

const { SN_SDK_INSTANCE_URL, SN_SDK_OAUTH_CLIENT_ID, SN_SDK_OAUTH_CLIENT_SECRET, ATF_TEST_SUITE_ID } =
    process.env

const POLL_INTERVAL_MS = 5000
const TIMEOUT_MS = 20 * 60 * 1000
const TERMINAL_STATUSES = new Set(['success', 'failure', 'cancelled', 'error'])

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
    const response = await fetch(
        `${SN_SDK_INSTANCE_URL}/api/now/v1/atf/test_suite/${ATF_TEST_SUITE_ID}/run`,
        {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
        }
    )

    if (!response.ok) {
        throw new Error(`Failed to start ATF suite run: ${response.status} ${await response.text()}`)
    }

    const { result } = await response.json()
    return result.execution_tracker_sys_id
}

async function pollExecutionTracker(token, trackerId) {
    const deadline = Date.now() + TIMEOUT_MS

    while (Date.now() < deadline) {
        const response = await fetch(
            `${SN_SDK_INSTANCE_URL}/api/now/table/sys_atf_execution_tracker/${trackerId}?sysparm_fields=status`,
            { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } }
        )

        if (!response.ok) {
            throw new Error(`Failed to poll execution tracker: ${response.status} ${await response.text()}`)
        }

        const { result } = await response.json()

        if (TERMINAL_STATUSES.has(result.status)) {
            return result.status
        }

        console.log(`ATF suite still running (status: ${result.status || 'not_started'})...`)
        await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS))
    }

    throw new Error(`Timed out waiting for ATF suite to finish after ${TIMEOUT_MS / 1000}s`)
}

async function main() {
    requireEnv()

    console.log(`Starting ATF suite ${ATF_TEST_SUITE_ID} on ${SN_SDK_INSTANCE_URL}...`)
    const token = await getAccessToken()
    const trackerId = await startSuiteRun(token)
    console.log(`Execution tracker: ${trackerId}`)

    const status = await pollExecutionTracker(token, trackerId)
    console.log(`ATF suite finished with status: ${status}`)

    if (status !== 'success') {
        console.error(
            `ATF suite did not pass. See ${SN_SDK_INSTANCE_URL}/sys_atf_execution_tracker.do?sys_id=${trackerId}`
        )
        process.exitCode = 1
    }
}

main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
})
