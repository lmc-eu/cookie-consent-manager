/* eslint-disable no-console */
const { build } = require('esbuild');
const fs = require('fs');

// iife
build({
  entryPoints: ['src/init.js', 'src/LmcCookieConsentManager.js'],
  bundle: true,
  target: 'es2017',
  outdir: 'dist',
}).catch((error) => {
  console.error(error);
  process.exit(1);
});

// esm
build({
  entryPoints: ['src/LmcCookieConsentManager.js'],
  bundle: true,
  target: 'es2017',
  outfile: 'dist/LmcCookieConsentManager.mjs',
  format: 'esm',
}).catch((error) => {
  console.error(error);
  process.exit(1);
});

// cjs
build({
  entryPoints: ['src/LmcCookieConsentManager.js'],
  bundle: true,
  target: 'es6',
  outfile: 'dist/LmcCookieConsentManager.cjs',
  platform: 'browser',
  format: 'cjs',
  /**
   * the "main" field was ignored (main fields must be configured manually when using the "neutral" platform)
   * because vanilla-cookie-consent is set as `main` in package.json
   */
  mainFields: ['main'],
}).then(() => {
  // Annotate the CommonJS export names for ESM import in node
  fs.appendFile(
    './dist/LmcCookieConsentManager.cjs',
    `// Annotate the CommonJS export names for ESM import in node:
module.exports = LmcCookieConsentManager_default;
`,
    (error) => {
      if (error) {
        console.log(error);
        process.exit(1);
      }
    },
  );
});
