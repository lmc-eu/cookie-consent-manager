const { build } = require('esbuild');

build({
  entryPoints: [
    'src/autoload.js',
    'src/init.js',
    `src/LmcCookieConsentManager.js`,
  ],
  bundle: true,
  target: 'es2017',
  outdir: 'dist',
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
