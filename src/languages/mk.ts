import {
  addSeparators,
  assembleCategoryAd,
  assembleCategoryAnalytics,
  assembleCategoryFunctionality,
  assembleCategoryNecessary,
  assembleCategoryPersonalization,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
  pluralize,
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { SecondaryButtonMode } from '../constants';

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
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export const config = (
  extraMessages: ExtraMessages,
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
  cookieTable: CookieTableCategories,
): VanillaCookieConsent.Languages => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
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
            ? `Можете да ја прилагодите употребата на колачиња во вашите <strong><a href="" data-cc="c-settings">сопствени поставки</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Прифатете ги сите',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Прифатете ги неопходните', 'сопствени поставки'),
    },
    settings_modal: {
      title: 'сопствени поставки Колачињата',
      accept_all_btn: 'Прифатете ги сите',
      reject_all_btn: 'Прифатете ги неопходните',
      save_settings_btn: 'Зачувајте ги поставките',
      cookie_table_headers: [{ name: 'Назив' }, { description: 'Опис' }, { expiration: 'Истекување' }],
      blocks: [
        {
          description: `Ако сакате да го извлечете максимумот од нашата веб-страна, најдобро е да ги прифатите сите колачиња.
            ${
              lang.settingsModalMoreInfo ??
              `Можете да најдете повеќе информации за тоа што се колачиња и како работиме со нив во делот <a href="https://www.almacareer.com/gdpr" target="_blank">Политика за приватност</a>.`
            }`,
        },
        assembleCategoryNecessary(
          'Технички неопходни колачиња',
          'Овие колачиња се од суштинско значење за правилното функционирање на нашата веб-страна и затоа не можат да се оневозможат. Без нив не би било можно прикажување на која било содржина или најавување на нашата веб-страна.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Аналитички колачиња',
          'Овие колачиња ни помагаат да следиме колку луѓе ја посетуваат нашата веб-страна и како ја користат. Овие информации потоа ни овозможуваат постојано да ја подобруваме веб-страницата и другите услуги.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Функционални колачиња',
          'Нашата веб-страна е уште поефикасна и работи подобро благодарение на овие колачиња. На пример, тие ни овозможуваат да ја користиме опцијата за чет и да одговориме на вашите прашања брзо и лесно.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Маркетинг колачиња',
          'Овие колачиња ни помагаат да ја измериме ефективноста на нашите маркетинг активности. Маркетинг колачињата ни овозможуваат да ви пласираме новости што може да ве интересираат.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Колачиња за персонализација',
          'Ги унапредуваме нашите услуги доколку можеме да ги прилагодиме на одредени корисници. Дозволувајќи колачиња за персонализација, ги зголемувате вашите шанси да ја пронајдете содржината што ја сакате.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
