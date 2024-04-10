import { CookieTableCategories, Values, VanillaCookieConsent } from './types';
import { SecondaryButtonMode } from './constants';
export declare const addSeparators: (strings: string[], and?: string) => string;
export declare const pluralize: (count: number, singular: string, plural: string) => string;
/**
 * Replace "Alma Career" with provided full legal name
 */
export declare const legalizeAlmaCareer: (companyNames: string[], legalName: string) => string[];
/**
 * Assemble description intro based on default value and optional override value.
 */
export declare const assembleDescriptionIntro: (defaultValue: string, overrideValue?: string) => string;
/**
 * Assemble secondary button based on secondary button mode
 */
export declare const assembleSecondaryButton: (secondaryButtonMode: Values<typeof SecondaryButtonMode>, textAcceptNecessary: string, textShowSettings: string) => VanillaCookieConsent.ModalSecondaryButton;
export declare const isSettingsButtonNotShown: (secondaryButtonMode: Values<typeof SecondaryButtonMode>) => boolean;
export declare const assembleCategoryNecessary: (title: string, description: string, cookieTable: CookieTableCategories) => VanillaCookieConsent.ModalBlock;
export declare const assembleCategoryAd: (title: string, description: string, cookieTable: CookieTableCategories) => VanillaCookieConsent.ModalBlock;
export declare const assembleCategoryAnalytics: (title: string, description: string, cookieTable: CookieTableCategories) => VanillaCookieConsent.ModalBlock;
export declare const assembleCategoryFunctionality: (title: string, description: string, cookieTable: CookieTableCategories) => VanillaCookieConsent.ModalBlock;
export declare const assembleCategoryPersonalization: (title: string, description: string, cookieTable: CookieTableCategories) => VanillaCookieConsent.ModalBlock;
