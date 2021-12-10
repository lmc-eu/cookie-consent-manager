import { addSeparators, pluralize } from '../utils';
import { ExtraMessages, LanguageConfig, PrimaryButtonRole, SecondaryButtonRole, CookieConsentLevel } from '../types';

const extra = {
  and: 'i',
  company: 'компаніям',
  companies: 'компаніям',
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
      title: 'Цей сайт використовує файли cookie',
      description: `Натиснувши «Прийняти все», Ви даєте свою згоду ${pluralize(
        lang.companyNames.length,
        lang.company,
        lang.companies,
      )} ${addSeparators(
        lang.companyNames,
        lang.and,
      )} на використання файлів cookie та інших ідентифікаторів на Вашому пристрої. Використання цих файлів cookie та інших ідентифікаторів полегшить навігацію по сайту, відображення персоналізованого контенту, цільовий маркетинг, аналіз використання наших продуктів і послуг.
      Для отримання додаткової інформації див. розділ <a href="https://www.lmc.eu/en/cookies/" target="_blank">Використання файлів cookie</a>.`,
      primary_btn: {
        text: 'Прийняти все',
        role: PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Прийняття необхідно',
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
