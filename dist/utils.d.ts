import { CookieTableCategories } from './types';
type categoryTranslations = {
    necessary: {
        title: string;
        description: string;
    };
    ad: {
        title: string;
        description: string;
    };
    analytics: {
        title: string;
        description: string;
    };
    functionality: {
        title: string;
        description: string;
    };
    personalization: {
        title: string;
        description: string;
    };
};
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
export declare const assembleCookieTableSections: (headers: {
    [key: string]: string;
}, categoryTranslations: categoryTranslations, cookieTable: CookieTableCategories) => CookieConsent.Section[];
export {};
