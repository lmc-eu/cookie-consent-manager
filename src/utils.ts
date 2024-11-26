import { CookieConsentCategoryValues, CookieTableCategories, Values } from './types';
import { CookieConsentCategory, SecondaryButtonMode } from './constants';

type categoryTranslations = {
  necessary: { title: string; description: string };
  ad: { title: string; description: string };
  analytics: { title: string; description: string };
  functionality: { title: string; description: string };
  personalization: { title: string; description: string };
};

export const addSeparators = (strings: string[], and = ''): string =>
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
): { [key: string]: string } => {
  if (secondaryButtonMode === SecondaryButtonMode.ACCEPT_NECESSARY) {
    return { acceptNecessaryBtn: textAcceptNecessary };
  }
  return { showPreferencesBtn: textShowSettings };
};

export const isSettingsButtonNotShown = (secondaryButtonMode: Values<typeof SecondaryButtonMode>): boolean =>
  secondaryButtonMode !== SecondaryButtonMode.SHOW_SETTINGS;

export const assembleCookieTableSections = (
  headers: { [key: string]: string },
  categoryTranslations: categoryTranslations,
  cookieTable: CookieTableCategories,
): CookieConsent.Section[] => {
  return [
    assembleCategoryBlock(
      headers,
      CookieConsentCategory.NECESSARY,
      categoryTranslations.necessary.title,
      categoryTranslations.necessary.description,
      cookieTable[CookieConsentCategory.NECESSARY],
    ),
    assembleCategoryBlock(
      headers,
      CookieConsentCategory.AD,
      categoryTranslations.ad.title,
      categoryTranslations.ad.description,
      cookieTable[CookieConsentCategory.AD],
    ),
    assembleCategoryBlock(
      headers,
      CookieConsentCategory.ANALYTICS,
      categoryTranslations.analytics.title,
      categoryTranslations.analytics.description,
      cookieTable[CookieConsentCategory.ANALYTICS],
    ),
    assembleCategoryBlock(
      headers,
      CookieConsentCategory.FUNCTIONALITY,
      categoryTranslations.functionality.title,
      categoryTranslations.functionality.description,
      cookieTable[CookieConsentCategory.FUNCTIONALITY],
    ),
    assembleCategoryBlock(
      headers,
      CookieConsentCategory.PERSONALIZATION,
      categoryTranslations.personalization.title,
      categoryTranslations.personalization.description,
      cookieTable[CookieConsentCategory.PERSONALIZATION],
    ),
  ];
};

const assembleCategoryBlock = (
  headers: { [key: string]: string },
  linkedCategory: CookieConsentCategoryValues,
  title: string,
  description: string,
  cookieTableItems: { [p: string]: string }[] | undefined,
): CookieConsent.Section => ({
  title,
  description,
  linkedCategory,
  ...(typeof cookieTableItems !== 'undefined' && {
    cookieTable: {
      headers: headers,
      body: cookieTableItems,
    },
  }),
});
