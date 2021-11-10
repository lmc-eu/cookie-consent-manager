const { build } = require('esbuild');

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
  outfile: 'dist/LmcCookieConsentManager.esm.js',
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
