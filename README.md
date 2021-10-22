# Cookie Consent Manager

Provide configurable cookie consent banner with predefined LMC defaults. The UI is based on [Spirit Design System].

The package is a wrapper around [Cookie Consent] by [Orest Bida].

## Usage

1. Download (or use via [cdn](#download--cdn)) and include the script at the bottom of `body` tag.

   ```html
   <script src="init.js"></script>
   ```

2. Run the plugin with your configuration parameters.
   <br>
   <details><summary><b>Show basic example</b></summary>

   ```html
   <script defer src="init.js"></script>
   <script>
     window.addEventListener('load', function () {
       initLmcCookieConsentManager({
         currentLang: 'cs',
         themeCss: './dist/LmcCookieConsentManager.css',
         config: {
           // override default config
         },
       });
     });
   </script>
   ```

   </summary>
   </details>
   <br>

   For more details check out original [cookie consent] library.

### Zero configuration setup

Download (or use via [cdn](#download--cdn)) and include the script at the bottom of `body` tag.

```html
<script src="autoload.js"></script>
```

Will display cookie consent with default configuration.

### Download & CDN

You can download the [latest version](https://github.com/lmc-eu/cookie-consent-manager/releases) or use it via cdn:

javascript :

```html
https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@v0.1.0/init.js
```

stylesheet :

```html
https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@v0.1.0/LmcCookieConsentManager.css
```

### npm

```shell
yarn add @lmc-eu/cookie-consent-manager
```

or

```shell
npm install --save @lmc-eu/cookie-consent-manager
```

```js
import LmcCookieConsentManager from '@lmc-eu/cookie-consent-manager';

LmcCookieConsentManager({
  currentLang: 'cs',
  themeCss: './dist/LmcCookieConsentManager.css',
  config: {
    // override default config
  },
});
```

```scss
@use '../node_modules/@lmc-eu/cookie-consent-manager/LmcCookieConsentManager';

:root {
    // override default config
}
```

## Configuration

You can initialize cookie consent manager with following parameters:

| Option        | Type     | Default        | Description                                                                                                                               |
| ------------- | -------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `currentLang` | string   | 'cs'           | Specify one of the languages you have defined (can also be dynamic): 'en', 'cs' ...                                                       |
| `onAccept`    | function | (cookie) => {} | Callback to be executed after any consent is detected (either given now or already saved previously)                                     |
| `themeCss`    | string   | ''             | Specify path to the .css file                                                                                                             |
| `config`      | Object   | {}             | Override default config. For all parameters consult [original library](https://github.com/orestbida/cookieconsent#all-available-options). |

## License

Distributed under the MIT License. See [LICENSE](https://github.com/lmc-eu/cookie-consent-manager/blob/main/LICENSE.md) for more information.

[spirit design system]: https://github.com/lmc-eu/spirit-design-system
[cookie consent]: https://github.com/orestbida/cookieconsent
[orest bida]: https://github.com/orestbida
