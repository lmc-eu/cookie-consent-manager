# Upgrade from 1.x to 2.0

Release 2.0 contains some backward incompatible changes, new features, and recommendations,
which you should take into account when upgrading to the new version.

This guide will help you upgrade your codebase.

## Rearranged callbacks

The main change in version 2.0 is the possibility to change the previously given consent category using "settings dialog".
Because of that, callbacks must be handled differently, on a per-category basis, and also the update event must now
be taken care of.

At first, none of the callbacks now receives `cookie` object as a parameter anymore. Use `cookieConsent` instance to
access the required data if needed:

```diff
initLmcCookieConsentManager(
    'demo.example',
    // ...
-    onFirstAccept: (cookie) => {
+    onFirstAccept: (cookieConsent) => {
-      submitAcceptedCategoriesToMyApi(cookie.level);
+      submitAcceptedCategoriesToMyApi(cookieConsent.get('level'));
    }
)
```

The next major change is that **only the following three callbacks are now available**:

- `onFirstAccept(cookieConsent)` – executed only once, when the user takes the first action. Don't forget that unlike in the previous version, user now can allow **only some** categories. `onFirstAcceptAll` and `onFirstAcceptOnlyNecessary` callbacks were removed and their logic should be handled inside this callback.
- `onAccept(cookieConsent)` – any consent was detected (either given now or after page load if it was already saved previously). Don't forget that unlike in the previous version, **only some** categories could be allowed. `onAcceptAll` and `onAcceptOnlyNecessary` callbacks were removed and their logic should be handled inside this callback.
- `onChange(cookieConsent, categories)` – new callback which is triggered right after the user changes cookie settings; it receives also `categories` object, which contains arrays of `accepted`, `rejected`, and `changed` categories.

#### Before

```js
initLmcCookieConsentManager(
    'demo.example',
    // ...
    onFirstAcceptOnlyNecessary: () => {
      deleteAllCookies();
      window.localStorage.clear();
    },
    onAcceptAll: (cookie, cookieConsent) => {
      if (cookieConsent.allowedCategory('personalization')) {
        startOptionalPersonalizationFeature();
      }
    },
)
```

#### After

```js
initLmcCookieConsentManager(
    'demo.example',
    // ...
    onFirstAccept: (cookieConsent) => {
      if (!cookieConsent.allowedCategory('personalization')) {
        deleteCookiesForPersonalization();
        clearLocalStorageItemsForPersonalization();
      }
      // ... you may need to handle also other categories
    },
    onAccept: (cookieConsent) => {
      if (cookieConsent.allowedCategory('personalization')) {
        startOptionalPersonalizationFeature();
      }
    },
    onChange: (cookieConsent, categories) => {
      // When user changes settings while on page, the now-rejected categories must be respected
      if (categories.changed.includes('personalization') && !cookieConsent.allowedCategory('personalization')) {
        disablePersonalizationFeature();
        deleteCookiesForPersonalization();
        clearLocalStorageItemsForPersonalization();
      },
      // ... you may need to handle also other categories
    }
)
```

Keep in mind there is no universal solution and there will be different things to handle for each product.
You must analyze used cookies/local storage and features which depend on consent for each category and test all
possible scenarios. With version 2.0 this especially means the `onChange` event.

## Add a link to open cookie consent settings

There MUST be a link for the user to open and update cookie settings after the consent was previously given.

It should be placed preferably in the page footer, somewhere near your current "Terms of use" / "Privacy policy" links.
To add it, use a link with `data-cc="c-settings"` attribute:

```html
<a href="" data-cc="c-settings">Nastavení Cookies</a>
```

## Use `DOMContentLoaded` event instead of `load`

It is highly recommended changing the event where plugin initialization is placed to `DOMContentLoaded`:

```diff
<script>
-window.addEventListener('load', function () {
+window.addEventListener('DOMContentLoaded', function () {
  initLmcCookieConsentManager('demo.example');
});
</script>
```

This will lead to a faster start and rendering of the cookie consent, because unlike `load`, the `DOMContentLoaded`
event (see [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)) does not wait
for loading of other page resources (like images).

When loading the plugin from a standalone file or CDN, you should keep using the `defer` attribute of `<script>`.
Scripts with `defer` are also loaded before `DOMContentLoaded` event
(see [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer)).

## Use `displayMode` instead of `force_consent`

In version 2.0, you should not set `force_consent` or `gui_options` in your configuration. Use `displayMode` instead.

The new `displayMode` option allows choosing between two modes. Under the hood, the mode adjust both GUI layout
and `force_consent` to make consistent user experience.

- `force` (this) – show consent in a centered modal pop-up (this layout was not available until version 2.0) and block page until user action (this replaces `force_consent: true`)
- `soft` – show consent banner on the bottom of the page and do not block the page before user action (this is the same as previous default)

```diff
initLmcCookieConsentManager(
    'demo.example',
    // ...
-    config: {
-      force_consent: true
-    }
+    displayMode: 'force'
    }
)
```

## Adjust design of the new Settings Modal

While the new Settings Modal inherits many design choices from the existing theme, you may still need to adjust it
to match your design through some new CSS custom properties:

- `--lmcccm-toggle-bg-off`
- `--lmcccm-toggle-bg-on`
- `--lmcccm-toggle-bg-readonly`
- `--lmcccm-toggle-knob-bg`
- `--lmcccm-toggle-knob-icon-color`
- `--lmcccm-backdrop-color`
- `--lmcccm-modal-max-width`
- `--lmcccm-modal-max-height`
- `--lmcccm-modal-border-radius`
- `--lmcccm-modal-bg`
- `--lmcccm-modal-text`
- `--lmcccm-modal-section-border`
- `--lmcccm-cookie-category-border-radius`
- `--lmcccm-cookie-category-bg`
- `--lmcccm-cookie-category-hover-bg`
- `--lmcccm-cookie-table-border`

Please also refer to README to get
[the full list of theming options](https://github.com/lmc-eu/cookie-consent-manager#without-spirit-design-system).

## Use new CSS properties of Secondary button

**Secondary button** _(Accept necessary)_ in the consent bar is now rendered as a button (previously rendered as a link).
If you have made any design changes through the theming API, you may need to provide additional theming
for secondary buttons using new `--lmcccm-btn-secondary-*` custom properties:

- `--lmcccm-btn-secondary-border`
- `--lmcccm-btn-secondary-bg`
- `--lmcccm-btn-secondary-text`
- `--lmcccm-btn-secondary-hover-border`
- `--lmcccm-btn-secondary-hover-bg`
- `--lmcccm-btn-secondary-hover-text`
- `--lmcccm-btn-secondary-active-border`
- `--lmcccm-btn-secondary-active-bg`
- `--lmcccm-btn-secondary-active-text`

## Dark mode dropped

Default dark theme has been dropped. Please refer to [README](https://github.com/lmc-eu/cookie-consent-manager)
to learn how to configure a theme or even support the real dark mode.
