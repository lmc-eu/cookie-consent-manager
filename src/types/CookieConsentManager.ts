import { CookieConsentLevel } from './CookieConsentLevel';
import { VanillaCookieConsent } from './vanilla-cookieconsent';

export type OnAcceptCallback = (
  cookie: VanillaCookieConsent.Cookie<CookieConsentLevel>,
  cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentLevel>,
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
  config: VanillaCookieConsent.Options;
};

export type CookieConsentManager = (
  serviceName: string,
  args: CookieConsentManagerOptions,
) => VanillaCookieConsent.CookieConsent<CookieConsentLevel>;
