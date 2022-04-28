import { Values } from './types';
import { SecondaryButtonMode } from './constants/SecondaryButtonMode';
import { VanillaCookieConsent } from './types/vanilla-cookieconsent';
export declare const addSeparators: (strings: string[], and?: string) => string;
export declare const pluralize: (count: number, singular: string, plural: string) => string;
/**
 * Assemble description intro based on default value and optional override value.
 */
export declare const assembleDescriptionIntro: (defaultValue: string, overrideValue?: string | undefined) => string;
/**
 * Assemble secondary button based on secondary button mode
 */
export declare const assembleSecondaryButton: (secondaryButtonMode: Values<typeof SecondaryButtonMode>, textAcceptNecessary: string, textShowSettings: string) => VanillaCookieConsent.ModalSecondaryButton;
export declare const isSettingsButtonNotShown: (secondaryButtonMode: Values<typeof SecondaryButtonMode>) => boolean;
