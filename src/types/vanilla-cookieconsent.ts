export namespace VanillaCookieConsent {
  export enum AcceptType {
    'ALL' = 'all',
    'NECESSARY' = 'necessary',
    'CUSTOM' = 'custom',
  }

  export enum PrimaryButtonRole {
    ACCEPT_ALL = 'accept_all',
    ACCEPT_SELECTED = 'accept_selected',
  }

  export enum SecondaryButtonRole {
    ACCEPT_NECESSARY = 'accept_necessary',
    SETTINGS = 'settings',
  }

  export enum GuiConsentLayout {
    BAR = 'bar',
    BOX = 'box',
    CLOUD = 'cloud',
  }

  export enum GuiConsentPosition {
    BOTTOM_LEFT = 'bottom left',
    BOTTOM_RIGHT = 'bottom right',
    BOTTOM_CENTER = 'bottom center',
    MIDDLE_LEFT = 'middle left',
    MIDDLE_RIGHT = 'middle right',
    MIDDLE_CENTER = 'middle center',
    TOP_LEFT = 'top left',
    TOP_RIGHT = 'top right',
    TOP_CENTER = 'top center',
  }

  export enum GuiSettingsLayout {
    BAR = 'bar',
    BOX = 'box',
  }

  export enum GuiSettingsPosition {
    LEFT = 'left',
    RIGHT = 'right',
  }

  export enum Transition {
    SLIDE = 'slide',
    ZOOM = 'zoom',
  }
}
