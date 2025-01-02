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
  and: 'i',
  company: 'компаніям',
  companies: 'компаніям',
  legalName: 'Alma Career та компаніям з її групи',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Назва', description: 'Опис', expiration: 'Термін Дії' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Цей сайт використовує файли cookie',
      description: `
      ${assembleDescriptionIntro(
        'Якщо ми краще зрозуміємо, що вас цікавить, ми покажемо вам точніший контент.',
        lang.descriptionIntro,
      )}
      <p>
        Натиснувши «Прийняти все», Ви даєте свою згоду
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        на використання файлів cookie та інших ідентифікаторів на Вашому пристрої. Використання цих файлів cookie та інших ідентифікаторів полегшить навігацію по сайту, відображення персоналізованого контенту, цільовий маркетинг, аналіз використання наших продуктів і послуг.
        Використання файлів Cookies Ви можете змінити в своїх <strong><a href="" data-cc="show-preferencesModal">власних Налаштуваннях</a></strong>.
      </p>`,
      acceptAllBtn: 'Прийняти все',
      acceptNecessaryBtn: 'Прийняття необхідно',
    },
    preferencesModal: {
      title: 'Користувацькі налаштування файлів Cookies',
      acceptAllBtn: 'Прийняти все',
      acceptNecessaryBtn: 'Прийняття необхідно',
      savePreferencesBtn: 'Зберегти налаштування',
      sections: [
        {
          description: `Щоб отримати максимальну віддачу від нашого сайту, найкраще дозволити всі типи файлів Cookies.
            ${
              lang.preferencesModalMoreInfo ??
              `Додаткову інформацію про те, що таке файли Cookies, і як ми з ними працюємо, можна отримати на сторінках <a href="https://www.almacareer.com/gdpr" target="_blank">Політика конфіденційності</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Технічно необхідні файли Cookies',
              description:
                'Ці файли Cookies необхідні для правильного функціонування нашого сайту, тому вимкнути їх неможливо. Без них було б неможливо відображати на нашому сайті його контент, або не працював би вхід на сайт.',
            },
            analytics: {
              title: 'Аналітичні файли Cookies',
              description:
                'Ми використовуємо їх для відстеження того, скільки людей відвідують наш веб-сайт і як вони ним користуються. Завдяки цьому ми можемо постійно покращувати сайт та інші сервіси.',
            },
            functionality: {
              title: 'Функціональні файли Cookies',
              description:
                'Ці файли Cookies роблять наш сайт ще більш ефективним і покращують його роботу. Наприклад, вони дозволяють нам використовувати чат, щоб швидко і легко відповідати на ваші запитання.',
            },
            ad: {
              title: 'Маркетингові файли Cookies',
              description:
                'За допомогою цих файлів Cookies ми можемо оцінити, наскільки ефективна наша реклама і цільові пропозиції наших послуг. Маркетингові файли Cookies дозволяють нам інформувати Вас в Інтернеті про новини, які можуть вас зацікавити.',
            },
            personalization: {
              title: 'Персоналізовані файли Cookies',
              description:
                'Наші сервіси працюють краще, коли ми можемо адаптувати їх до конкретного користувача. Дозволивши персоналізовані файли Cookies, ви збільшуєте ймовірність того, що знайдете потрібний контент.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
