[![npm version](https://img.shields.io/npm/v/@lmc-eu/cookie-consent-manager.svg)](https://www.npmjs.com/package/@lmc-eu/cookie-consent-manager)
![CI](https://github.com/lmc-eu/cookie-consent-manager/actions/workflows/lint.yaml/badge.svg)

# Cookie Consent Manager

Provide configurable cookie consent banner with predefined LMC defaults. The UI is based on [Spirit Design System].

The package is a wrapper around [Cookie Consent] by [Orest Bida].

## Basic usage

Load default CSS in your `<head>`:

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@0.6/LmcCookieConsentManager.min.css">
```

Load the script and initialize the plugin right before ending `</body>` tag:

```html
<script defer src="https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@0.6/init.js"></script>
<script>
window.addEventListener('load', function () {
  initLmcCookieConsentManager('demo.example'); // use the name of your service, like jobs.cz, seduo.pl etc.
});
</script>
```

This will load the plugin from CDN and initialize the plugin with default settings.
[👀 See example][examples].

## Use default web font, or not?

If you are going to use the plugin with the default theme, you may also want to load default Spirit web font
which is used by the plugin:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
```

If Inter font is not provided (or installed in user's system), all texts in cookie consent UI default to whatever
current `font-family` is set to. As you cannot predict what fonts are available on user's side, and because this
behavior may change in future versions of Spirit Design Tokens, we encourage you either to load the default web font
as shown above or to explicitly specify the desired font yourself (head to [Theming](#theming) to see how).

## Loading the plugin

### Via CDN or static file

You can load the plugin from a CDN, as in the basic example above.

```html
<!-- Note we use version "cookie-consent-manager@0.6", which points the latest version of this series (including bugfix releases) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@0.6/LmcCookieConsentManager.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@0.6/init.js"></script>
```

Alternatively, you can also download the latest version from the [Releases page](https://github.com/lmc-eu/cookie-consent-manager/releases).

Loading the plugin from CDN or static file is recommended mostly **for static sites without their own build process**.

Once the plugin is loaded, you need to initialize it using `initLmcCookieConsentManager()` method, optionally providing
[configuration parameters](#configuration).

### Via npm

For projects with their own build process for javascript we recommend using the plugin
via npm package [@lmc-eu/cookie-consent-manager](https://www.npmjs.com/package/@lmc-eu/cookie-consent-manager).

1. Add the plugin to your dependencies:
    ```sh
    yarn add @lmc-eu/cookie-consent-manager
    ```
    or
    ```sh
    npm install --save @lmc-eu/cookie-consent-manager
    ```

2. Import the module in your javascript:
    ```js
    import LmcCookieConsentManager from '@lmc-eu/cookie-consent-manager';

    window.addEventListener('load', function () {
      LmcCookieConsentManager('demo.example'/* , optional plugin configuration */);
    });
    ```

   See below for [configuration options](#configuration).

3. Include default CSS in your HTML:
   ```html
   <link rel="stylesheet" href="node_modules/@lmc-eu/cookie-consent-manager/LmcCookieConsentManager.min.css">
   ```
   or in your Sass stylesheet:
   ```scss
   @use 'node_modules/@lmc-eu/cookie-consent-manager/LmcCookieConsentManager.css';
   ```

   Please mind the `.css` extension used in the Sass example. Using the provided `.scss` stylesheet is
   recommended only for projects that are built [with Spirit Design System](#with-spirit-design-system).

   See below for [theming customization options](#theming).

#### Legacy import

You can also use module with CommonJS import syntax:

```js
    const LmcCookieConsentManager = require('@lmc-eu/cookie-consent-manager');
```

Note: We prefer to use modern ESM import syntax so this is marked as legacy.

*With Webpack:* Webpack prioritises the ESM import syntax over CommonJS import syntax. So resolve the `main` field as first: `resolve: { mainFields: ["main", /* ... */ ] },`

## Manage features depending on given consent

For "necessary" cookies it is not needed to check whether a user has given any consent.

However, for all other purposes, it must be explicitly checked whether user has given the appropriate
consent category. This must be done *before* the respective cookie is set.

### Consent categories

| Category          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `necessary`       | Strictly necessary cookies are essential for user to browse the website and use its features, such as accessing secure areas of the site. These cookies are first-party cookies.<br>Some examples of strictly necessary cookies: Session cookies, Cookie banner cookies, Load balancing cookies, CSFR tokens, Language selection cookies, Region / country cookies, Performance cookies, Application firewall cookies and JavaScript check cookies.<br>For these cookies you **don't need to check** whether user actually has this level. |
| `ad`              | For cookies related to advertising                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `analytics`       | For analysis and statistics                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `functionality`   | For extended functionality (not covered by `necessary` category)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `personalization` | For personalization based on user profiling (recommendation etc.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### GTM (Google Tag Manager) scripts

GTM scripts are managed centrally, so after implementing the library you don't need to worry about them.
The library sets all the required data to GTM dataLayer.

### Custom methods

To execute custom code which depends on cookie consent use callbacks:

```js
// ...
initLmcCookieConsentManager(
  'demo.example',
  {
    onAcceptAll: (cookie, cookieConsent) => {
      if (cookieConsent.allowedCategory('functionality')) {
        startOptionalFeature();
      }
    },
  }
);
// ...
```

### Third party scripts loaded via `<script>`

To automatically load external scripts after a specific consent category is given by the user, modify the `<script>` tag:
set `type` to `type="text/plain"` and add `data-cookiecategory` attribute with required consent category.

```html
<script src="personalization.js" type="text/plain" data-cookiecategory="personalization" defer></script>
```

See [full documentation](https://github.com/orestbida/cookieconsent#manage-third-party-scripts) for this feature.

This feature is enabled by default. If you'd like to disable it, you can do so by overriding `page_scripts` value in
`config` option:

```js
initLmcCookieConsentManager(
  'demo.example',
  {
    config: {
      page_scripts: false
    }
  }
);
```

## Configuration

Optional config parameters could be provided on plugin initialization as the second parameter,
encapsulated in the configuration object.

```js
initLmcCookieConsentManager( // when loaded as a module, these options are passed to `LmcCookieConsentManager()` instead
  'demo.example', // provide the name of your service, like jobs.cz, seduo.pl etc.
  {
    defaultLang: 'cs',
    autodetectLang: false,
    onAcceptAll: (cookie, cookieConsent) => {
      // custom code
    },
    config: {
      // overrides of default config, see https://github.com/orestbida/cookieconsent#all-available-options
    },
  }
);
```

[👀 See extended configuration example][examples-configuration]

## Configuration options

| Option          | Type        | Default value                   | Description                                                                                                                               |
|-----------------|-------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `autodetectLang`| boolean     | true                            | Autodetect language based on the value of `<html lang="...">`. If autodetect fails or if unsupported language is detected, fallback to `defaultLang`.<br>When disabled, force language to `defaultLang`. |
| `defaultLang`   | string      | 'cs'                            | Default language. One of `cs`, `de`, `en`, `hu`, `pl`, `ru`, `sk`, `uk`. This language will be used when autodetect is disabled or when it fails. |
| `companyNames`  | array       | ['LMC']                         | Array of strings with company names. Adjust only when the consent needs to be given to multiple companies. [See example][examples-configuration]. |
| `consentCollectorApiUrl`| ?string | 'https://ccm.lmc.cz/(...)'  | URL of the API where user consent information is sent. Null to disable sending data to the API. |
| `config`        | Object      | {}                              | Override default config of the underlying library. For all parameters see [original library](https://github.com/orestbida/cookieconsent#all-available-options). |
| `on*` callbacks | function    | (cookie, cookieConsent) => {}   | See below for configurable callbacks. |

### Supported languages

Translation of the user interface is provided in the following languages:
Czech (`cs`), German (`de`), English (`en`), Hungarian (`hu`), Polish (`pl`), Russian (`ru`), Slovak (`sk`)
and Ukrainian (`uk`).

### Callbacks

The library can trigger configured callbacks in various events. They can be used to execute custom functionality,
for example, to enable some feature after user has given consent.

Each configured callback receives two params:

* `cookie` - object with cookie contents
* `cookieConsent` - instance of the underlying [cookie consent] library, can be used to call [its methods](https://github.com/orestbida/cookieconsent#apis--configuration-parameters)

| Callback                    | Trigger event |
|-----------------------------|---------------|
| `onAcceptAll`               | Consent with all cookies is detected (either given now or after page load if it was already saved previously) |
| `onAcceptOnlyNecessary`     | Consent with only necessary cookies is detected (either given now or after page load if it was already saved previously)* |
| `onAccept`                  | Any consent is detected (either given now or after page load if it was already saved previously) |
| `onFirstAcceptAll`          | Right after all cookies are accepted |
| `onFirstAcceptOnlyNecessary`| Right after only necessary cookies are just accepted by the user |
| `onFirstAccept`             | Right after any consent is just accepted by the user |

[👀 See callbacks example][examples-callbacks]

## Theming

### With Spirit Design System

If your project uses [Spirit Design System], you are almost done!

All you need to do is to add this plugin's SCSS to your Sass pipeline:

```scss
// my-project.scss

// Add this line anywhere you import other third-party CSS, possibly somewhere close
// to the end of your stylesheet as it contains CSS selectors with high specificity.
@use '@lmc-eu/cookie-consent-manager/LmcCookieConsentManager';
```

Now set up a [Sass load path] so the Sass compiler can find stylesheets located in the `node_modules` directory
(you will already have a path to your design tokens there, as required by [Spirit Web]):

```sh
# CLI command (possibly used in your npm scripts)

sass --load-path=node_modules --load-path=path/to/my/design-tokens my-project.scss my-project.css
```

Or with webpack:

```js
// webpack.config.js

{
  loader: 'sass-loader',
  options: {
    sassOptions: {
      includePaths: [
        path.resolve(
          __dirname,
          'node_modules',
          'path/to/my/design-tokens',
        ),
      ],
    },
  },
},
```

**Note:** `sass` v1.23 or higher is required to be able to compile the new Sass modules syntax. You may need to migrate
to [`sass`][sass] since all other Sass compilers (and the old `@import` rule) are now [deprecated][sass modules].

### Without Spirit Design System


<details>
<summary>Following CSS custom properties are available for you to customize the UI:</summary>


| CSS custom property                   | Description                                             |
|---------------------------------------|---------------------------------------------------------|
| `--lmcccm-base-font-size`             | Base font size                                          |
| `--lmcccm-font-family`                | Base font family                                        |
| `--lmcccm-bg`                         | Bar background color                                    |
| `--lmcccm-text`                       | Text color                                              |
| `--lmcccm-link-text`                  | Link text color                                         |
| `--lmcccm-link-hover-text`            | Link text color on hover                                |
| `--lmcccm-link-active-text`           | Link text color in active state                         |
| `--lmcccm-btn-primary-bg`             | Primary button background color                         |
| `--lmcccm-btn-primary-text`           | Primary button text color                               |
| `--lmcccm-btn-primary-hover-bg`       | Primary button background color on hover                |
| `--lmcccm-btn-primary-hover-text`     | Primary button text color on hover                      |
| `--lmcccm-btn-primary-active-bg`      | Primary button background color in active state         |
| `--lmcccm-btn-primary-active-text`    | Primary button text color in active state               |
| `--lmcccm-btn-secondary-bg`           | Secondary button background color                       |
| `--lmcccm-btn-secondary-text`         | Secondary button text color                             |
| `--lmcccm-btn-secondary-hover-bg`     | Secondary button background color on hover              |
| `--lmcccm-btn-secondary-hover-text`   | Secondary button text color on hover                    |
| `--lmcccm-btn-secondary-active-bg`    | Secondary button background color in active state       |
| `--lmcccm-btn-secondary-active-text`  | Secondary button text color in active state             |

Change their values to adjust cookie consent UI to match the design of your site:

```css
:root {
  --lmcccm-font-family: 'Open Sans', arial, sans-serif;
}
```
</details>

### Dark mode

Add `c_darkmode` CSS class to `<body>` to enable dark mode. It reuses [Spirit Design Tokens], so if your project is
built with Spirit, applying the `c_darkmode` class is all you need to do and dark mode will work for you out-of-the-box.

If your project does _not_ use Spirit, you still may adjust exposed CSS custom properties as described above,
this time scoped to the `.c_darkmode` class:

```css
.c_darkmode {
  --lmcccm-bg: #000;
}
```

## Development and contributing

### Local development

Install package dependencies:

```sh
yarn install
```

Start local development server:

```sh
yarn start
```

This will make the development server accessible http://localhost:3000/ .

* The library with init function is served on: http://localhost:3000/dist/init.js
* Javascript module: http://localhost:3000/dist/LmcCookieConsentManager.js
* CSS: http://localhost:3000/dist/LmcCookieConsentManager.css

### Contributing

For commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification with
[LMC rules](https://github.com/lmc-eu/code-quality-tools/blob/main/packages/commitlint-config/index.js).
The commit message will also be automatically checked as pre-commit hook.

To ensure the code passes linting and code style test run:

```sh
yarn test
```

To fix code style according to Prettier rules run:

```sh
yarn format:fix
```

#### Publishing package

Prepare release using `yarn release` on a local machine. Check the generated changelog and the bumped `package.json`.
Then push to origin. Github [publish action](./.github/workflows/publish.yaml) is then taking care of publishing
package to [npmjs.com](https://npmjs.com/).

## License

Distributed under the MIT License. See [LICENSE](https://github.com/lmc-eu/cookie-consent-manager/blob/main/LICENSE.md)
for more information.

[cookie consent]: https://github.com/orestbida/cookieconsent
[orest bida]: https://github.com/orestbida
[spirit design system]: https://github.com/lmc-eu/spirit-design-system
[spirit design tokens]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens
[spirit web]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web
[sass]: https://www.npmjs.com/package/sass
[sass load path]: https://sass-lang.com/documentation/cli/dart-sass#load-path
[sass modules]: https://sass-lang.com/blog/the-module-system-is-launched
[examples]: https://lmc-eu.github.io/cookie-consent-manager/examples/
[examples-callbacks]: https://lmc-eu.github.io/cookie-consent-manager/examples/callbacks.html
[examples-configuration]: https://lmc-eu.github.io/cookie-consent-manager/examples/configuration.html
