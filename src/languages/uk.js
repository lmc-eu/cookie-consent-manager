import { addSeparators, pluralize } from '../utils';

const extra = {
  and: 'i',
  company: 'компаніям',
  companies: 'компаніям',
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
        role: 'accept_all',
      },
      secondary_btn: {
        text: 'Прийняття необхідно',
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
