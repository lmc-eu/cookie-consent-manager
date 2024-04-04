import { config as configCs } from './cs';
import { config as configDe } from './de';
import { config as configEn } from './en';
import { config as configEt } from './et';
import { config as configHr } from './hr';
import { config as configHu } from './hu';
import { config as configLt } from './lt';
import { config as configLv } from './lv';
import { config as configPl } from './pl';
import { config as configRu } from './ru';
import { config as configSk } from './sk';
import { config as configSl } from './sl';
import { config as configUk } from './uk';
import { CookieTable, TranslationOverride, VanillaCookieConsent } from '../types';

const languagesMap = {
  cs: configCs,
  de: configDe,
  en: configEn,
  et: configEt,
  hr: configHr,
  hu: configHu,
  lt: configLt,
  lv: configLv,
  pl: configPl,
  ru: configRu,
  sk: configSk,
  sl: configSl,
  uk: configUk,
};

export const assembleLanguagesConfig = (
  companyNames: string[],
  translationOverrides: Record<string, TranslationOverride>,
  secondaryButtonMode: string,
  cookieTable: CookieTable,
): Record<string, VanillaCookieConsent.Languages> =>
  Object.entries(languagesMap).reduce((languagesConfig, [code, configFunction]) => {
    languagesConfig[code] = configFunction(
      { companyNames, ...translationOverrides[code] },
      secondaryButtonMode,
      cookieTable[code] || {},
    );

    return languagesConfig;
  }, {} as Record<string, VanillaCookieConsent.Languages>);
