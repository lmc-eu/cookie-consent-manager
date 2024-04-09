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
  and: 'a',
  company: 'spoločnosti',
  companies: 'spoločnostiam',
  legalName: 'Alma Career a spoločnostiam z jej obchodné skupiny',
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
      title: lang.consentTitle ?? 'S cookies vám vieme lepšie prispôsobiť stránku',
      description: `
      ${assembleDescriptionIntro(
        'Presnejší obsah na mieru vám budeme zobrazovať, keď lepšie pochopíme, čo vás zaujíma.',
        lang.descriptionIntro,
      )}
      <p>
        Kliknutím na tlačidlo „Prijať všetky“ dáte
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        súhlas s využívaním súborov Cookies za účelom personalizácie, analýzy a cieleného marketingu.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Viac informácií o Cookies a úpravu ich používania nájdete vo <strong><a href="" data-cc="c-settings">vlastnom nastavení</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Prijať všetky',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Prijať nevyhnutné', 'Vlastné nastavenia'),
    },
    settings_modal: {
      title: 'Prispôsobiť nastavenia cookies',
      accept_all_btn: 'Prijať všetky',
      reject_all_btn: 'Prijať nevyhnutné',
      save_settings_btn: 'Uložiť nastavenia',
      cookie_table_headers: [{ name: 'Názov' }, { description: 'Popis' }, { expiration: 'Platnosť' }],
      blocks: [
        {
          description: `Aby ste z našich stránok získali maximum, je najlepšie povoliť všetky typy cookies.
            ${
              lang.settingsModalMoreInfo ??
              `Ďalšie informácie o tom, čo sú cookies a ako s nimi pracujeme, nájdete v <a href="https://www.almacareer.com/gdpr" target="_blank">Zásadách cookies</a>.`
            }`,
        },
        assembleCategoryNecessary(
          'Technicky nevyhnutné cookies',
          'Tieto cookies sú pre správne fungovanie nášho webu nevyhnutné, preto nie je možné ich vypnúť. Bez nich by sa na našich stránkach napr. nedal zobraziť žiadny obsah alebo by nefungovalo prihlásenie.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analytické cookies',
          'Pomocou nich sledujeme, koľko ľudí náš web navštevuje a ako ho používajú. Vďaka tomu môžeme stránky a ďalšie služby neustále vylepšovať.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funkčné cookies',
          'Vďaka týmto cookies sú naše stránky ešte výkonnejšie a fungujú lepšie. Napríklad nám umožňujú používať chat, aby sme na vaše otázky mohli odpovedať rýchlo a jednoducho.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Marketingové cookies',
          'S týmito cookies môžeme merať, aká efektívna je naša reklama a cielené ponuky našich služieb. Marketingové cookies nám umožnia vás na internete upozorniť na novinky, ktoré vás môžu zaujímať.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Personalizačné cookies',
          'Naše služby fungujú lepšie, keď ich môžeme prispôsobiť na mieru konkrétnemu používateľovi. Povolením personalizačných cookies zvýšite šancu, že nájdete práve taký obsah, aký hľadáte.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
