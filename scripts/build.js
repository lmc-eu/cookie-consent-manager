const { build } = require('esbuild');
const fs = require('fs');
const replace = require('replace-in-file');

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
  // format: 'esm', // or use platform: neutral and mainFields: ['main']
  platform: 'neutral', // or use format: 'esm' without  platform and mainFields
  /**
   * the "main" field was ignored (main fields must be configured manually when using the "neutral" platform)
   * because vanilla-cookie-consent is set as `main` in package.json
   */
  mainFields: ['main'],
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
  platform: 'node',
  format: 'cjs',
  /**
   * the "main" field was ignored (main fields must be configured manually when using the "neutral" platform)
   * because vanilla-cookie-consent is set as `main` in package.json
   */
  mainFields: ['main'],
})
  .then(() => {
    const options = {
      files: './dist/LmcCookieConsentManager.cjs',
      from: /0 && \(module.exports = {}\);/gm,
      to: `module.exports = LmcCookieConsentManager_default;`,
    };

    replace(options)
      .then((results) => {
        console.log('Replacement results:', results);
      })
      .catch((error) => {
        console.error('Error occurred:', error);
      });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
