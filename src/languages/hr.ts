import { addSeparators, assembleCookieTableSections, assembleDescriptionIntro, legalizeAlmaCareer } from '../utils';
import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'i',
  legalName: 'tvrtkama iz poslovne grupacije Alma Career',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Naziv', description: 'Opis', expiration: 'Valjanost' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Kolačići čine našu stranicu još boljom',
      description: `
      ${assembleDescriptionIntro(
        'Boljim razumijevanjem onoga što vas zanima, pokazat ćemo vam relevantniji sadržaj.',
        lang.descriptionIntro,
      )}
      <p>
        Klikom na gumb „Prihvati sve“, dajete
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        privolu za upotrebu kolačića za personalizaciju, analitiku i ciljani marketing.
        Možete prilagoditi upotrebu kolačića u svojim <strong><a href="" data-cc="show-preferencesModal">prilagođenim postavkama</a></strong>.
      </p>`,
      acceptAllBtn: 'Prihvati sve',
      acceptNecessaryBtn: 'Prihvati nužno',
    },
    preferencesModal: {
      title: 'Prilagođene postavke kolačića',
      acceptAllBtn: 'Prihvati sve',
      acceptNecessaryBtn: 'Prihvati nužno',
      savePreferencesBtn: 'Spremi postavke',
      sections: [
        {
          description: `Ako želite maksimalno iskoristiti našu web stranicu, najbolje je dopustiti sve vrste kolačića.
            ${
              lang.settingsModalMoreInfo ??
              `Više informacija o tome što su kolačići i kako s njima radimo možete pronaći na stranici <a href="https://www.almacareer.com/gdpr" target="_blank">Pravila privatnosti</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Tehnički nužni kolačići',
              description:
                'Ovi kolačići su ključni za pravilno funkcioniranje naše web stranice i stoga ih nije moguće onemogućiti. Bez njih nije moguće prikazati sadržaj ili se prijaviti na našu web stranicu.',
            },
            analytics: {
              title: 'Analitički kolačići',
              description:
                'Ovi nam pomažu pratiti koliko ljudi posjećuje našu web stranicu i kako je koriste. Te informacije nam omogućuju kontinuirano poboljšavanje web stranice i drugih usluga.',
            },
            functionality: {
              title: 'Funkcionalni kolačići',
              description:
                'Naša web stranica djeluje još učinkovitije i bolje zahvaljujući ovim kolačićima. Na primjer, omogućuju nam korištenje usluge razgovora i brzo i jednostavno odgovaranje na vaša pitanja.',
            },
            ad: {
              title: 'Marketing kolačići',
              description:
                'Ovi kolačići nam pomažu mjeriti učinkovitost našeg oglašavanja i ciljanih ponuda usluga. Marketing kolačići omogućuju nam donošenje vijesti koje bi vas mogle zanimati na internetu.',
            },
            personalization: {
              title: 'Personalizacijski kolačići',
              description:
                'Naše usluge bolje funkcioniraju ako ih možemo prilagoditi određenim korisnicima. Dopuštanjem personalizacijskih kolačića povećavate šanse da pronađete sadržaj koji želite.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
