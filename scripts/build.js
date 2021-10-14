const { build } = require('esbuild')

build({
  entryPoints: ['src/autoload.js'],
  bundle: true,
  target: 'es2017',
  outfile: 'dist/autoload.js',
}).catch((error) => {
  console.error(error)
  process.exit(1)
})

build({
  entryPoints: ['src/bootstrap.js'],
  bundle: true,
  target: 'es2017',
  outfile: 'dist/bootstrap.js',
}).catch((error) => {
  console.error(error)
  process.exit(1)
})

build({
  entryPoints: ['src/LmcCookieConsentManager.js'],
  bundle: true,
  minify: false,
  sourcemap: false,
  target: 'es2019',
  outfile: 'dist/LmcCookieConsentManager.js',
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
