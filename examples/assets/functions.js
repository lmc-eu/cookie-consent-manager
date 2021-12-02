/* eslint-disable no-unused-vars */
/**
 * Global function to reset cookie for the examples only
 *
 * @returns {void}
 */
function removeCookieAndReload() {
  document.cookie = `lmc_ccm=; Max-Age=0; path=/; domain=${window.location.hostname}`;
}
