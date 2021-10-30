[![npm version](https://img.shields.io/npm/v/@lmc-eu/cookie-consent-manager.svg)](https://www.npmjs.com/package/@lmc-eu/cookie-consent-manager)
![CI](https://github.com/lmc-eu/cookie-consent-manager/actions/workflows/lint.yaml/badge.svg)

# Cookie Consent Manager

Provide configurable cookie consent banner with predefined LMC defaults. The UI is based on [Spirit Design System].

The package is a wrapper around [Cookie Consent] by [Orest Bida].

## Basic usage

Load the script and initialize the plugin right before ending `</body>` tag:

```html
<script defer src="https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@v0.1.0/init.js"></script>
<script>
window.addEventListener('load', function () {
  initLmcCookieConsentManager();
});
</script>
```

This will load the plugin from CDN and initialize the plugin with default settings. See [examples/index.html](examples/index.html).

## Loading the plugin

### Via CDN or static file

You can load the plugin from a CDN, as in the basic example above.

```html
<script defer src="https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@v0.1.0/init.js"></script>
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
    npm i @lmc-eu/cookie-consent-manager
    ```

2. Import the module in your javascript:
    ```js
    import LmcCookieConsentManager from '@lmc-eu/cookie-consent-manager';

    window.addEventListener('load', function () {
      LmcCookieConsentManager(/* plugin configuration */);
    });
    ```

3. Include default styles:
    ```scss
    @use '../node_modules/@lmc-eu/cookie-consent-manager/LmcCookieConsentManager';

    :root {
        // override default config
    }
    ```

## Manage features depending on given consent

For "necessary" cookies it is not needed to check whether a user has given any consent.

However, for all other purposes, it must be explicitly checked whether user has given the appropriate
consent category. This must be done *before* the respective cookie is set.

### Consent categories

* `necessary` - for cookies required by the website to work (for example login); for these cookies you **don't need to check** whether user actually has this level
* `ad` - for cookies related to advertising
* `analytics` - for analysis and statistics
* `functionality` - for extended functionality (not covered by `necessary` category)
* `personalization` - for personalization based on user profiling (recommendation etc.)

### GTM (Google Tag Manager) scripts

GTM scripts are managed centrally, so after implementing the library you don't need to worry about them.
The library sets all the required data to GTM dataLayer.

### Custom methods

To execute custom code which depends on cookie consent use callbacks:

```js
// ...
initLmcCookieConsentManager(
  {
    'onAcceptAll': (cookie, cookieConsent) => {
      if (cookieConsent.allowedCategory('functionality') {
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
  {
    'config': {
      'page_scripts': false
    }
  }
);
```

## Configuration

Optional config parameters could be provided on plugin initialization in the configuration object.

```js
initLmcCookieConsentManager(
  {
    'defaultLang': 'cs',
    'autodetectLang': false,
    'onAcceptAll': (cookie, cookieConsent) => {
      // custom code
    },
    'config': {
      // overrides of default config, see https://github.com/orestbida/cookieconsent#all-available-options
    },
  }
);
```

## Configuration options

| Option        | Type     | Default value                  | Description                                                                                                                               |
|---------------|----------|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `defaultLang` | string   | 'cs'                           | Default language. One of `cs`, `en`, `sk`, `pl`. This language will be used when autodetect is disabled or when it fails.                 |
| `autodetectLang`| string | true                           | Autodetect language from the browser. If autodetect fails or if unsupported language is detected, fallback to `defaultLang`.<br>When disabled, force language to `defaultLang`. |
| `themeCss`    | string   | ''                             | Specify path to the .css file                                                                                                             |
| `config`      | Object   | {}                             | Override default config of the underlying library. For all parameters see [original library](https://github.com/orestbida/cookieconsent#all-available-options). |
| `on*` callbacks| function | (cookie, cookieConsent) => {} | See below for configurable callbacks. |

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

## License

Distributed under the MIT License. See [LICENSE](https://github.com/lmc-eu/cookie-consent-manager/blob/main/LICENSE.md) for more information.

[spirit design system]: https://github.com/lmc-eu/spirit-design-system
[cookie consent]: https://github.com/orestbida/cookieconsent
[orest bida]: https://github.com/orestbida
