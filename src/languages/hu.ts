import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
} from '../utils';
import { ExtraMessages, Values } from '../types';
import { CookieConsentCategory, SecondaryButtonMode } from '../constants';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'és',
  legalName: 'Alma Career csoport és a hozzá tartozó vállalatok',
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
      blocks: [
        {
          description:
            `Ahhoz, hogy a maximumot hozhassa ki webhelyünkből, a legjobb, ha engedélyezi az összes cookie típust.\n` +
            (lang.settingsModalMoreInfo ??
              `További információkat arról, hogy mik azok a cookie-k és hogyan dolgozunk velük
              az <a href="https://www.almacareer.com/gdpr" target="_blank">Adatvédelmi szabályzat</a> honlapjain talál.`),
        },
        {
          title: 'Technikailag szükséges cookie-k',
          description: `Ezek a cookie-k weboldalunk megfelelő működéséhez szükségesek, ezért kikapcsolásuk nem lehetséges. Nélkülük például semmilyen tartalom nem jelenhetne meg weboldalunkon, vagy nem működne a bejelentkezés.`,
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          title: 'Analitikai cookie-k',
          description: `Segítségükkel nyomon követjük, hogy hányan látogatják oldalunkat, és hogyan használják. Ennek köszönhetően tehetjük meg webhelyünk és egyéb szolgáltatásaink folyamatos fejlesztését.`,
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Funkcionális cookie-k',
          description: `Ezeknek a cookie-knak köszönhetően weboldalunk még hatékonyabban és jobban működik. Például lehetővé teszik számunkra a chat használatát, hogy gyorsan és egyszerűen válaszolhassunk kérdéseire.`,
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Marketing cookie-k',
          description: `Ezekkel a cookie-kkel mérhetjük le, mennyire hatékonyak a hirdetéseink és szolgáltatásaink célzott ajánlatai. A marketing cookie-k lehetővé teszik, hogy figyelmeztessük az interneten megjelenő olyan hírekre, amelyek érdekesek lehetnek az Ön számára.m`,
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Személyre szabott cookie-k',
          description: `Szolgáltatásaink jobban működnek, ha egy adott felhasználóra tudjuk szabni őket. A személyre szabott cookie-k engedélyezésével növeli annak esélyét, hogy éppen a keresett tartalmat találja meg.`,
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
