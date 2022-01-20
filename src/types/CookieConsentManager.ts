import { CookieConsentCategory } from './CookieConsentCategory';
import { VanillaCookieConsent } from './vanilla-cookieconsent';

export type CategoriesChangeset = {
  accepted: CookieConsentCategory[];
  rejected: CookieConsentCategory[];
  changed: CookieConsentCategory[];
};

export type OnFirstAcceptCallback = (cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategory>) => void;
export type OnAcceptCallback = (cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategory>) => void;
export type OnChangeCallback = (
  cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategory>,
  categories: CategoriesChangeset,
) => void;

export type CookieConsentManagerOptions = {
  defaultLang: string;
  autodetectLang: boolean;
  consentCollectorApiUrl: string;
  onFirstAccept: OnFirstAcceptCallback;
  onAccept: OnAcceptCallback;
  onChange: OnChangeCallback;
  companyNames: string[];
  config: VanillaCookieConsent.Options;
};

export type CookieConsentManager = (
  serviceName: string,
  args?: Partial<CookieConsentManagerOptions>,
) => VanillaCookieConsent.CookieConsent<CookieConsentCategory>;
