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
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { SecondaryButtonMode } from '../constants';

const extra = {
  and: 'bei',
  legalName: 'Alma Career ir kitoms jos verslo grupės įmonėms',
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
      title: lang.consentTitle ?? 'Slapukai mūsų svetainę daro dar geresnę',
      description: `
      ${assembleDescriptionIntro(
        'Geriau suprasdami, kas jus domina, mes rodysime jums aktualų turinį.',
        lang.descriptionIntro,
      )}
      <p>
        Spustelėję mygtuką „Priimti viską“, duodate
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        sutikimą naudoti slapukus personalizavimui, analizei ir tikslinei rinkodarai.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Slapukų naudojimą galite pritaikyti <strong><a href="" data-cc="c-settings">pasirinktinuose nustatymuose</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Priimti viską',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Priimti būtinus', 'Pasirinktiniai nustatymai'),
    },
    settings_modal: {
      title: 'Individualūs slapukų nustatymai',
      accept_all_btn: 'Priimti viską',
      reject_all_btn: 'Priimti būtinus',
      save_settings_btn: 'Išsaugoti nustatymus',
      cookie_table_headers: [{ name: 'Pavadinimas' }, { description: 'Aprašymas' }, { expiration: 'Aprašymas' }],
      blocks: [
        {
          description:
            `Jei norite kuo geriau išnaudoti mūsų svetainę, geriausia leisti visų tipų slapukus.\n` +
            (lang.settingsModalMoreInfo ??
              `Daugiau informacijos apie tai, kas yra slapukai ir kaip su jais dirbame, galite rasti puslapyje
               <a href="https://www.almacareer.com/gdpr" target="_blank">Privatumo politika</a>.`),
        },
        assembleCategoryNecessary(
          'Techniškai būtini slapukai',
          'Šie slapukai yra būtini tinkamam mūsų svetainės veikimui, todėl jų negalima išjungti. Be jų nebūtų įmanoma pvz. rodyti bet kokį turinį ar prisijungti mūsų svetainėje.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analitiniai slapukai',
          'Tai padeda mums stebėti, kiek žmonių lankosi mūsų svetainėje ir kaip jie ja naudojasi. Ši informacija leidžia mums nuolat tobulinti svetainę ir kitas paslaugas.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funkciniai slapukai',
          'Mūsų svetainė yra dar efektyvesnė ir veikia geriau dėl šių slapukų.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Rinkodaros slapukai',
          'Šie slapukai padeda mums įvertinti reklamos ir tikslinių paslaugų pasiūlymų efektyvumą. Rinkodaros slapukai leidžia mums pateikti jums naujienas, kurios gali jus sudominti.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Personalizavimo slapukai',
          'Mūsų paslaugos veikia geriau, jei galime jas pritaikyti konkretiems vartotojams. Leidžiant personalizuoti slapukus, padidinsite savo galimybes rasti norimą turinį.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
