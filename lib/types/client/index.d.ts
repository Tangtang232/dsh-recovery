/** Client-only Web recovery section registered into Settings. */
import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client';
import { type RecoveryLocaleKey } from './locales.ts';
export type { RecoverySettingsInjected, RecoverySettingsSectionProps } from './RecoverySettingsSection.tsx';
export type { RecoveryLocaleKey } from './locales.ts';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        /** Web recovery diagnosis and actions. */
        'settings.recovery': RecoveryLocaleKey;
    }
}
/** Services required by the Settings contribution. */
export declare const inject: string[];
/** Register the recovery section without requiring a successful Host RPC. */
export declare function apply(ctx: ClientContext): void;
//# sourceMappingURL=index.d.ts.map