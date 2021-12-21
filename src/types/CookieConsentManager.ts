import { CookieConsentCategory } from './CookieConsentCategory';
import { VanillaCookieConsent } from './vanilla-cookieconsent';

export type OnAcceptCallback = (
  cookie: VanillaCookieConsent.Cookie<CookieConsentCategory>,
  cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategory>,
) => void;

export type CookieConsentManagerOptions = {
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
  cookieName: string;
  config: VanillaCookieConsent.Options;
};

export type CookieConsentManager = (
  serviceName: string,
  args?: Partial<CookieConsentManagerOptions>,
) => VanillaCookieConsent.CookieConsent<CookieConsentCategory>;
