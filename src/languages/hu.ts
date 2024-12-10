import { addSeparators, assembleCookieTableSections, assembleDescriptionIntro, legalizeAlmaCareer } from '../utils';
import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'és',
  legalName: 'Alma Career csoport és a hozzá tartozó vállalatok',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Név', description: 'Leírás', expiration: 'Érvényesség' };

  return {
    consentModal: {
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
        A cookie-k használatát testre szabhatja <strong><a href="" data-cc="show-preferencesModal">saját beállításaiban</a></strong>.
      </p>`,
      acceptAllBtn: 'Minden elfogadása',
      acceptNecessaryBtn: 'A legszükségesebbek elfogadása',
    },
    preferencesModal: {
      title: 'Egyedi cookie-fájl beállítások',
      acceptAllBtn: 'Minden elfogadása',
      acceptNecessaryBtn: 'A legszükségesebbek elfogadása',
      savePreferencesBtn: 'Beállítások mentése',
      sections: [
        {
          description: `Ahhoz, hogy a maximumot hozhassa ki webhelyünkből, a legjobb, ha engedélyezi az összes cookie típust.
            ${
              lang.settingsModalMoreInfo ??
              `További információkat arról, hogy mik azok a cookie-k és hogyan dolgozunk velük az <a href="https://www.almacareer.com/gdpr" target="_blank">Adatvédelmi szabályzat</a> oldalán találsz.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Technikailag szükséges cookie-k',
              description:
                'Ezek a cookie-k weboldalunk megfelelő működéséhez szükségesek, ezért kikapcsolásuk nem lehetséges. Nélkülük például semmilyen tartalom nem jelenhetne meg weboldalunkon, vagy nem működne a bejelentkezés.',
            },
            analytics: {
              title: 'Analitikai cookie-k',
              description:
                'Segítségükkel nyomon követjük, hogy hányan látogatják oldalunkat, és hogyan használják. Ennek köszönhetően tehetjük meg webhelyünk és egyéb szolgáltatásaink folyamatos fejlesztését.',
            },
            functionality: {
              title: 'Funkcionális cookie-k',
              description:
                'Ezeknek a cookie-knak köszönhetően weboldalunk még hatékonyabban és jobban működik. Például lehetővé teszik számunkra a chat használatát, hogy gyorsan és egyszerűen válaszolhassunk kérdéseire.',
            },
            ad: {
              title: 'Marketing cookie-k',
              description:
                'Ezekkel a cookie-kkel mérhetjük le, mennyire hatékonyak a hirdetéseink és szolgáltatásaink célzott ajánlatai. A marketing cookie-k lehetővé teszik, hogy figyelmeztessük az interneten megjelenő olyan hírekre, amelyek érdekesek lehetnek az Ön számára.m',
            },
            personalization: {
              title: 'Személyre szabott cookie-k',
              description:
                'Szolgáltatásaink jobban működnek, ha egy adott felhasználóra tudjuk szabni őket. A személyre szabott cookie-k engedélyezésével növeli annak esélyét, hogy éppen a keresett tartalmat találja meg.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
