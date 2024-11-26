import {
  addSeparators,
  assembleCookieTableSections,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values } from '../types';
import { SecondaryButtonMode } from '../constants';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'bei',
  legalName: 'Alma Career ir kitoms jos verslo grupės įmonėms',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (
  extraMessages: ExtraMessages,
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
  cookieTable: CookieTableCategories,
): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Pavadinimas', description: 'Aprašymas', expiration: 'Galiojimo pabaiga' };

  return {
    consentModal: {
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
            ? `Slapukų naudojimą galite pritaikyti <strong><a href="" data-cc="show-preferencesModal">pasirinktinuose nustatymuose</a></strong>.`
            : ''
        }
      </p>`,
      acceptAllBtn: 'Priimti viską',
      ...assembleSecondaryButton(secondaryButtonMode, 'Priimti būtinus', 'Pasirinktiniai nustatymai'),
    },
    preferencesModal: {
      title: 'Individualūs slapukų nustatymai',
      acceptAllBtn: 'Priimti viską',
      acceptNecessaryBtn: 'Priimti būtinus',
      savePreferencesBtn: 'Išsaugoti nustatymus',
      sections: [
        {
          description: `Jei norite kuo geriau išnaudoti mūsų svetainę, geriausia leisti visų tipų slapukus.
            ${
              lang.settingsModalMoreInfo ??
              `Daugiau informacijos apie tai, kas yra slapukai ir kaip su jais dirbame, galite rasti puslapyje <a href="https://www.almacareer.com/gdpr" target="_blank">Privatumo politika</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Techniškai būtini slapukai',
              description:
                'Šie slapukai yra būtini tinkamam mūsų svetainės veikimui, todėl jų negalima išjungti. Be jų nebūtų įmanoma pvz. rodyti bet kokį turinį ar prisijungti mūsų svetainėje.',
            },
            analytics: {
              title: 'Analitiniai slapukai',
              description:
                'Tai padeda mums stebėti, kiek žmonių lankosi mūsų svetainėje ir kaip jie ja naudojasi. Ši informacija leidžia mums nuolat tobulinti svetainę ir kitas paslaugas.',
            },
            functionality: {
              title: 'Funkciniai slapukai',
              description: 'Mūsų svetainė yra dar efektyvesnė ir veikia geriau dėl šių slapukų.',
            },
            ad: {
              title: 'Rinkodaros slapukai',
              description:
                'Šie slapukai padeda mums įvertinti reklamos ir tikslinių paslaugų pasiūlymų efektyvumą. Rinkodaros slapukai leidžia mums pateikti jums naujienas, kurios gali jus sudominti.',
            },
            personalization: {
              title: 'Personalizavimo slapukai',
              description:
                'Mūsų paslaugos veikia geriau, jei galime jas pritaikyti konkretiems vartotojams. Leidžiant personalizuoti slapukus, padidinsite savo galimybes rasti norimą turinį.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
