const { serve } = require('esbuild');

// Start esbuild's server on a random local port
serve(
  {
    host: '127.0.0.1',
    port: 3000,
    servedir: './',
  },
  {
    entryPoints: [
      'src/autoload.js',
      'src/init.js',
      `src/LmcCookieConsentManager.js`,
    ],
    bundle: true,
    target: 'es2017',
    outdir: 'dist',
  },
)
  .then((result) => console.log(result))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
