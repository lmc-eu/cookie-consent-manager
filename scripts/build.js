const { build } = require('esbuild')

build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: 'es2017',
  outfile: 'dist/index.min.js',
}).catch((error) => {
  console.error(error)
  process.exit(1)
})

build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  target: 'es2017',
  outfile: 'dist/index.js',
}).catch((error) => {
  console.error(error)
  process.exit(1)
})

build({
  entryPoints: ['src/LmcCookieConsent.js'],
  bundle: true,
  minify: false,
  sourcemap: false,
  target: 'es2019',
  outfile: 'dist/LmcCookieConsent.js',
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
