import {
  addSeparators,
  assembleCookieTableSections,
  assembleDescriptionIntro,
  legalizeAlmaCareer,
  pluralize,
} from '../utils';
import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'a',
  company: 'společnosti',
  companies: 'společnostem',
  legalName: 'Alma Career a společnostem z její obchodní skupiny',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Název', description: 'Popis', expiration: 'Platnost' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Díky Cookies budou naše stránky ještě lepší',
      description: `
      ${assembleDescriptionIntro(
        'Když lépe pochopíme, co vás zajímá, budeme vám zobrazovat přesnější obsah na míru.',
        lang.descriptionIntro,
      )}
      <p>
        Kliknutím na tlačítko „Přijmout všechny“ dáte
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        souhlas s využíváním souborů Cookies na účely personalizace, analýzy a cíleného marketingu.
        Další informace o Cookies a úpravu jejich používání naleznete ve <strong><a href="" data-cc="show-preferencesModal">vlastním nastavení</a></strong>.
      </p>`,
      acceptAllBtn: 'Přijmout všechny',
      acceptNecessaryBtn: 'Přijmout nezbytné',
    },
    preferencesModal: {
      title: 'Přizpůsobit nastavení Cookies',
      acceptAllBtn: 'Přijmout všechny',
      acceptNecessaryBtn: 'Přijmout nezbytné',
      savePreferencesBtn: 'Uložit nastavení',
      sections: [
        {
          description: `Abyste z našich stránek získali maximum, je nejlepší povolit všechny typy cookies.
            ${
              lang.settingsModalMoreInfo ??
              `Další informace o tom, co jsou cookies a jak s nimi pracujeme, najdete v <a href="https://www.almacareer.com/gdpr" target="_blank">Zásadách cookies</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Technicky nezbytné Cookies',
              description:
                'Tyto Cookies jsou pro správné fungování našeho webu nezbytné, proto není možné je vypnout. Bez nich by na našich stránkách např. nešel zobrazit žádný obsah nebo by nefungovalo přihlášení.',
            },
            analytics: {
              title: 'Analytické Cookies',
              description:
                'Pomocí nich sledujeme, kolik lidí náš web navštěvuje a jak ho používají. Díky tomu můžeme stránky a další služby neustále vylepšovat.',
            },
            functionality: {
              title: 'Funkční Cookies',
              description:
                'Díky těmto Cookies jsou naše stránky ještě výkonnější a fungují lépe. Například nám umožňují používat chat, abychom na vaše otázky mohli odpovídat rychle a jednoduše.',
            },
            ad: {
              title: 'Marketingové Cookies',
              description:
                'S těmito Cookies můžeme měřit, jak efektivní je naše reklama a cílené nabídky našich služeb. Marketingové Cookies nám umožní vás na Internetu upozornit na novinky, které vás můžou zajímat.',
            },
            personalization: {
              title: 'Personalizační Cookies',
              description:
                'Naše služby fungují lépe, když je můžeme přizpůsobit na míru konkrétnímu uživateli. Povolením Personalizačních cookies zvýšíte šanci, že najdete právě takový obsah, jaký hledáte.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
