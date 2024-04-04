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
  and: 'i',
  company: 'kompaniji',
  companies: 'kompanijama',
  legalName: 'Alma Career i drugim kompanijama iz njene poslovne grupe',
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
        'Bolje razumijevanje onoga što vas zanima, pokazat ćemo vam relevantniji sadržaj.',
        lang.descriptionIntro,
      )}
      <p>
        Klikom na dugme „Prihvati sve“, dajete
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        svoju saglasnost za korištenje kolačića za personalizaciju, analitiku i ciljani marketing.
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
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Prihvatiti neophodno', 'Prilagođenim postavkama'),
    },
    settings_modal: {
      title: 'Prilagođenim postavkama kolačića',
      accept_all_btn: 'Prihvati sve',
      reject_all_btn: 'Prihvatiti neophodno',
      save_settings_btn: 'Sačuvaj postavke',
      cookie_table_headers: [{ name: 'Naziv' }, { description: 'Opis' }, { expiration: 'Isticanje' }],
      blocks: [
        {
          description: `Ako želite da izvučete maksimum iz naše web stranice, najbolje je dozvoliti sve vrste kolačića.
            ${
              lang.settingsModalMoreInfo ??
              `Više informacija o tome šta su kolačići i kako radimo s njima možete pronaći na stranici <a href="https://www.almacareer.com/gdpr" target="_blank">Politika privatnosti</a>.`
            }`,
        },
        assembleCategoryNecessary(
          'Tehnički potrebni kolačići',
          'Ovi kolačići su neophodni za pravilno funkcioniranje naše web stranice i stoga se ne mogu onemogućiti. Bez njih ne bi bilo moguće npr. za prikaz bilo kojeg sadržaja ili za prijavu na našu web stranicu.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analitički kolačići',
          'To nam pomaže da pratimo koliko ljudi posjeti našu web stranicu i kako je koriste. Ove informacije nam zatim omogućavaju da kontinuirano poboljšavamo web stranicu i druge usluge.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funkcionalni kolačići',
          'Naša web stranica je još efikasnija i radi bolje zahvaljujući ovim kolačićima. Na primjer, omogućavaju nam korištenje usluge chata i brzo i jednostavno odgovaranje na vaša pitanja.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Marketinški kolačići',
          'Ovi kolačići nam pomažu da izmjerimo učinkovitost našeg oglašavanja i ciljanih ponuda usluga. Marketinški kolačići nam omogućavaju da vam donesemo vijesti koje bi vas mogle zanimati na Internetu.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Kolačići za personalizaciju',
          'Naše usluge bolje funkcioniraju ako ih možemo prilagoditi određenim korisnicima. Dopuštanjem kolačića za personalizaciju povećavate svoje šanse da pronađete sadržaj koji želite.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
