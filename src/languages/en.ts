import { addSeparators } from '../utils';
import { ExtraMessages, LanguageConfig, PrimaryButtonRole, SecondaryButtonRole, CookieConsentLevel } from '../types';

const extra = {
  and: 'and',
};
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {array} [extraMessages.companyNames] - Array of strings with company names used to parametrized translations
 * @returns {LanguageConfig} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages): LanguageConfig => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
      title: 'This website uses cookies',
      description: `By clicking on "Accept all", you give your consent to ${addSeparators(
        lang.companyNames,
        extra.and,
      )} to use cookies and other identifiers on your device. The use of these cookies and other identifiers will simplify navigation on the site, enable personalized content, targeted marketing, analysis of the usage of our products and services.
      For more information read page <a href="https://www.lmc.eu/en/cookies/" target="_blank">Use of cookies</a>.`,
      primary_btn: {
        text: 'Accept all',
        role: PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Accept necessary',
        role: SecondaryButtonRole.ACCEPT_NECESSARY,
      },
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: CookieConsentLevel.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.PERSONALIZATION,
            enabled: false,
            readonly: false,
          },
        },
      ],
    },
  };
};

export default config;
