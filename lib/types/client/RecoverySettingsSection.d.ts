import { type ReactNode } from 'react';
import type { InjectFace, PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { RecoveryRepairResultView, RecoverySnapshotView } from '@deepseek-ai/dsh-client-connection/client';
/** Registration-side operations used by the recovery section. */
export type RecoveryCheckId = 'authority' | 'startup' | 'settings' | 'presets' | 'providers';
/** Browser-safe result from one recovery diagnostic. */
export interface RecoveryFinding {
    /** Stable diagnostic identifier. */
    id: RecoveryCheckId;
    /** Whether this diagnostic found a blocking failure. */
    status: 'passed' | 'warning' | 'failed';
}
/** Registration-side operations used by the recovery section. */
export interface RecoverySettingsInjected {
    /** Current browser authority. */
    authority: string;
    /** Whether the current page authority is loopback. */
    loopback: boolean;
    /** Recheck the protected APIs and reload the current address. */
    repairCurrent: (reportFinding?: (finding: RecoveryFinding) => void) => Promise<RecoveryFinding[]>;
    /** Verify the settings, preset-directory, and model-provider APIs. */
    checkCore: (reportFinding?: (finding: RecoveryFinding) => void) => Promise<RecoveryFinding[]>;
    /** Read the launcher-owned isolated-plugin list. */
    scanRecovery: () => Promise<RecoverySnapshotView>;
    /** Repair selected launcher-owned issues and verify their plugin rows. */
    repairIssues: (issueIds: string[]) => Promise<RecoveryRepairResultView>;
}
/** Full component props assembled by the Settings slot renderer. */
export type RecoverySettingsSectionProps = PropsRuntime<'settings.section'> & PropsLocale<'settings.recovery'> & InjectFace<RecoverySettingsInjected>;
/** Render the browser-local Web recovery surface. */
export declare function RecoverySettingsSection({ authority, loopback, repairCurrent, checkCore, scanRecovery, repairIssues, t, }: RecoverySettingsSectionProps): ReactNode;
//# sourceMappingURL=RecoverySettingsSection.d.ts.map