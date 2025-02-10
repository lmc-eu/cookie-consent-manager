[![npm version](https://img.shields.io/npm/v/@almacareer/cookie-consent-manager.svg)](https://www.npmjs.com/package/@almacareer/cookie-consent-manager)
[![CI](https://github.com/alma-oss/cookie-consent-manager/actions/workflows/test.yaml/badge.svg?branch=main)](https://github.com/alma-oss/cookie-consent-manager/actions)

# Alma Career Cookie Consent Manager

Provide configurable cookie consent plugin for Alma Career (formerly LMC) products.
The package contains predefined Alma Career settings, translations and UI based on [Spirit Design System].

The package is a wrapper around [Cookie Consent] by [Orest Bida].

## Table of contents

1. [Upgrade to version 3.x](#upgrade-to-version-30)
1. [Basic usage](#basic-usage)
1. [Loading the plugin](#loading-the-plugin)
1. [Manage features depending on the given consent](#manage-features-depending-on-the-given-consent)
1. [Configuration](#configuration)
1. [Configuration options](#configuration-options)
1. [Theming](#theming)
1. [Development and contributing](#development-and-contributing)

## Upgrade to version 3.0

See [upgrade guide](UPGRADE-3.0.md) for upgrade guidance from version 2.x to version 3.0.
For complete list of changes see [changelog](CHANGELOG.md).

## Basic usage

Make assets load faster by placing pre-connect headers right after `<meta charset>` in your `<head>`:

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

Load default CSS along with your styles in `<head>`:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@almacareer/cookie-consent-manager@3/CookieConsentManager.min.css">
```

If you use an older version of Alma Career's [Spirit Design System] (version 2 or lower) or if you don't use the Spirit Design System at all, you need to load the themes CSS file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@almacareer/cookie-consent-manager@3/CookieConsentManagerThemes.min.css">
```

Load the script and initialize the plugin right before ending `</body>` tag:

```html
<script defer src="https://cdn.jsdelivr.net/npm/@almacareer/cookie-consent-manager@3/init.js"></script>
<script>
window.addEventListener('DOMContentLoaded', function () {
  initCookieConsentManager('demo.example'); // use the name of your service, like jobs.cz, seduo.pl etc.
});
</script>
```

This will load the plugin from CDN and initialize the plugin with default settings.

As a next step, add a link to open cookie preferences after the consent was previously given. This link should be placed
somewhere in the page footer, usually near "Terms of use" and "Privacy policy" links. Please note it is legally required
to provide the user such link to change cookie preferences even after the first consent is given.

```html
<a href="" data-cc="show-preferencesModal">Open cookie preferences</a>
```

[👀 See demo page with example][examples].

## Loading the plugin

### Via CDN or static file

You can load the plugin from a CDN, as in the basic example above.

```html
<!-- Note we use version "cookie-consent-manager@3", which points to the latest version of this series (including feature and bugfix releases) -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@almacareer/cookie-consent-manager@3/CookieConsentManager.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@almacareer/cookie-consent-manager@3/CookieConsentManagerThemes.min.css"><!-- Only if you do NOT use Spirit Design System (or you use Spirit Design System version 2 or lower) -->
<script defer src="https://cdn.jsdelivr.net/npm/@almacareer/cookie-consent-manager@3/init.js"></script>
```

Alternatively, you can also download the latest version from the [Releases page](https://github.com/alma-oss/cookie-consent-manager/releases).

Loading the plugin from CDN or static file is recommended mostly **for static sites without their own build process**.

Once the plugin is loaded, you need to initialize it using `initCookieConsentManager()` method, optionally providing
[configuration parameters](#configuration).

### Via npm

For projects with their own build process for JavaScript, it is recommended to use the plugin
via npm package [@almacareer/cookie-consent-manager](https://www.npmjs.com/package/@almacareer/cookie-consent-manager).

1. Add the plugin to your dependencies:
    ```sh
    yarn add @almacareer/cookie-consent-manager
    ```
    or
    ```sh
    npm install --save @almacareer/cookie-consent-manager
    ```

2. Import the module in your javascript:
    ```js
    import CookieConsentManager from '@almacareer/cookie-consent-manager';

    window.addEventListener('DOMContentLoaded', function () {
      CookieConsentManager('demo.example'/* , optional plugin configuration */);
    });
    ```

   See below for [configuration options](#configuration).

   You can also look at the [example with EcmaScript module syntax][examples-integration-esm].

3. Include default CSS in your HTML:
   ```html
   <link rel="stylesheet" href="node_modules/@almacareer/cookie-consent-manager/CookieConsentManager.min.css">
   <link rel="stylesheet" href="node_modules/@almacareer/cookie-consent-manager/CookieConsentManagerThemes.min.css"><!-- Only if you do NOT use Spirit Design System (or you use Spirit Design System version 2 or lower) -->
   ```
   or in your Sass stylesheet:
   ```scss
   @use "node_modules/@almacareer/cookie-consent-manager/CookieConsentManager.css";
   @use "node_modules/@almacareer/cookie-consent-manager/CookieConsentManagerThemes.css"; // Only if you do NOT use Spirit Design System (or you use Spirit Design System version 2 or lower)
   ```

   Please mind the `.css` extension used in the Sass example. Using the provided `.scss` stylesheet is
   recommended only for projects that are built
   [with Alma Career's Spirit Design System](#with-spirit-design-system).

   Also, the themes CSS is optional and should be included only if you do **NOT** use Alma Career's [Spirit Design System] (or you use Spirit Design System version 2 or lower).
   For projects built with Spirit Design System version 3 and newer, the themes are already included in the CSS.

   See below for [theme customization options](#theming).

4. For projects that are **NOT** built with Alma Career's [Spirit Design System] or use Spirit Design System version 2 or lower:

   1. Include default font in your HTML:
      ```html
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">
      ```
      or in your Sass stylesheet:
      ```scss
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
      ```

   2. Or [switch to custom font](#custom-font) that matches the design of your project.

## Manage features depending on the given consent

For cookies within "necessary" category it is not needed to check whether a user has given any consent.

However, for all other purposes, it must be explicitly checked whether user has given the appropriate
consent category. This must be done *before* the respective cookie is set.

In case user rejects some (or all) optional consent categories, **you must implement logic to remove current cookies
(as well as localStorage) in your product yourself**, this library does not manipulate with the cookies by default.
(However you can use `autoClearCookies` config option.)

### Consent categories

| Category          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `necessary`       | Strictly necessary cookies are essential for user to browse the website and use its features, such as accessing secure areas of the site. These cookies are first-party cookies.<br>Some examples of strictly necessary cookies: Session cookies, Cookie consent cookies, Load balancing cookies, CSFR tokens, Language selection cookies, Region/country cookies, Performance cookies, Application firewall cookies and JavaScript check cookies.<br>For these cookies you **don't need to check** whether user actually has this category. |
| `ad`              | For cookies related to advertising                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `analytics`       | For analysis and statistics                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `functionality`   | For extended functionality (not covered by `necessary` category)                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `personalization` | For personalization based on user profiling (recommendation, etc.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### GTM (Google Tag Manager) scripts

If you manage GTM script outside of Alma Career Central, you must set proper GTM consent mode properties to dataLayer. See this [example][cookie consent gtm example] (or you can use `onFirstConsent()` and `onChange()` callbacks).

If GTM of the product is managed by Alma Career Central, after implementing this library, you don't need to worry about conditions when to run them. However, keep in mind you still need to **take care (i.e. delete) of already existing cookies**, even of those created by GTM scripts.

### Custom methods

To execute custom code which depends on cookie consent use callbacks:

```js
// ...
initCookieConsentManager(
  'demo.example',
  {
    onConsent: ({ cookieConsent, cookie }) => {
      if (cookieConsent.acceptedCategory('functionality')) {
        startOptionalFeature();
      }
    },
  }
);
// ...
```

### Third party scripts loaded via `<script>`

To automatically load external scripts after a specific consent category is given by the user, modify the `<script>` tag:
set `type` to `type="text/plain"` and add `data-category` attribute with required consent category.

```html
<script src="personalization.js" type="text/plain" data-category="personalization" defer></script>

<script type="text/plain" data-category="functionality">
   console.log('functionality consent given');
</script>
```

[👀 This feature is also shown in examples][examples].
See also [full documentation][cookie consent third party] for this feature.

This feature is enabled by default. If you'd like to disable it, you can do so by overriding `manageScriptTags` value in
`config` option:

```js
initCookieConsentManager(
  'demo.example',
  {
    config: {
      manageScriptTags: false
    }
  }
);
```

## Configuration

Optional config parameters could be provided on plugin initialization as the second parameter,
encapsulated in the configuration object.

```js
initCookieConsentManager( // when loaded as a module, these options are passed to `CookieConsentManager()` instead
  'demo.example', // provide the name of your service, like jobs.cz, seduo.pl etc.
  {
    defaultLang: 'cs',
    autodetectLang: false,
    onConsent: ({ cookieConsent, cookie }) => {
      // custom code
    },
    translationOverrides: { // overrides of the default translation for specified languages
      cs: { consentTitle: 'Vlastní nadpis', descriptionIntro: 'Vlastní úvodní text popisu souhlasu' },
      en: { consentTitle: 'Custom title' },
    },
    cookieTable: { // cookie table for specified languages, shown in preferences modal
      cs: {
        necessary: [
          { name: 'almacareer_ccm', description: 'Cookie je nezbytná k uložení vašich preference týkající se povolených kategorií cookies', expiration: '1 rok' },
          { name: 'PHPSESSID', description: 'Cookie nezbytná ke správnému fungování webu', expiration: 'do konce relace' },
        ],
        // ad: [ ... ],
        analytics: [
          { name: '_ga', description: 'Nástrojem Google Analytics zjišťujeme, kolik lidí náš web navštěvuje a jak ho používá', expiration: '2 roky' },
          { name: '_utm', description: 'Nástrojem Google Analytics zjišťujeme, kolik lidí náš web navštěvuje a jak ho používá', expiration: '2 roky' },
        ],
        // functionality: [ ... ],
        // personalization: [ ... ]
      },
      en: {
        analytics: [
          { name: '_ga', description: 'With Google Analytics we determine how many people visit our website and how they use it', expiration: '2 years' },
          // ...
        ],
      }
    },
    config: {
      // overrides of the internal config of the underlying library, see https://cookieconsent.orestbida.com/reference/configuration-reference.html
    },
  }
);
```

[👀 See extended configuration example][examples-configuration]

## Configuration options

| Option                   | Type                                | Default value                                               | Description                                                                                                                                                                                                   |
|--------------------------|-------------------------------------|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `autodetectLang`         | boolean                             | `true`                                                      | Autodetect language based on the value of `<html lang="...">`. If autodetect fails or if unsupported language is detected, fallback to `defaultLang`.<br>When disabled, force language to `defaultLang`.      |
| `defaultLang`            | string                              | `'cs'`                                                      | Default language. One of `cs`, `de`, `en`, `hu`, `pl`, `ru`, `sk`, `uk`. This language will be used when autodetect is disabled or when it fails.                                                             |
| `companyNames`           | array                               | `['Alma Career']`                                           | Array of strings with company names. Adjust only when the consent needs to be given to multiple companies. Value "Alma Career" is replaced with translated legal name. [See example][examples-configuration]. |
| `consentCollectorApiUrl` | ?string                             | `'https://consents.almacareer.tech/acl-lda/(...)'`          | URL of the API where user consent information is sent. Null to disable sending data to the API.                                                                                                               |
| `config`                 | Object                              | `{}`                                                        | Override internal config of the underlying library. For all parameters see [config reference of the original library][cookie consent options].                                                                |
| `displayMode`            | DisplayMode (string)                | `DisplayMode.FORCE` (`force`)                               | `force` (default) to show consent in a centered modal box and to block page until user action. `soft` to show consent banner on the bottom of the page and do not block the page before user action.          |
| `on*` callbacks          | function                            | `(cookieConsent) => {}`                                     | See below for configurable callbacks.                                                                                                                                                                         |
| `translationOverrides`   | Record<string, TranslationOverride> | `{}`                                                        | Override default translation for specified languages. `consentTitle`, `descriptionIntro` and `preferencesModalMoreInfo` could be overridden.<br>[See example][examples-configuration]                         |
| `cookieTable`            | CookieTable                         | `{}`                                                        | Define a cookie table (shown in the preferences modal) for specified languages and specified categories.<br>[See above for example configuration](#configuration)                                             |

### Supported languages

Translation of the user interface is provided in the following languages:
- Bosnian (`bs`)
- Czech (`cs`)
- German (`de`)
- English (`en`)
- Estonian (`et`)
- French (`fr`)
- Croatian (`hr`)
- Hungarian (`hu`)
- Lithuanian (`lt`)
- Latvian (`lv`)
- Macedonian (`mk`)
- Polish (`pl`)
- Portuguese (`pt`)
- Romanian (`ro`)
- Russian (`ru`)
- Serbian (latin) (`sr`)
- Slovak (`sk`)
- Slovenian (`sl`)
- Spanish (`es`)
- Ukrainian (`uk`)

[👀 See example of each language version][examples-languages]

### Callbacks

The library can trigger configured callbacks in various events. They can be used to execute custom functionality,
for example, to enable some feature after user has given consent.

Each configured callback receives `cookieConsent` as part of the options object. This is instance of the underlying [cookie consent] library,
that can be used to call [its methods][cookie consent api] or retrieve data from the cookie. `cookie` parameter contains value of the consent cookie.
`onChange()` callback also receiver `categories` object, containing array of `accepted`, `rejected`, and `changed` consent categories.

| Callback                                          | Trigger event                                                                                                                                                          |
|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onFirstConsent({ cookieConsent, cookie })`       | This function will be executed only once, when the user takes the first action (accept all/only selected/only necessary categories).                                   |
| `onConsent({ cookieConsent, cookie })`            | Any consent is detected (either given now or after page load if it was already saved previously)                                                                       |
| `onChange({ cookieConsent, cookie, categories })` | Right after the user changes cookie preferences. The callback receives also `categories` object containing arrays of `accepted`, `rejected`, and `changed` categories. |

[👀 See callbacks example][examples-callbacks]

## Theming

### With Spirit Design System

If your project uses [Spirit Design System] version 3 and newer, you are almost done!

All you need to do is to add this plugin's SCSS to your Sass pipeline and use it **instead** of the default CSS:

```scss
// my-project.scss

// Add this line anywhere you import other third-party CSS, possibly somewhere close
// to the end of your stylesheet as it contains CSS selectors with high specificity.
@use '@almacareer/cookie-consent-manager/CookieConsentManager';
```

That's it!

<details>
<summary>Make sure you have <code>node_modules</code> and path to your design tokens in your Sass load paths.</summary>

Set up [Sass load path] so the Sass compiler can find stylesheets located in the `node_modules` directory
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
      loadPaths: [
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

</details>

**Note:** `sass` v1.23 or higher is required to be able to compile the new Sass modules syntax. You may need to migrate
to [`sass`][sass] since all other Sass compilers (and the old `@import` rule) are now [deprecated][sass modules].

### With Spirit Design System version 2 or lower

Please follow the steps below for users who do not use Spirit Design System.

### Without Spirit Design System

A handful of CSS custom properties are available for you to customize the UI to make it match the design of your site.
Contrary to the previous versions, the Cookie Consent Manager now uses only the CSS custom properties provided by the
underlying [cookie consent] library and does not introduce any own custom properties.

For example, to change the text color of cookie consent UI, load the [default CSS](#basic-usage) and add the following code
anywhere in your stylesheet (the order of which is not important):

```css
:root {
  --cc-primary-color: #333;
}
```

[👀 See theming example][examples-theming]

<details>
<summary>Full list of available CSS custom properties:</summary>

| Category          | CSS custom property                            | Description                                              |
|-------------------|------------------------------------------------|----------------------------------------------------------|
| Common            | `--cc-font-family`                             | Base font family                                         |
|                   | `--cc-bg`                                      | Common background color                                  |
|                   | `--cc-primary-color`                           | Common primary text color                                |
|                   | `--cc-secondary-color`                         | Common secondary text color                              |
| Links             | `--cc-link-color`                              | Link text color                                          |
| Buttons           | `--cc-btn-border-radius`                       | Button border radius                                     |
|                   | `--cc-btn-primary-bg`                          | Primary button background color                          |
|                   | `--cc-btn-primary-color`                       | Primary button text color                                |
|                   | `--cc-btn-primary-border-color`                | Primary button border color                              |
|                   | `--cc-btn-primary-hover-bg`                    | Primary button background color on hover                 |
|                   | `--cc-btn-primary-hover-color`                 | Primary button text color on hover                       |
|                   | `--cc-btn-primary-hover-border-color`          | Primary button border color on hover                     |
|                   | `--cc-btn-secondary-bg`                        | Secondary button background color                        |
|                   | `--cc-btn-secondary-color`                     | Secondary button text color                              |
|                   | `--cc-btn-secondary-border-color`              | Secondary button border color                            |
|                   | `--cc-btn-secondary-hover-bg`                  | Secondary button background color on hover               |
|                   | `--cc-btn-secondary-hover-color`               | Secondary button text color on hover                     |
|                   | `--cc-btn-secondary-hover-border-color`        | Secondary button border color on hover                   |
| Toggles           | `--cc-pm-toggle-border-radius`                 | Toggle border radius                                     |
|                   | `--cc-toggle-on-bg`                            | Toggle background color in selected state                |
|                   | `--cc-toggle-off-bg`                           | Toggle background color in unselected state              |
|                   | `--cc-toggle-on-knob-bg`                       | Toggle knob color in selected state                      |
|                   | `--cc-toggle-off-knob-bg`                      | Toggle knob color in unselected state                    |
|                   | `--cc-toggle-readonly-bg`                      | Toggle background color in readonly state                |
|                   | `--cc-toggle-readonly-knob-bg`                 | Toggle knob color in readonly state                      |
|                   | `--cc-toggle-readonly-knob-icon-color`         | Toggle knob icon color in readonly state                 |
| Cookie categories | `--cc-cookie-category-block-bg`                | Cookie category block background color                   |
|                   | `--cc-cookie-category-block-border`            | Cookie category block border color                       |
|                   | `--cc-cookie-category-block-hover-bg`          | Cookie category block background color on hover          |
|                   | `--cc-cookie-category-block-hover-border`      | Cookie category block border color on hover              |
|                   | `--cc-cookie-category-expanded-block-bg`       | Expanded cookie category block background color          |
|                   | `--cc-cookie-category-expanded-block-hover-bg` | Expanded cookie category block background color on hover |
| Separators        | `--cc-separator-border-color`                  | Separator border color                                   |
| Backdrop          | `--cc-overlay-bg`                              | Backdrop background color                                |
| Modal             | `--cc-modal-margin`                            | Modal margin                                             |
|                   | `--cc-modal-border-radius`                     | Modal border radius                                      |
|                   | `--cc-modal-transition-duration`               | Modal transition duration                                |
| Footer            | `--cc-footer-bg`                               | Footer background color                                  |
|                   | `--cc-footer-color`                            | Footer text color                                        |
|                   | `--cc-footer-border-color`                     | Footer border color                                      |

</details>

### Color themes

Starting from version 3, the Cookie Consent Manager supports color themes.

#### Spirit color themes

The themes are based on the [Spirit Design Tokens][spirit design tokens], version 3.

For Spirit Design System users, the themes are already included in the CSS.

For projects that are **NOT** built with Spirit Design System (or use Spirit Design System version 2 or lower), you need to [load the themes CSS file](#basic-usage) first.

Having the themes loaded, you can switch between the modes by applying the CSS classes like `.theme-light-default ` or `.theme-light-on-brand`
to any element of your application.

#### Dark mode

While the Spirit Design System does not yet provide a dark mode, you can easily create one by overriding the CSS custom properties:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --cc-bg: #333;
    --cc-primary-color: #fff;
    --cc-secondary-color: #ccc;
    /* … */
  }
}
```

### Custom font

Default cookie consent design uses Inter font loaded via Google Fonts as shown in the [basic](#basic-usage) example.
If you are not using cookie consent with the default design, additional steps may be necessary for you:

- If your project is built with Spirit Design System, you already have the correct font linked in your HTML or CSS.
- If your project is _not_ built with Spirit Design System, you can switch to any font of your choice:
  ```css
  :root {
    --cc-font-family: "Open Sans", arial, sans-serif;
  }
  ```

If you use a custom font like this, make sure you don't load the default Inter font and that you use
`<link rel="preconnect" ...>` only to actually needed domains.

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

This will make the development server accessible http://localhost:5173/ .

* The library with init function is served on: http://localhost:5173/dist/init.js
* Javascript module: http://localhost:5173/dist/CookieConsentManager.js
* CSS: http://localhost:5173/dist/CookieConsentManager.css

### Contributing

For commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification with
[Alma Career rules](https://github.com/lmc-eu/code-quality-tools/blob/main/packages/commitlint-config/index.js).
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
Then push to origin. GitHub [publish action](./.github/workflows/publish.yaml) is then taking care of publishing
package to [npmjs.com](https://npmjs.com/).

## License

Distributed under the MIT License. See [LICENSE](LICENSE.md) for more information.

[cookie consent]: https://github.com/orestbida/cookieconsent
[cookie consent api]: https://cookieconsent.orestbida.com/reference/api-reference.html
[cookie consent third party]: https://cookieconsent.orestbida.com/advanced/manage-scripts.html
[cookie consent options]: https://cookieconsent.orestbida.com/reference/configuration-reference.html
[cookie consent gtm example]: https://github.com/orestbida/cookieconsent/blob/master/demo/demo_gtm/index.html
[orest bida]: https://github.com/orestbida
[spirit design system]: https://github.com/lmc-eu/spirit-design-system
[spirit design tokens]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens
[spirit web]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web
[sass]: https://www.npmjs.com/package/sass
[sass load path]: https://sass-lang.com/documentation/cli/dart-sass#load-path
[sass modules]: https://sass-lang.com/blog/the-module-system-is-launched
[examples]: https://alma-oss.github.io/cookie-consent-manager/examples/
[examples-callbacks]: https://alma-oss.github.io/cookie-consent-manager/examples/callbacks.html
[examples-configuration]: https://alma-oss.github.io/cookie-consent-manager/examples/configuration.html
[examples-theming]: https://alma-oss.github.io/cookie-consent-manager/examples/theming.html
[examples-languages]: https://alma-oss.github.io/cookie-consent-manager/examples/languages.html
[examples-integration-esm]: https://github.com/alma-oss/cookie-consent-manager/tree/main/examples/webpack-with-esm/
