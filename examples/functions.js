/**
 * Global function to reset cookie for the examples only
 */
function removeCookieAndReload() {
  document.cookie = `lmc_ccm=; Max-Age=0; path=/; domain=${location.hostname}`;
}
