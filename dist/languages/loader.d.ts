import { CookieTable, TranslationOverride, VanillaCookieConsent } from '../types';
export declare const assembleLanguagesConfig: (companyNames: string[], translationOverrides: Record<string, TranslationOverride>, secondaryButtonMode: string, cookieTable: CookieTable) => Record<string, VanillaCookieConsent.Languages>;
