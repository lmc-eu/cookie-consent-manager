import { CookieConsentCategoryValues, VanillaCookieConsent } from './types';
import { CookieConsentCategory } from './constants';

export const pushToDataLayer = (cookie: VanillaCookieConsent.Cookie<CookieConsentCategoryValues>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'CookieConsent-update',
    'CookieConsent.necessary': cookie.level.includes(CookieConsentCategory.NECESSARY),
    'CookieConsent.analytics': cookie.level.includes(CookieConsentCategory.ANALYTICS),
    'CookieConsent.ad': cookie.level.includes(CookieConsentCategory.AD),
    'CookieConsent.functionality': cookie.level.includes(CookieConsentCategory.FUNCTIONALITY),
    'CookieConsent.personalization': cookie.level.includes(CookieConsentCategory.PERSONALIZATION),
    'CookieConsent.revision': cookie.revision,
  });
};
