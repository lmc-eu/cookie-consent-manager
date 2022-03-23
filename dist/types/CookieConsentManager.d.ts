import { CookieConsentCategory, DisplayMode } from '../constants';
import { VanillaCookieConsent } from './vanilla-cookieconsent';
export declare type Values<T> = T[keyof T];
export declare type CookieConsentCategoryValues = Values<typeof CookieConsentCategory>;
export declare type CategoriesChangeset = {
    accepted: CookieConsentCategoryValues[];
    rejected: CookieConsentCategoryValues[];
    changed: CookieConsentCategoryValues[];
};
export declare type OnFirstAcceptCallback = (cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>) => void;
export declare type OnAcceptCallback = (cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>) => void;
export declare type OnChangeCallback = (cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>, categories: CategoriesChangeset) => void;
export declare type TranslationOverride = {
    consentTitle?: string;
    descriptionIntro?: string;
};
export declare type CookieConsentManagerOptions = {
    defaultLang: string;
    autodetectLang: boolean;
    consentCollectorApiUrl: string;
    onFirstAccept: OnFirstAcceptCallback;
    onAccept: OnAcceptCallback;
    onChange: OnChangeCallback;
    companyNames: string[];
    displayMode: Values<typeof DisplayMode>;
    translationOverrides: Record<string, TranslationOverride>;
    config: VanillaCookieConsent.Options<CookieConsentCategoryValues>;
};
export declare type CookieConsentManager = (serviceName: string, args?: Partial<CookieConsentManagerOptions>) => VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>;
