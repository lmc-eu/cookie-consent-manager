import { CookieConsentCategory } from './constants';
import { CookieValue } from 'vanilla-cookieconsent';

export const pushToDataLayer = (cookie: CookieValue) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'CookieConsent-update',
    'CookieConsent.necessary': cookie.categories.includes(CookieConsentCategory.NECESSARY),
    'CookieConsent.analytics': cookie.categories.includes(CookieConsentCategory.ANALYTICS),
    'CookieConsent.ad': cookie.categories.includes(CookieConsentCategory.AD),
    'CookieConsent.functionality': cookie.categories.includes(CookieConsentCategory.FUNCTIONALITY),
    'CookieConsent.personalization': cookie.categories.includes(CookieConsentCategory.PERSONALIZATION),
    'CookieConsent.revision': cookie.revision,
  });
};
