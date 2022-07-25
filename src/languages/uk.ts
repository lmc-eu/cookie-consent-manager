import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  getCookieTableHeaders,
  isSettingsButtonNotShown,
  pluralize,
} from '../utils';
import { ExtraMessages, Values } from '../types';
import { CookieConsentCategory } from '../constants';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';
import { SecondaryButtonMode } from '../constants/SecondaryButtonMode';

const extra = {
  and: 'i',
  company: 'компаніям',
  companies: 'компаніям',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @returns {LanguageSetting} Object with translated messages
 */
export const config = (
  extraMessages: ExtraMessages,
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
): LanguageSetting => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
      title: lang.consentTitle ?? 'Цей сайт використовує файли cookie',
      description: `
      ${assembleDescriptionIntro(
        'Якщо ми краще зрозуміємо, що вас цікавить, ми покажемо вам точніший контент.',
        lang.descriptionIntro,
      )}
      <p>
        Натиснувши «Прийняти все», Ви даєте свою згоду
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(lang.companyNames, lang.and)}
        на використання файлів cookie та інших ідентифікаторів на Вашому пристрої. Використання цих файлів cookie та інших ідентифікаторів полегшить навігацію по сайту, відображення персоналізованого контенту, цільовий маркетинг, аналіз використання наших продуктів і послуг.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Використання файлів Cookies Ви можете змінити в своїх <strong><a href="" data-cc="c-settings">власних Налаштуваннях</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Прийняти все',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Прийняття необхідно', 'Власнйe налаштуваннйe'),
    },
    settings_modal: {
      title: 'Користувацькі налаштування файлів Cookies',
      accept_all_btn: 'Прийняти все',
      reject_all_btn: 'Прийняття необхідно',
      save_settings_btn: 'Зберегти налаштування',
      cookie_table_headers: getCookieTableHeaders(),
      blocks: [
        {
          title: '',
          description: `Щоб отримати максимальну віддачу від нашого сайту, найкраще дозволити всі типи файлів Cookies.
          Додаткову інформацію про те, що таке файли Cookies і як ми з ними працюємо, можна отримати на сторінках
          <a href="https://www.lmc.eu/en/cookies/" target="_blank">Використання Cookies</a>
          і <a href="https://www.lmc.eu/en/privacy-policy/" target="_blank">Політика конфіденційності</a>.`,
        },
        {
          title: 'Технічно необхідні файли Cookies',
          description: `Ці файли Cookies необхідні для правильного функціонування нашого сайту, тому вимкнути їх неможливо. Без них було б неможливо відображати на нашому сайті його контент, або не працював би вхід на сайт.`,
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          title: 'Аналітичні файли Cookies',
          description: `Ми використовуємо їх для відстеження того, скільки людей відвідують наш веб-сайт і як вони ним користуються. Завдяки цьому ми можемо постійно покращувати сайт та інші сервіси.`,
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Функціональні файли Cookies',
          description: `Ці файли Cookies роблять наш сайт ще більш ефективним і покращують його роботу. Наприклад, вони дозволяють нам використовувати чат, щоб швидко і легко відповідати на ваші запитання.`,
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Маркетингові файли Cookies',
          description: `За допомогою цих файлів Cookies ми можемо оцінити, наскільки ефективна наша реклама і цільові пропозиції наших послуг. Маркетингові файли Cookies дозволяють нам інформувати Вас в Інтернеті про новини, які можуть вас зацікавити.`,
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Персоналізовані файли Cookies',
          description: `Наші сервіси працюють краще, коли ми можемо адаптувати їх до конкретного користувача. Дозволивши персоналізовані файли Cookies, ви збільшуєте ймовірність того, що знайдете потрібний контент.`,
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
