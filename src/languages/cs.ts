import { addSeparators, pluralize } from '../utils';
import { CookieConsentCategory, ExtraMessages } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'a',
  company: 'společnosti',
  companies: 'společnostem',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {array} [extraMessages.companyNames] - Array of strings with company names used to parametrized translations
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages): VanillaCookieConsent.Languages => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
      title: 'Díky Cookies budou naše stránky ještě lepší',
      description: `Když lépe pochopíme, co vás zajímá, budeme vám zobrazovat přesnější obsah na míru.
      Kliknutím na tlačítko „Přijmout všechny“ dáte ${pluralize(
        lang.companyNames.length,
        lang.company,
        lang.companies,
      )} ${addSeparators(
        lang.companyNames,
        lang.and,
      )} souhlas s využíváním souborů Cookies na účely personalizace, analýzy a cíleného marketingu.
      <a href="https://www.lmc.eu/cs/cookies" target="_blank">Co jsou to Cookies a jak je používáme?</a>`,
      primary_btn: {
        text: 'Přijmout všechny',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Přijmout nezbytné',
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY,
      },
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
            enabled: false,
            readonly: false,
          },
        },
      ],
    },
  };
};

export default config;
