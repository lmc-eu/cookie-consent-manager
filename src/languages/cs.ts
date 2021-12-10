import { addSeparators, pluralize } from '../utils';
import { ExtraMessages, LanguageConfig, PrimaryButtonRole, SecondaryButtonRole, CookieConsentLevel } from '../types';

const extra = {
  and: 'a',
  company: 'společnosti',
  companies: 'společnostem',
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
      title: 'Tyto stránky využívají cookies',
      description: `Kliknutím na „Přijmout vše“ dáváte souhlas ${pluralize(
        lang.companyNames.length,
        lang.company,
        lang.companies,
      )} ${addSeparators(
        lang.companyNames,
        lang.and,
      )} k využívání souborů Cookies a dalších identifikátorů ve vašem zařízení. Použití těchto Cookies a dalších identifikátorů usnadní navigaci na stránkách, zobrazení personalizovaného obsahu, cílený marketing, analýzu využívání našich produktů a služeb.
      Více informací naleznete na stránce <a href="https://www.lmc.eu/cs/cookies" target="_blank">Používání cookies</a>.`,
      primary_btn: {
        text: 'Přijmout vše',
        role: PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Přijmout nezbytné',
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
