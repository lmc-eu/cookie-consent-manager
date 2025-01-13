import { CookieTable, TranslationOverride } from '../types';
import { Translation } from 'vanilla-cookieconsent';
export declare const assembleTranslationsConfig: (companyNames: string[], translationOverrides: Record<string, TranslationOverride>, cookieTable: CookieTable) => Record<string, Translation>;
