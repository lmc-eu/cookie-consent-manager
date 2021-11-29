/* eslint-disable no-console */
const { build } = require('esbuild');
const fs = require('fs');

// iife
build({
  entryPoints: ['src/init.ts', 'src/LmcCookieConsentManager.ts'],
  bundle: true,
  target: 'es2017',
  outdir: 'dist',
  tsconfig: 'tsconfig.build.json',
}).catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});

// esm
build({
  entryPoints: ['src/LmcCookieConsentManager.ts'],
  bundle: true,
  target: 'es2017',
  outfile: 'dist/LmcCookieConsentManager.mjs',
  format: 'esm',
  tsconfig: 'tsconfig.build.json',
}).catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});

// cjs
build({
  entryPoints: ['src/LmcCookieConsentManager.ts'],
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
  tsconfig: 'tsconfig.build.json',
}).then(() => {
  // Annotate the CommonJS export names for ESM import in node
  fs.appendFile(
    './dist/LmcCookieConsentManager.cjs',
    `// Annotate the CommonJS export names for ESM import in node:
module.exports = LmcCookieConsentManager_default;
`,
    (error: unknown) => {
      if (error) {
        console.log(error);
        process.exit(1);
      }
    },
  );
});

export {};
