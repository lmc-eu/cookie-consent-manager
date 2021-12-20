/* eslint-disable no-unused-vars */
/**
 * Global function to reset cookie for the examples only
 *
 * @returns {void}
 */
function removeCookieAndReload() {
  document.cookie = `lmc_ccm=; Max-Age=0; path=/; domain=${window.location.hostname}`;
}

/**
 * @returns {void}
 */
function toggleLanguage() {
  // TODO: Use native setLanguage() after https://github.com/orestbida/cookieconsent/issues/153 is implemented
  const cookieConsentElement = document.getElementById('cc--main')

  if (cookieConsentElement !== null) {
    cookieConsentElement.remove();
  }

  const selectedLanguage = Array.from(document.getElementsByName('lang-select')).find(r => r.checked).value;
  createCookieConsentWithLanguage(selectedLanguage);
}

/**
 * @param {string} language
 * @returns {Object}
 */
function createCookieConsentWithLanguage(language) {
  // eslint-disable-next-line no-undef
  return initLmcCookieConsentManager(
      'github.example',
      {
        autodetectLang: false,
        defaultLang: language,
        companyNames: ['LMC', 'Some Other Company', 'ACME'],
        consentCollectorApiUrl: 'https://ccm.lmc.cz/local-data-acceptation-data-entries?Spot=(public,demo)',
        onAccept: () => {
          document.getElementById('reset').removeAttribute('hidden'); // reveal Reset cookie button
        }
      }
  );
}
