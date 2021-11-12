import { addSeparators, pluralize } from '../utils';

const extra = {
  and: 'a',
  company: 'spoločnosti',
  companies: 'spoločnostiam',
};

/**
 * @param {Object} [messages] - Object with extra messages
 * @param {array} [messages.companyNames] - Array of strings with company names used to parametrized translations
 * @returns {Object} Object with translated messages
 */
export const config = (messages) => {
  const lang = { ...extra, ...messages };

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
        role: 'accept_all',
      },
      secondary_btn: {
        text: 'Prijať nevyhnutné',
        role: 'accept_necessary',
      },
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: 'necessary',
            enabled: true,
            readonly: true,
          },
        },
        {
          toggle: {
            value: 'ad',
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: 'analytics',
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: 'functionality',
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: 'personalization',
            enabled: false,
            readonly: false,
          },
        },
      ],
    },
  };
};

export default config;
