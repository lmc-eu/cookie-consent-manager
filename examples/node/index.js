// eslint-disable-next-line import/no-unresolved
const LmcCookieConsentManager = require('@lmc-eu/cookie-consent-manager');

window.addEventListener('load', () => {
  LmcCookieConsentManager('example');
});
