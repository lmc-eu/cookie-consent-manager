import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
  assembleCategoryNecessary,
  assembleCategoryAnalytics,
  assembleCategoryFunctionality,
  assembleCategoryAd,
  assembleCategoryPersonalization,
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { CookieConsentCategory, SecondaryButtonMode } from '../constants';

const extra = {
  and: 'és',
  legalName: 'Alma Career csoport és a hozzá tartozó vállalatok',
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
      title: lang.consentTitle ?? 'Az oldalak süti fájlokat használnak',
      description: `
      ${assembleDescriptionIntro(
        'Ha jobban megértjük, mi érdekli Önt, akkor pontosabban személyre szabott tartalmat tudunk Önnek megjeleníteni.',
        lang.descriptionIntro,
      )}
      <p>
        A „Mindent elfogadok” gombra kattintva a hozzájárulását adja ahhoz, hogy az
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra.and)}
        süti fájlokat és egyéb azonosítókat használjon az Ön eszközén. E süti fájlok és egyéb azonosítók használata megkönnyíti a weboldalon belüli navigációt, a személyre szabott tartalom megjelenítését, a célzott marketinget, valamint termékeink és szolgáltatásaink használatának elemzését.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `A cookie-k használatát testre szabhatja <strong><a href="" data-cc="c-settings">saját beállításaiban</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Minden elfogadása',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(
        secondaryButtonMode,
        'A legszükségesebbek elfogadása',
        'Egyéni beállítások',
      ),
    },
    settings_modal: {
      title: 'Egyedi cookie-fájl beállítások',
      accept_all_btn: 'Minden elfogadása',
      reject_all_btn: 'A legszükségesebbek elfogadása',
      save_settings_btn: 'Beállítások mentése',
      cookie_table_headers: [{ name: 'Név' }, { description: 'Leírás' }, { expiration: 'Érvényesség' }],
      blocks: [
        {
          description:
            `Ahhoz, hogy a maximumot hozhassa ki webhelyünkből, a legjobb, ha engedélyezi az összes cookie típust.\n` +
            (lang.settingsModalMoreInfo ??
              `További információkat arról, hogy mik azok a cookie-k és hogyan dolgozunk velük
              az <a href="https://www.almacareer.com/gdpr" target="_blank">Adatvédelmi szabályzat</a> oldalán találsz.`),
        },
        assembleCategoryNecessary(
          'Technikailag szükséges cookie-k',
          'Ezek a cookie-k weboldalunk megfelelő működéséhez szükségesek, ezért kikapcsolásuk nem lehetséges. Nélkülük például semmilyen tartalom nem jelenhetne meg weboldalunkon, vagy nem működne a bejelentkezés.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analitikai cookie-k',
          'Segítségükkel nyomon követjük, hogy hányan látogatják oldalunkat, és hogyan használják. Ennek köszönhetően tehetjük meg webhelyünk és egyéb szolgáltatásaink folyamatos fejlesztését.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funkcionális cookie-k',
          'Ezeknek a cookie-knak köszönhetően weboldalunk még hatékonyabban és jobban működik. Például lehetővé teszik számunkra a chat használatát, hogy gyorsan és egyszerűen válaszolhassunk kérdéseire.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Marketing cookie-k',
          'Ezekkel a cookie-kkel mérhetjük le, mennyire hatékonyak a hirdetéseink és szolgáltatásaink célzott ajánlatai. A marketing cookie-k lehetővé teszik, hogy figyelmeztessük az interneten megjelenő olyan hírekre, amelyek érdekesek lehetnek az Ön számára.m',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Személyre szabott cookie-k',
          'Szolgáltatásaink jobban működnek, ha egy adott felhasználóra tudjuk szabni őket. A személyre szabott cookie-k engedélyezésével növeli annak esélyét, hogy éppen a keresett tartalmat találja meg.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
