import { addSeparators, pluralize } from '../utils';
import { ExtraMessages, LanguageConfig, PrimaryButtonRole, SecondaryButtonRole, CookieConsentLevel } from '../types';

const extra = {
  and: 'a',
  company: 'spoločnosti',
  companies: 'spoločnostiam',
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
      title: 'Tieto stránky používajú cookies',
      description: `Kliknutím na „Prijať všetky“ dávate súhlas ${pluralize(
        lang.companyNames.length,
        lang.company,
        lang.companies,
      )} ${addSeparators(
        lang.companyNames,
        lang.and,
      )} k využívaniu súborov Cookies a ďalších identifikátorov vo vašom zariadení. Použitie týchto cookies a ďalších identifikátorov uľahčí navigáciu na stránkach, zobrazenie personalizovaného obsahu, cielený marketing, analýzu využívania našich produktov a služieb.
      Viac informácií nájdete na stránke <a href="https://www.lmc.eu/sk/cookies" target="_blank">Používanie cookies</a>.`,
      primary_btn: {
        text: 'Prijať všetky',
        role: PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Prijať nevyhnutné',
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
