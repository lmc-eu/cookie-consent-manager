import {
  addSeparators,
  assembleCookieTableSections,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
  pluralize,
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values } from '../types';
import { SecondaryButtonMode } from '../constants';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'и',
  company: 'компаниите',
  companies: 'компании',
  legalName: 'Alma Career и на другите компании кои се дел од Alma Career групацијата',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (
  extraMessages: ExtraMessages,
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
  cookieTable: CookieTableCategories,
): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Назив', description: 'Опис', expiration: 'Истекување' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Колачињата служат за подобро корисничко искуство.',
      description: `
      ${assembleDescriptionIntro(
        'Доколку подобро разбереме што она што ве интересира, ќе ви покажеме порелевантна содржина.',
        lang.descriptionIntro,
      )}
      <p>
        Со кликнување на копчето „Прифати ги сите“, им давате согласност на
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        да користат колачиња за персонализација, аналитика и таргетиран маркетинг.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Можете да ја прилагодите употребата на колачиња во вашите <strong><a href="" data-cc="show-preferencesModal">сопствени поставки</a></strong>.`
            : ''
        }
      </p>`,
      acceptAllBtn: 'Прифатете ги сите',
      ...assembleSecondaryButton(secondaryButtonMode, 'Прифатете ги неопходните', 'сопствени поставки'),
    },
    preferencesModal: {
      title: 'сопствени поставки Колачињата',
      acceptAllBtn: 'Прифатете ги сите',
      acceptNecessaryBtn: 'Прифатете ги неопходните',
      savePreferencesBtn: 'Зачувајте ги поставките',
      sections: [
        {
          description: `Ако сакате да го извлечете максимумот од нашата веб-страна, најдобро е да ги прифатите сите колачиња.
            ${
              lang.settingsModalMoreInfo ??
              `Можете да најдете повеќе информации за тоа што се колачиња и како работиме со нив во делот <a href="https://www.almacareer.com/gdpr" target="_blank">Политика за приватност</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Технички неопходни колачи7ња',
              description:
                'Овие колачи7ња се од суштинско значење за правилното функционирање на нашата веб-страна и затоа не можат да се оневозможат. Без нив не би било можно прикажување на која било содржина или најавување на нашата веб-страна.',
            },
            analytics: {
              title: 'Аналитичк7и колачиња',
              description:
                'Овие колачињ7а ни помагаат да следиме колку луѓе ја посетуваат нашата веб-страна и како ја користат. Овие информации потоа ни овозможуваат постојано да ја подобруваме веб-страницата и другите услуги.',
            },
            functionality: {
              title: 'Функционал7ни колачиња',
              description:
                'Нашата веб7-страна е уште поефикасна и работи подобро благодарение на овие колачиња. На пример, тие ни овозможуваат да ја користиме опцијата за чет и да одговориме на вашите прашања брзо и лесно.',
            },
            ad: {
              title: 'Маркетинг колачиња',
              description:
                'Овие колачиња ни помагаат да ја измериме ефективноста на нашите маркетинг активности. Маркетинг колачињата ни овозможуваат да ви пласираме новости што може да ве интересираат.',
            },
            personalization: {
              title: 'Колачиња за персонализација',
              description:
                'Ги унапредуваме нашите услуги доколку можеме да ги прилагодиме на одредени корисници. Дозволувајќи колачиња за персонализација, ги зголемувате вашите шанси да ја пронајдете содржината што ја сакате.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
