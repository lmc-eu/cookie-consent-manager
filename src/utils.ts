import { CookieConsentCategoryValues, CookieTableCategories, Values, VanillaCookieConsent } from './types';
import { CookieConsentCategory, SecondaryButtonMode } from './constants';

export const addSeparators = (strings: string[], and: string = ''): string =>
  strings.reduce((accumulator: string, string: string, i: number) => {
    if (i === 0) {
      return `${accumulator}${string}`;
    }

    if (i === strings.length - 1) {
      return `${accumulator} ${and} ${string}`;
    }

    return `${accumulator}, ${string}`;
  });

export const pluralize = (count: number, singular: string, plural: string): string => (count === 1 ? singular : plural);

/**
 * Replace "Alma Career" with provided full legal name
 */
export const legalizeAlmaCareer = (companyNames: string[], legalName: string): string[] =>
  companyNames.map((value) => (value === 'Alma Career' ? legalName : value));

/**
 * Assemble description intro based on default value and optional override value.
 */
export const assembleDescriptionIntro = (defaultValue: string, overrideValue?: string): string => {
  const descriptionIntro = overrideValue ?? defaultValue;

  return descriptionIntro !== '' ? `<p>${descriptionIntro}</p>` : '';
};

/**
 * Assemble secondary button based on secondary button mode
 */
export const assembleSecondaryButton = (
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
  textAcceptNecessary: string,
  textShowSettings: string,
): VanillaCookieConsent.ModalSecondaryButton => {
  return {
    text: secondaryButtonMode === SecondaryButtonMode.ACCEPT_NECESSARY ? textAcceptNecessary : textShowSettings,
    role:
      secondaryButtonMode === SecondaryButtonMode.ACCEPT_NECESSARY
        ? VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
        : VanillaCookieConsent.SecondaryButtonRole.SETTINGS,
  };
};

export const isSettingsButtonNotShown = (secondaryButtonMode: Values<typeof SecondaryButtonMode>): boolean => {
  return secondaryButtonMode !== SecondaryButtonMode.SHOW_SETTINGS;
};

export const assembleCategoryNecessary = (
  title: string,
  description: string,
  cookieTable: CookieTableCategories,
): VanillaCookieConsent.ModalBlock => {
  return assembleCategoryBlock(
    CookieConsentCategory.NECESSARY,
    title,
    description,
    true,
    cookieTable[CookieConsentCategory.NECESSARY],
  );
};

export const assembleCategoryAd = (
  title: string,
  description: string,
  cookieTable: CookieTableCategories,
): VanillaCookieConsent.ModalBlock => {
  return assembleCategoryBlock(
    CookieConsentCategory.AD,
    title,
    description,
    false,
    cookieTable[CookieConsentCategory.AD],
  );
};

export const assembleCategoryAnalytics = (
  title: string,
  description: string,
  cookieTable: CookieTableCategories,
): VanillaCookieConsent.ModalBlock => {
  return assembleCategoryBlock(
    CookieConsentCategory.ANALYTICS,
    title,
    description,
    false,
    cookieTable[CookieConsentCategory.ANALYTICS],
  );
};

export const assembleCategoryFunctionality = (
  title: string,
  description: string,
  cookieTable: CookieTableCategories,
): VanillaCookieConsent.ModalBlock => {
  return assembleCategoryBlock(
    CookieConsentCategory.FUNCTIONALITY,
    title,
    description,
    false,
    cookieTable[CookieConsentCategory.FUNCTIONALITY],
  );
};

export const assembleCategoryPersonalization = (
  title: string,
  description: string,
  cookieTable: CookieTableCategories,
): VanillaCookieConsent.ModalBlock => {
  return assembleCategoryBlock(
    CookieConsentCategory.PERSONALIZATION,
    title,
    description,
    false,
    cookieTable[CookieConsentCategory.PERSONALIZATION],
  );
};

const assembleCategoryBlock = (
  category: CookieConsentCategoryValues,
  title: string,
  description: string,
  readonly: boolean,
  cookieTableItems: VanillaCookieConsent.CookieTableItem[] | undefined,
): VanillaCookieConsent.ModalBlock => {
  return {
    title,
    description,
    toggle: { value: category, enabled: readonly, readonly },
    ...(cookieTableItems !== undefined && { cookie_table: cookieTableItems }),
  };
};
