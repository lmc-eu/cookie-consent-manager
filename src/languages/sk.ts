import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  pluralize,
} from '../utils';
import { ExtraMessages, Values } from '../types';
import { CookieConsentCategory } from '../constants';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';
import { SecondaryButtonMode } from '../constants/SecondaryButtonMode';

const extra = {
  and: 'a',
  company: 'spoločnosti',
  companies: 'spoločnostiam',
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
      title: lang.consentTitle ?? 'Vďaka Cookies budú naše stránky ešte lepšie',
      description: `
      ${assembleDescriptionIntro(
        'Presnejší obsah na mieru vám budeme zobrazovať, keď lepšie pochopíme, čo vás zaujíma.',
        lang.descriptionIntro,
      )}
      <p>
        Kliknutím na tlačidlo „Prijať všetky“ dáte
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(lang.companyNames, lang.and)}
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
      blocks: [
        {
          description: `Aby ste z našich stránok získali maximum, je najlepšie povoliť všetky typy cookies.
          Ďalšie informácie o tom, čo sú cookies a ako s nimi pracujeme, nájdete na stránkach
          <a href="https://www.lmc.eu/sk/cookies" target="_blank">Používania cookies</a>
          a v <a href="https://www.lmc.eu/sk/zasady-ochrany-sukromia" target="_blank">Zásadách ochrany súkromia</a>.`,
        },
        {
          title: 'Technicky nevyhnutné cookies',
          description: `Tieto cookies sú pre správne fungovanie nášho webu nevyhnutné, preto nie je možné ich vypnúť. Bez nich by sa na našich stránkach napr. nedal zobraziť žiadny obsah alebo by nefungovalo prihlásenie.`,
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          title: 'Analytické cookies',
          description: `Pomocou nich sledujeme, koľko ľudí náš web navštevuje a ako ho používajú. Vďaka tomu môžeme stránky a ďalšie služby neustále vylepšovať.`,
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Funkčné cookies',
          description: `Vďaka týmto cookies sú naše stránky ešte výkonnejšie a fungujú lepšie. Napríklad nám umožňujú používať chat, aby sme na vaše otázky mohli odpovedať rýchlo a jednoducho.`,
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Marketingové cookies',
          description: `S týmito cookies môžeme merať, aká efektívna je naša reklama a cielené ponuky našich služieb. Marketingové cookies nám umožnia vás na internete upozorniť na novinky, ktoré vás môžu zaujímať.`,
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Personalizačné cookies',
          description: `Naše služby fungujú lepšie, keď ich môžeme prispôsobiť na mieru konkrétnemu používateľovi. Povolením personalizačných cookies zvýšite šancu, že nájdete práve taký obsah, aký hľadáte.`,
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
