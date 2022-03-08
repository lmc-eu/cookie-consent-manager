import { CookieConsentCategory } from './CookieConsentCategory';
import { VanillaCookieConsent } from './vanilla-cookieconsent';
export declare type CategoriesChangeset = {
    accepted: CookieConsentCategory[];
    rejected: CookieConsentCategory[];
    changed: CookieConsentCategory[];
};
export declare type OnFirstAcceptCallback = (cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategory>) => void;
export declare type OnAcceptCallback = (cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategory>) => void;
export declare type OnChangeCallback = (cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategory>, categories: CategoriesChangeset) => void;
export declare const enum DisplayMode {
    FORCE = "force",
    SOFT = "soft"
}
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
    displayMode: DisplayMode;
    translationOverrides: Record<string, TranslationOverride>;
    config: VanillaCookieConsent.Options<CookieConsentCategory>;
};
export declare type CookieConsentManager = (serviceName: string, args?: Partial<CookieConsentManagerOptions>) => VanillaCookieConsent.CookieConsent<CookieConsentCategory>;
