import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeLmc,
  pluralize,
} from '../utils';
import { ExtraMessages, Values } from '../types';
import { CookieConsentCategory, SecondaryButtonMode } from '../constants';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'и',
  company: 'компаниям',
  companies: 'компаниям',
  legalName: 'LMC и компании ее группы',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export const config = (
  extraMessages: ExtraMessages,
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
): VanillaCookieConsent.Languages => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
      title: lang.consentTitle ?? 'Этот сайт использует файлы cookie',
      description: `
      ${assembleDescriptionIntro(
        'Когда мы лучше поймем, что вас интересует, мы покажем вам лучший контент.',
        lang.descriptionIntro,
      )}
      <p>
        Нажав «Принять все», Вы даете свое согласие
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeLmc(lang.companyNames, lang.legalName), lang.and)}
        на использование файлов cookie и других идентификаторов на Вашем устройстве. Использование файлов cookie и других идентификаторов облегчит навигацию по сайту, отображения персонализированного контента, целевой маркетинг, анализ использования наших продуктов и услуг.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Вы можете настроить использование файлов cookie в <strong><a href="" data-cc="c-settings">собственных настройках</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Принять все',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Принятие необходимо', 'Cобственные настройкй'),
    },
    settings_modal: {
      title: 'Индивидуальные настройки файлов cookies',
      accept_all_btn: 'Принять все',
      reject_all_btn: 'Принятие необходимо',
      save_settings_btn: 'Сохранить настройки',
      blocks: [
        {
          description: `Чтобы Вы могли в максимальной мере и без проблем пользоваться нашим сайтом, мы рекомендуем
          разрешить просматривать и сохранять все типы файлов cookie.
          Вы можете найти дополнительную информацию о том, что такое файлы cookies, и как мы с ними работаем,
          на страницах <a href="https://www.lmc.eu/en/cookies/" target="_blank">Использование файлов cookie</a>
          и <a href="https://www.lmc.eu/en/privacy-policy/" target="_blank">Политика конфиденциальности персональных данных</a>.`,
        },
        {
          title: 'Технически необходимые файлы cookie',
          description: `Эти файлы cookie необходимы для правильной работы нашего веб-сайта, поэтому их невозможно отключить. Без них, например, на нашем веб-сайте невозможно было бы изобразить какое-либо содержание или было бы невозможно войти в систему.`,
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          title: 'Аналитические файлы cookie',
          description: `Мы используем их, чтобы отслеживать, сколько людей посещают наш веб-сайт и как они его используют. Это позволяет нам постоянно улучшать наш веб-сайт и другие услуги.`,
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Функциональные файлы cookie',
          description: `Благодаря этим файлам cookie наш веб-сайт стал еще продуктивнее и улучшил работу. Например, они позволяют нам использовать чат, чтобы мы могли быстро и просто ответить на вопросы.`,
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Маркетинговые файлы cookie',
          description: `С помощью этих файлов cookie мы можем измерить, насколько эффективны наша реклама и целевые предложения наших услуг. Маркетинговые файлы cookie позволяют нам по Интернету информировать Вас о новостях, которые могут вас заинтересовать.`,
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Файлы cookie для персонализации',
          description: `Наши услуги работают лучше, когда мы можем приспособить их к конкретному пользователю. Включив файлы cookie для персонализации, вы повысите вероятность того, что найдете именно то содержание, которое ищете.`,
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
