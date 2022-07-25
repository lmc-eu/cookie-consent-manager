import { CookieConsentCategory, DisplayMode } from '../constants';
import { VanillaCookieConsent } from './vanilla-cookieconsent';
import { SecondaryButtonMode } from '../constants/SecondaryButtonMode';

export type Values<T> = T[keyof T];

export type CookieConsentCategoryValues = Values<typeof CookieConsentCategory>;

export type CategoriesChangeset = {
  accepted: CookieConsentCategoryValues[];
  rejected: CookieConsentCategoryValues[];
  changed: CookieConsentCategoryValues[];
};

export type OnFirstAcceptCallback = (cookieConsent: CookieConsent) => void;
export type OnAcceptCallback = (cookieConsent: CookieConsent) => void;
export type OnChangeCallback = (cookieConsent: CookieConsent, categories: CategoriesChangeset) => void;

export type TranslationOverride = {
  consentTitle?: string;
  descriptionIntro?: string;
};

export type CookieConsentManagerOptions = {
  defaultLang: string;
  autodetectLang: boolean;
  consentCollectorApiUrl: string;
  onFirstAccept: OnFirstAcceptCallback;
  onAccept: OnAcceptCallback;
  onChange: OnChangeCallback;
  companyNames: string[];
  displayMode: Values<typeof DisplayMode>;
  secondaryButtonMode: Values<typeof SecondaryButtonMode>;
  translationOverrides: Record<string, TranslationOverride>;
  config: UserConfig;
};

export type CookieConsentManager = (serviceName: string, args?: Partial<CookieConsentManagerOptions>) => CookieConsent;
