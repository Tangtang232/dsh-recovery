import { useEffect, useState, type ReactNode } from 'react'
import type { InjectFace, PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import type {
  RecoveryRepairOutcomeView, RecoveryRepairResultView, RecoverySnapshotView,
} from '@deepseek-ai/dsh-client-connection/client'
import css from './RecoverySettingsSection.module.css'
import type { RecoveryLocaleKey } from './locales.ts'

/** Registration-side operations used by the recovery section. */
export type RecoveryCheckId = 'authority' | 'startup' | 'settings' | 'presets' | 'providers'

/** Browser-safe result from one recovery diagnostic. */
export interface RecoveryFinding {
  /** Stable diagnostic identifier. */
  id: RecoveryCheckId
  /** Whether this diagnostic found a blocking failure. */
  status: 'passed' | 'warning' | 'failed'
}

/** Registration-side operations used by the recovery section. */
export interface RecoverySettingsInjected {
  /** Current browser authority. */
  authority: string
  /** Whether the current page authority is loopback. */
  loopback: boolean
  /** Recheck the protected APIs and reload the current address. */
  repairCurrent: (reportFinding?: (finding: RecoveryFinding) => void) => Promise<RecoveryFinding[]>
  /** Verify the settings, preset-directory, and model-provider APIs. */
  checkCore: (reportFinding?: (finding: RecoveryFinding) => void) => Promise<RecoveryFinding[]>
  /** Read the launcher-owned isolated-plugin list. */
  scanRecovery: () => Promise<RecoverySnapshotView>
  /** Repair selected launcher-owned issues and verify their plugin rows. */
  repairIssues: (issueIds: string[]) => Promise<RecoveryRepairResultView>
}

/** Full component props assembled by the Settings slot renderer. */
export type RecoverySettingsSectionProps =
  PropsRuntime<'settings.section'>
  & PropsLocale<'settings.recovery'>
  & InjectFace<RecoverySettingsInjected>

type CheckState = 'idle' | 'repairing' | 'checking' | 'passed' | 'failed'
const TOTAL_CHECKS = 5

function findingCopyKey(finding: RecoveryFinding): RecoveryLocaleKey {
  if (finding.id === 'authority') return `check.authority.${finding.status}`
  const status = finding.status === 'failed' ? 'failed' : 'passed'
  return `check.${finding.id}.${status}`
}

/** Render the browser-local Web recovery surface. */
export function RecoverySettingsSection({
  authority,
  loopback,
  repairCurrent,
  checkCore,
  scanRecovery,
  repairIssues,
  t,
}: RecoverySettingsSectionProps): ReactNode {
  const [checkState, setCheckState] = useState<CheckState>('idle')
  const [findings, setFindings] = useState<RecoveryFinding[]>([])
  const [snapshot, setSnapshot] = useState<RecoverySnapshotView>()
  const [outcomes, setOutcomes] = useState<RecoveryRepairOutcomeView[]>([])
  const [repairStep, setRepairStep] = useState(false)

  useEffect(() => {
    let disposed = false
    let attempt = 0
    let retry: ReturnType<typeof setTimeout> | undefined
    const scan = (): void => {
      void scanRecovery().then(
        (value) => { if (!disposed) setSnapshot(value) },
        () => {
          attempt += 1
          if (!disposed && attempt < 3) retry = setTimeout(scan, 750)
        },
      )
    }
    scan()
    return () => {
      disposed = true
      if (retry !== undefined) clearTimeout(retry)
    }
  }, [scanRecovery])

  const runCheck = (): void => {
    if (checkState === 'checking' || checkState === 'repairing') return
    setFindings([])
    setRepairStep(false)
    setCheckState('checking')
    const operation = async (report: (finding: RecoveryFinding) => void): Promise<RecoveryFinding[]> => {
      const current = snapshot ?? await scanRecovery()
      setSnapshot(current)
      const repairable = current.issues.filter(issue => issue.repairable)
      if (repairable.length > 0) {
        setRepairStep(true)
        setCheckState('repairing')
        const result = await repairIssues(repairable.map(issue => issue.issueId))
        setOutcomes(result.outcomes)
        setSnapshot(result.snapshot)
        setCheckState('checking')
      }
      return (loopback ? checkCore : repairCurrent)(report)
    }
    void operation((finding) => {
      setFindings(previous => [...previous.filter(item => item.id !== finding.id), finding])
    }).then(
      (completed) => {
        setFindings(completed)
        setCheckState('passed')
      },
      () => { setCheckState('failed') },
    )
  }

  return (
    <section className={css.section}>
      <header className={css.header}>
        <h2>{t('title')}</h2>
        <p>{t('intro')}</p>
      </header>
      <div className={css.card} data-recovery-state={loopback ? 'ready' : 'blocked'}>
        <div className={css.cardCopy} data-recovery-summary>
          <h3>{t(loopback ? 'healthyTitle' : 'blockedTitle')}</h3>
          <p>{t(loopback ? 'healthyDescription' : 'blockedDescription')}</p>
        </div>
        <dl className={css.facts}>
          <div>
            <dt>{t('authority')}</dt>
            <dd><code>{authority}</code></dd>
          </div>
        </dl>
        <button
          className={loopback ? css.secondaryButton : css.primaryButton}
          type="button"
          disabled={checkState === 'checking' || checkState === 'repairing'}
          onClick={runCheck}
        >
          {t(checkState === 'repairing' ? 'repairing' : checkState === 'checking' ? 'checking' : 'repair')}
        </button>
        {snapshot !== undefined && snapshot.issues.length > 0 ? (
          <div className={css.issueGroup}>
            <h3>{t('issues.title')}</h3>
            <p>{t('issues.description')}</p>
            <ul className={css.findings} aria-label={t('issues.title')}>
              {snapshot.issues.map(issue => (
                <li key={issue.issueId} data-finding-status={issue.repairable ? 'warning' : 'failed'}>
                  <span className={css.findingDot} aria-hidden="true" />
                  <div>
                    <strong>{issue.moduleName ?? issue.entryId ?? t('issues.configuration')}</strong>
                    <p>{t(`issue.${issue.kind}`)}</p>
                    <small>{issue.repairable ? t('issues.automatic') : t('issues.manual')}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : snapshot !== undefined ? <p className={css.success}>{t('issues.none')}</p> : null}
        {outcomes.length > 0 ? (
          <ul className={css.outcomes} aria-label={t('outcomes')}>
            {outcomes.map(outcome => <li key={outcome.issueId}>{t(`outcome.${outcome.status}`)}</li>)}
          </ul>
        ) : null}
        {checkState !== 'idle' ? (
          <div className={css.progressGroup}>
            <div className={css.progressCopy}>
              <span>{t('progress')}</span>
              <span>{findings.length + (repairStep ? 1 : 0)}/{TOTAL_CHECKS + (repairStep ? 1 : 0)}</span>
            </div>
            <div
              className={css.progressTrack}
              role="progressbar"
              aria-label={t('progress')}
              aria-valuemin={0}
              aria-valuemax={TOTAL_CHECKS + (repairStep ? 1 : 0)}
              aria-valuenow={findings.length + (repairStep ? 1 : 0)}
            >
              <span style={{ width: `${(findings.length + (repairStep ? 1 : 0)) / (TOTAL_CHECKS + (repairStep ? 1 : 0)) * 100}%` }} />
            </div>
          </div>
        ) : null}
        {findings.length > 0 ? (
          <ul className={css.findings} aria-label={t('findings')}>
            {findings.map(finding => (
              <li key={finding.id} data-finding-status={finding.status}>
                <span className={css.findingDot} aria-hidden="true" />
                <div>
                  <strong>{t(`check.${finding.id}.title`)}</strong>
                  <p>{t(findingCopyKey(finding))}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
        {checkState === 'passed' ? <p className={css.success} role="status">{t('checked')}</p> : null}
        {checkState === 'failed' ? <p className={css.failure} role="alert">{t('checkFailed')}</p> : null}
      </div>
    </section>
  )
}
