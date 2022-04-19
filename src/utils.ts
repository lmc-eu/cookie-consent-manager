import { Values } from './types';
import { SecondaryButtonMode } from './constants/SecondaryButtonMode';
import { VanillaCookieConsent } from './types/vanilla-cookieconsent';

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
