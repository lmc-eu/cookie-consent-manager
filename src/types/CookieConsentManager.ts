import { CookieConsentCategory, DisplayMode } from '../constants';
import CookieConsent, { CookieConsentConfig, CookieValue } from 'vanilla-cookieconsent';

/* eslint-disable no-unused-vars */
export type Values<T> = T[keyof T];

export type CookieConsentCategoryValues = Values<typeof CookieConsentCategory>;

export type CategoriesChangeset = {
  accepted: CookieConsentCategoryValues[];
  rejected: CookieConsentCategoryValues[];
  changed: CookieConsentCategoryValues[];
};

export type OnFirstConsentCallback = (param: { cookieConsent: typeof CookieConsent; cookie: CookieValue }) => void;
export type OnConsentCallback = (param: { cookieConsent: typeof CookieConsent; cookie: CookieValue }) => void;
export type OnChangeCallback = (param: {
  cookieConsent: typeof CookieConsent;
  cookie: CookieValue;
  categories: CategoriesChangeset;
}) => void;

export type TranslationOverride = {
  consentTitle?: string;
  descriptionIntro?: string;
  preferencesModalMoreInfo?: string;
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
  onFirstConsent: OnFirstConsentCallback;
  onConsent: OnConsentCallback;
  onChange: OnChangeCallback;
  companyNames: string[];
  displayMode: Values<typeof DisplayMode>;
  translationOverrides: Record<string, TranslationOverride>;
  cookieTable: CookieTable;
  config?: Partial<CookieConsentConfig>;
};

export type CookieConsentManager = (
  serviceName: string,
  args?: Partial<CookieConsentManagerOptions>,
) => typeof CookieConsent;
/* eslint-enable no-unused-vars */
