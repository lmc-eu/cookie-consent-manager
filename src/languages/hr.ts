import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  pluralize,
  legalizeAlmaCareer,
} from '../utils';
import { ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { CookieConsentCategory, SecondaryButtonMode } from '../constants';

const extra = {
  and: 'i',
  legalName: 'tvrtkama iz poslovne grupacije Alma Career',
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
      title: lang.consentTitle ?? 'Kolačići čine našu stranicu još boljom',
      description: `
      ${assembleDescriptionIntro(
        'Boljim razumijevanjem onoga što vas zanima, pokazat ćemo vam relevantniji sadržaj.',
        lang.descriptionIntro,
      )}
      <p>
        Klikom na gumb „Prihvati sve“, dajete
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        privolu za upotrebu kolačića za personalizaciju, analitiku i ciljani marketing..
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Možete prilagoditi upotrebu kolačića u svojim <strong><a href="" data-cc="c-settings">prilagođenim postavkama</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Prihvati sve',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Prihvati nužno', 'Prilagođene postavke'),
    },
    settings_modal: {
      title: 'Prilagođene postavke kolačića',
      accept_all_btn: 'Prihvati sve',
      reject_all_btn: 'Prihvati nužno',
      save_settings_btn: 'Spremi postavke',
      blocks: [
        {
          description:
            `Ako želite maksimalno iskoristiti našu web stranicu, najbolje je dopustiti sve vrste kolačića.\n` +
            (lang.settingsModalMoreInfo ??
              `Više informacija o tome što su kolačići i kako s njima radimo možete pronaći na stranici
              <a href="https://www.almacareer.com/gdpr" target="_blank">Pravila privatnosti</a>.`),
        },
        {
          title: 'Tehnički nužni kolačići',
          description: `Ovi kolačići su ključni za pravilno funkcioniranje naše web stranice i stoga ih nije moguće onemogućiti.
          Bez njih nije moguće prikazati sadržaj ili se prijaviti na našu web stranicu.`,
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          title: 'Analitički kolačići',
          description: `Ovi nam pomažu pratiti koliko ljudi posjećuje našu web stranicu i kako je koriste.
          Te informacije nam omogućuju kontinuirano poboljšavanje web stranice i drugih usluga.`,
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Funkcionalni kolačići',
          description: `Naša web stranica djeluje još učinkovitije i bolje zahvaljujući ovim kolačićima.
          Na primjer, omogućuju nam korištenje usluge razgovora i brzo i jednostavno odgovaranje na vaša pitanja.`,
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Marketing kolačići',
          description: `Ovi kolačići nam pomažu mjeriti učinkovitost našeg oglašavanja i ciljanih ponuda usluga.
          Marketing kolačići omogućuju nam donošenje vijesti koje bi vas mogle zanimati na internetu.`,
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Personalizacijski kolačići',
          description: `Naše usluge bolje funkcioniraju ako ih možemo prilagoditi određenim korisnicima.
          Dopuštanjem personalizacijskih kolačića povećavate šanse da pronađete sadržaj koji želite.`,
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
