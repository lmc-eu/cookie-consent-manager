import { addSeparators, pluralize } from '../utils';
import { CookieConsentCategory, ExtraMessages } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'a',
  company: 'společnosti',
  companies: 'společnostem',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {array} [extraMessages.companyNames] - Array of strings with company names used to parametrized translations
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages): VanillaCookieConsent.Languages => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
      title: lang.consentTitle ?? 'Díky Cookies budou naše stránky ještě lepší',
      description: `
      <p>Když lépe pochopíme, co vás zajímá, budeme vám zobrazovat přesnější obsah na míru.</p>
      <p>
        Kliknutím na tlačítko „Přijmout všechny“ dáte
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(lang.companyNames, lang.and)}
        souhlas s využíváním souborů Cookies na účely personalizace, analýzy a cíleného marketingu.
        Další informace o Cookies a úpravu jejich používání naleznete
        ve <strong><a href="" data-cc="c-settings">vlastním nastavení</a></strong>.
      </p>`,
      primary_btn: {
        text: 'Přijmout všechny',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Přijmout nezbytné',
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY,
      },
    },
    settings_modal: {
      title: 'Přizpůsobit nastavení Cookies',
      accept_all_btn: 'Přijmout všechny',
      reject_all_btn: 'Přijmout nezbytné',
      save_settings_btn: 'Uložit nastavení',
      blocks: [
        {
          description: `Abyste z našich stránek získali maximum, je nejlepší povolit všechny typy Cookies.
          Další informace o tom, co jsou Cookies a jak s nimi pracujeme, najdete na stránkách
          <a href="https://www.lmc.eu/cs/cookies/" target="_blank">Používání Cookies</a>
          a <a href="https://www.lmc.eu/cs/zasady-ochrany-soukromi" target="_blank">Zásady ochrany soukromí</a>.`,
        },
        {
          title: 'Technicky nezbytné Cookies',
          description: `Tyto Cookies jsou pro správné fungování našeho webu nezbytné, proto není možné je vypnout.
          Bez nich by na našich stránkách např. nešel zobrazit žádný obsah nebo by nefungovalo přihlášení.`,
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          title: 'Analytické Cookies',
          description: `Pomocí nich sledujeme, kolik lidí náš web navštěvuje a jak ho používají.
          Díky tomu můžeme stránky a další služby neustále vylepšovat.`,
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Funkční Cookies',
          description: `Díky těmto Cookies jsou naše stránky ještě výkonnější a fungují lépe.
          Například nám umožňují používat chat, abychom na vaše otázky mohli odpovídat rychle a jednoduše.`,
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Marketingové Cookies',
          description: `S těmito Cookies můžeme měřit, jak efektivní je naše reklama a cílené nabídky našich služeb.
          Marketingové Cookies nám umožní vás na Internetu upozornit na novinky, které vás můžou zajímat.`,
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Personalizační Cookies',
          description: `Naše služby fungují lépe, když je můžeme přizpůsobit na míru konkrétnímu uživateli.
          Povolením Personalizačních cookies zvýšíte šanci, že najdete právě takový obsah, jaký hledáte.`,
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
