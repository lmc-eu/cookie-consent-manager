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
  and: 'in',
  legalName: 'iz poslovne skupine Alma Career',
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
  const cookieTableHeaders = { name: 'Naziv', description: 'Opis', expiration: 'Potek' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Piškotki izboljšujejo našo spletno stran',
      description: `
      ${assembleDescriptionIntro(
        'Z boljšim razumevanjem, kaj vas zanima, vam bomo prikazali bolj relevantno vsebino.',
        lang.descriptionIntro,
      )}
      <p>
        S klikom na gumb „Sprejmi vse“ dajete soglasje podjetjem
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        za uporabo piškotkov za personalizacijo, analitiko in ciljno oglaševanje.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Uporabo piškotkov lahko prilagodite v <strong><a href="" data-cc="show-preferencesModal">svojih nastavitvah</a></strong>.`
            : ''
        }
      </p>`,
      acceptAllBtn: 'Sprejmi vse',
      ...assembleSecondaryButton(secondaryButtonMode, 'Sprejmi samo nujne', 'Shrani nastavitve'),
    },
    preferencesModal: {
      title: 'Prilagojene nastavitve piškotkov',
      acceptAllBtn: 'Sprejmi vse',
      acceptNecessaryBtn: 'Sprejmi samo nujne',
      savePreferencesBtn: 'Shrani nastavitve',
      sections: [
        {
          description: `Če želite najbolje izkoristiti našo spletno stran, je najbolje, da dovolite vse vrste piškotkov.
            ${
              lang.settingsModalMoreInfo ??
              `Več informacij o tem, kaj so piškotki in kako z njimi upravljamo, najdete na strani <a href="https://www.almacareer.com/gdpr" target="_blank">Pravilnik o zasebnosti</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Tehnično nujni piškotki',
              description:
                'Ti piškotki so bistveni za pravilno delovanje naše spletne strani in jih ni mogoče izklopiti. Brez njih ne bi bilo mogoče prikazati vsebine ali se prijaviti na našo spletno stran.',
            },
            analytics: {
              title: 'Analitični piškotki',
              description:
                'Ti nam pomagajo spremljati, koliko ljudi obišče našo spletno stran in kako jo uporabljajo. Te informacije nam omogočajo nenehno izboljševanje spletne strani in drugih storitev.',
            },
            functionality: {
              title: 'Funkcionalni piškotki',
              description:
                'Naša spletna stran je še učinkovitejša in bolje deluje zaradi teh piškotkov. Na primer, omogočajo nam uporabo klepetalne storitve in hitro ter enostavno odgovarjanje na vaša vprašanja.',
            },
            ad: {
              title: 'Trženjski piškotki',
              description:
                'Ti piškotki nam pomagajo meriti učinkovitost našega oglaševanja in ciljnih ponudb storitev. Trženjski piškotki nam omogočajo, da vam na internetu prinašamo novice, ki vas morda zanimajo.',
            },
            personalization: {
              title: 'Piškotki za prilagajanje',
              description:
                'Naše storitve bolje delujejo, če jih lahko prilagodimo določenim uporabnikom. Z dovoljenjem piškotkov za prilagajanje povečate možnosti, da najdete vsebino, ki jo želite.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
