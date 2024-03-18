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
import { ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { CookieConsentCategory, SecondaryButtonMode } from '../constants';

const extra = {
  and: 'in',
  legalName: 'iz poslovne skupine Alma Career',
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
            ? `Uporabo piškotkov lahko prilagodite v <strong><a href="" data-cc="c-settings">svojih nastavitvah</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Sprejmi vse',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Sprejmi samo nujne', 'Shrani nastavitve'),
    },
    settings_modal: {
      title: 'Prilagojene nastavitve piškotkov',
      accept_all_btn: 'Sprejmi vse',
      reject_all_btn: 'Sprejmi samo nujne',
      save_settings_btn: 'Shrani nastavitve',
      blocks: [
        {
          description:
            `Če želite najbolje izkoristiti našo spletno stran, je najbolje, da dovolite vse vrste piškotkov.\n` +
            (lang.settingsModalMoreInfo ??
              `Več informacij o tem, kaj so piškotki in kako z njimi upravljamo, najdete na strani
              <a href="https://www.almacareer.com/gdpr" target="_blank">Pravilnik o zasebnosti</a>.`),
        },
        assembleCategoryNecessary(
          'Tehnično nujni piškotki',
          'Ti piškotki so bistveni za pravilno delovanje naše spletne strani in jih ni mogoče izklopiti. Brez njih ne bi bilo mogoče prikazati vsebine ali se prijaviti na našo spletno stran.',
        ),
        assembleCategoryAnalytics(
          'Analitični piškotki',
          'Ti nam pomagajo spremljati, koliko ljudi obišče našo spletno stran in kako jo uporabljajo. Te informacije nam omogočajo nenehno izboljševanje spletne strani in drugih storitev.',
        ),
        assembleCategoryFunctionality(
          'Funkcionalni piškotki',
          'Naša spletna stran je še učinkovitejša in bolje deluje zaradi teh piškotkov. Na primer, omogočajo nam uporabo klepetalne storitve in hitro ter enostavno odgovarjanje na vaša vprašanja.',
        ),
        assembleCategoryAd(
          'Trženjski piškotki',
          'Ti piškotki nam pomagajo meriti učinkovitost našega oglaševanja in ciljnih ponudb storitev. Trženjski piškotki nam omogočajo, da vam na internetu prinašamo novice, ki vas morda zanimajo.',
        ),
        assembleCategoryPersonalization(
          'Piškotki za prilagajanje',
          'Naše storitve bolje delujejo, če jih lahko prilagodimo določenim uporabnikom. Z dovoljenjem piškotkov za prilagajanje povečate možnosti, da najdete vsebino, ki jo želite.',
        ),
      ],
    },
  };
};

export default config;
