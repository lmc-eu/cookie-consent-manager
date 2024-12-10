import {
  addSeparators,
  assembleCookieTableSections,
  assembleDescriptionIntro,
  legalizeAlmaCareer,
  pluralize,
} from '../utils';
import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'и',
  company: 'компаниям',
  companies: 'компаниям',
  legalName: 'Alma Career и компании ее группы',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Название', description: 'Описание', expiration: 'Срок Действия' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Этот сайт использует файлы cookie',
      description: `
      ${assembleDescriptionIntro(
        'Когда мы лучше поймем, что вас интересует, мы покажем вам лучший контент.',
        lang.descriptionIntro,
      )}
      <p>
        Нажав «Принять все», Вы даете свое согласие
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        на использование файлов cookie и других идентификаторов на Вашем устройстве. Использование файлов cookie и других идентификаторов облегчит навигацию по сайту, отображения персонализированного контента, целевой маркетинг, анализ использования наших продуктов и услуг.
        Вы можете настроить использование файлов cookie в <strong><a href="" data-cc="show-preferencesModal">собственных настройках</a></strong>.
      </p>`,
      acceptAllBtn: 'Принять все',
      acceptNecessaryBtn: 'Принятие необходимо',
    },
    preferencesModal: {
      title: 'Индивидуальные настройки файлов cookies',
      acceptAllBtn: 'Принять все',
      acceptNecessaryBtn: 'Принятие необходимо',
      savePreferencesBtn: 'Сохранить настройки',
      sections: [
        {
          description: `Чтобы Вы могли в максимальной мере и без проблем пользоваться нашим сайтом, мы рекомендуем
            разрешить просматривать и сохранять все типы файлов cookie.
            ${
              lang.settingsModalMoreInfo ??
              `Вы можете найти дополнительную информацию о том, что такое файлы cookies, и как мы с ними работаем, на странице <a href="https://www.almacareer.com/gdpr" target="_blank">Политика конфиденциальности персональных данных</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Технически необходимые файлы cookie',
              description:
                'Эти файлы cookie необходимы для правильной работы нашего веб-сайта, поэтому их невозможно отключить. Без них, например, на нашем веб-сайте невозможно было бы изобразить какое-либо содержание или было бы невозможно войти в систему.',
            },
            analytics: {
              title: 'Аналитические файлы cookie',
              description:
                'Мы используем их, чтобы отслеживать, сколько людей посещают наш веб-сайт и как они его используют. Это позволяет нам постоянно улучшать наш веб-сайт и другие услуги.',
            },
            functionality: {
              title: 'Функциональные файлы cookie',
              description:
                'Благодаря этим файлам cookie наш веб-сайт стал еще продуктивнее и улучшил работу. Например, они позволяют нам использовать чат, чтобы мы могли быстро и просто ответить на вопросы.',
            },
            ad: {
              title: 'Маркетинговые файлы cookie',
              description:
                'С помощью этих файлов cookie мы можем измерить, насколько эффективны наша реклама и целевые предложения наших услуг. Маркетинговые файлы cookie позволяют нам по Интернету информировать Вас о новостях, которые могут вас заинтересовать.',
            },
            personalization: {
              title: 'Файлы cookie для персонализации',
              description:
                'Наши услуги работают лучше, когда мы можем приспособить их к конкретному пользователю. Включив файлы cookie для персонализации, вы повысите вероятность того, что найдете именно то содержание, которое ищете.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
