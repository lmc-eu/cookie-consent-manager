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

export {};
