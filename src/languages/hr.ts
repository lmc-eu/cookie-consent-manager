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
  and: 'i',
  legalName: 'tvrtkama iz poslovne grupacije Alma Career',
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
      cookie_table_headers: [{ name: 'Naziv' }, { description: 'Opis' }, { expiration: 'Valjanost' }],
      blocks: [
        {
          description:
            `Ako želite maksimalno iskoristiti našu web stranicu, najbolje je dopustiti sve vrste kolačića.\n` +
            (lang.settingsModalMoreInfo ??
              `Više informacija o tome što su kolačići i kako s njima radimo možete pronaći na stranici
              <a href="https://www.almacareer.com/gdpr" target="_blank">Pravila privatnosti</a>.`),
        },
        assembleCategoryNecessary(
          'Tehnički nužni kolačići',
          'Ovi kolačići su ključni za pravilno funkcioniranje naše web stranice i stoga ih nije moguće onemogućiti. Bez njih nije moguće prikazati sadržaj ili se prijaviti na našu web stranicu.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analitički kolačići',
          'Ovi nam pomažu pratiti koliko ljudi posjećuje našu web stranicu i kako je koriste. Te informacije nam omogućuju kontinuirano poboljšavanje web stranice i drugih usluga.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funkcionalni kolačići',
          'Naša web stranica djeluje još učinkovitije i bolje zahvaljujući ovim kolačićima. Na primjer, omogućuju nam korištenje usluge razgovora i brzo i jednostavno odgovaranje na vaša pitanja.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Marketing kolačići',
          'Ovi kolačići nam pomažu mjeriti učinkovitost našeg oglašavanja i ciljanih ponuda usluga. Marketing kolačići omogućuju nam donošenje vijesti koje bi vas mogle zanimati na internetu.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Personalizacijski kolačići',
          'Naše usluge bolje funkcioniraju ako ih možemo prilagoditi određenim korisnicima. Dopuštanjem personalizacijskih kolačića povećavate šanse da pronađete sadržaj koji želite.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
