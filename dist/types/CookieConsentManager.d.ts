import { CookieConsentCategory } from './CookieConsentCategory';
import { VanillaCookieConsent } from './vanilla-cookieconsent';
export declare type OnAcceptCallback = (cookie: VanillaCookieConsent.Cookie<CookieConsentCategory>, cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategory>) => void;
export declare type CookieConsentManagerOptions = {
    defaultLang: string;
    autodetectLang: boolean;
    consentCollectorApiUrl: string;
    onFirstAccept: OnAcceptCallback;
    onFirstAcceptOnlyNecessary: OnAcceptCallback;
    onFirstAcceptAll: OnAcceptCallback;
    onAccept: OnAcceptCallback;
    onAcceptOnlyNecessary: OnAcceptCallback;
    onAcceptAll: OnAcceptCallback;
    companyNames: string[];
    config: VanillaCookieConsent.Options;
};
export declare type CookieConsentManager = (serviceName: string, args?: Partial<CookieConsentManagerOptions>) => VanillaCookieConsent.CookieConsent<CookieConsentCategory>;
