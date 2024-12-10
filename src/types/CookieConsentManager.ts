import { CookieConsentCategory, DisplayMode, SecondaryButtonMode } from '../constants';
import CookieConsent, { CookieConsentConfig, CookieValue } from 'vanilla-cookieconsent';

/* eslint-disable no-unused-vars */
export type Values<T> = T[keyof T];

export type CookieConsentCategoryValues = Values<typeof CookieConsentCategory>;

export type CategoriesChangeset = {
  accepted: CookieConsentCategoryValues[];
  rejected: CookieConsentCategoryValues[];
  changed: CookieConsentCategoryValues[];
};

export type OnFirstAcceptCallback = (param: { cookieConsent: typeof CookieConsent; cookie: CookieValue }) => void;
export type OnAcceptCallback = (param: { cookieConsent: typeof CookieConsent; cookie: CookieValue }) => void;
export type OnChangeCallback = (param: {
  cookieConsent: typeof CookieConsent;
  cookie: CookieValue;
  categories: CategoriesChangeset;
}) => void;

export type TranslationOverride = {
  consentTitle?: string;
  descriptionIntro?: string;
  settingsModalMoreInfo?: string;
};

export type CookieTableCategories = {
  [category in CookieConsentCategoryValues]: { [p: string]: string }[];
};

export type CookieTable = {
  [language: string]: CookieTableCategories;
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
  cookieTable: CookieTable;
  config?: Partial<CookieConsentConfig>;
};

export type CookieConsentManager = (
  serviceName: string,
  args?: Partial<CookieConsentManagerOptions>,
) => typeof CookieConsent;
/* eslint-enable no-unused-vars */
