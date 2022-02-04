# Upgrade from 1.x to 2.0

Release 2.0 contains some backward incompatible changes, new features, and recommendations,
which you should take into account when upgrading to the new version.

This guide will help you upgrade your codebase.

## Rearranged callbacks

TBD

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
