/** Client-only Web recovery section registered into Settings. */

import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type { ConnectionHandle } from '@deepseek-ai/dsh-client-connection/client'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import {
  RecoverySettingsSection,
  type RecoveryFinding,
  type RecoverySettingsInjected,
} from './RecoverySettingsSection.tsx'
import { en, zh, type RecoveryLocaleKey } from './locales.ts'

export type { RecoverySettingsInjected, RecoverySettingsSectionProps } from './RecoverySettingsSection.tsx'
export type { RecoveryLocaleKey } from './locales.ts'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Web recovery diagnosis and actions. */
    'settings.recovery': RecoveryLocaleKey
  }
}

/** Dictionary namespace owned by this plugin. */
const NS = 'settings.recovery'

/** Services required by the Settings contribution. */
export const inject = ['slots', 'locale', 'connection']

function currentPage(): Location | undefined {
  return typeof location === 'undefined' ? undefined : location
}

/** Register the recovery section without requiring a successful Host RPC. */
export function apply(ctx: ClientContext): void {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'ui-settings-recovery: dictionaries')
  const connection = ctx.get('connection') as ConnectionHandle
  const t = ctx.locale.bind(NS)
  const page = currentPage()
  const checkCore = async (reportFinding: (finding: RecoveryFinding) => void = () => {}): Promise<RecoveryFinding[]> => {
    const findings: RecoveryFinding[] = []
    const record = (finding: RecoveryFinding): void => {
      findings.push(finding)
      reportFinding(finding)
    }
    record({ id: 'authority', status: connection.isLoopback ? 'passed' : 'warning' })
    try {
      const recovery = await connection.api.recovery.scan({})
      record({ id: 'startup', status: recovery.result.ok ? 'passed' : 'failed' })
    } catch {
      record({ id: 'startup', status: 'failed' })
    }
    try {
      const settings = await connection.api.settings.describe({})
      record({
        id: 'settings',
        status: settings.result.ok && settings.result.value.namespaces.length > 0 ? 'passed' : 'failed',
      })
    } catch {
      record({ id: 'settings', status: 'failed' })
    }
    try {
      const presets = await connection.api.agentPresets.list({})
      record({ id: 'presets', status: presets.result.ok ? 'passed' : 'failed' })
    } catch {
      record({ id: 'presets', status: 'failed' })
    }
    try {
      const providers = await connection.api.llm.providers({})
      record({ id: 'providers', status: providers.result.ok ? 'passed' : 'failed' })
    } catch {
      record({ id: 'providers', status: 'failed' })
    }
    if (findings.some(finding => finding.status === 'failed')) {
      throw new Error('one or more recovery checks failed')
    }
    return findings
  }
  const injected = (): RecoverySettingsInjected => ({
    authority: page?.host ?? '',
    loopback: connection.isLoopback,
    repairCurrent: async (reportFinding) => {
      const findings = await checkCore(reportFinding)
      globalThis.location.reload()
      return findings
    },
    checkCore,
    scanRecovery: async () => {
      const response = await connection.api.recovery.scan({})
      if (!response.result.ok) throw new Error(response.result.error.message)
      return response.result.value
    },
    repairIssues: async (issueIds) => {
      const response = await connection.api.recovery.repair({ issueIds })
      if (!response.result.ok) throw new Error(response.result.error.message)
      return response.result.value
    },
  })

  ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section',
    id: 'recovery',
    order: 100,
    label: () => t('nav'),
    locale: NS,
    inject: injected,
  }, RecoverySettingsSection))
}
