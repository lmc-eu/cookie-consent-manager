export namespace VanillaCookieConsent {
  export interface Cookie<Category> {
    data: any;
    level: Array<Category>;
    revision: number;
    rfc_cookie: boolean;
  }

  /**
   * Instance of the underlying CookieConsent component.
   *   For available API, see https://github.com/orestbida/cookieconsent#apis--configuration-parameters
   */
  export type CookieConsent<Category> = {
    get: (name: string) => any;
    set: (name: string, value: any) => void;
    run: (config: any) => void;
    validCookie: (name: string) => boolean;
    getConfig: (name: string) => any;
    allowedCategory: (category: Category) => boolean;
    eraseCookies: (cookies: string | string[], path?: string, domain?: string) => void;
    getUserPreferences: () => UserPreferences<Category>;
  };

  export interface UserPreferences<Category> {
    accept_type: AcceptType;
    accepted_categories: Array<Category>;
    rejected_categories: Array<Category>;
  }

  export enum AcceptType {
    ALL = 'all',
    NECESSARY = 'necessary',
    CUSTOM = 'custom',
  }

  export enum PrimaryButtonRole {
    ACCEPT_ALL = 'accept_all',
    ACCEPT_SELECTED = 'accept_selected',
  }

  export enum SecondaryButtonRole {
    ACCEPT_NECESSARY = 'accept_necessary',
    SETTINGS = 'settings',
  }

  export interface ModalPrimaryButton {
    text?: string;
    role?: PrimaryButtonRole;
  }

  export interface ModalSecondaryButton {
    text?: string;
    role?: SecondaryButtonRole;
  }

  export interface ModalBlockToggle {
    value?: string;
    enabled?: boolean;
    readonly?: boolean;
  }

  export interface CookieTableItem {
    domain?: string;
    path?: string;
    is_regex?: boolean;
    [key: string]: string | boolean | undefined;
  }

  export interface ModalBlock {
    title?: string;
    description?: string;
    toggle?: ModalBlockToggle;
    cookie_table?: CookieTableItem[];
  }

  export interface ConsentModal {
    title?: string;
    description?: string;
    primary_btn?: ModalPrimaryButton;
    secondary_btn?: ModalSecondaryButton;
  }

  export interface SettingsModal {
    title?: string;
    accept_all_btn?: string;
    reject_all_btn?: string;
    save_settings_btn?: string;
    cookie_table_headers?: Record<string, string>[];
    blocks?: ModalBlock[];
  }

  export interface Languages {
    consent_modal?: ConsentModal;
    settings_modal?: SettingsModal;
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

  export interface GuiConsentModal {
    layout: GuiConsentLayout;
    position: GuiConsentPosition;
    transition?: Transition;
    swap_buttons: boolean;
  }

  export interface GuiSettingsModal {
    layout: GuiSettingsLayout;
    position?: GuiSettingsPosition;
    transition?: Transition;
  }

  export interface GuiOptions {
    consent_modal?: GuiConsentModal;
    settings_modal?: GuiSettingsModal;
  }

  export interface Options<Category> {
    autorun?: boolean;
    delay?: number;
    cookie_expiration?: number;
    cookie_necessary_only_expiration?: number;
    cookie_path?: string;
    cookie_domain?: string;
    cookie_name?: string;
    cookie_same_site?: string;
    use_rfc_cookie?: boolean;
    theme_css?: string;
    current_lang?: string;
    force_consent?: boolean;
    revision?: number;
    auto_language?: string | null;
    autoclear_cookies?: boolean;
    page_scripts?: boolean;
    remove_cookie_tables?: boolean;
    hide_from_bots?: boolean;
    gui_options?: GuiOptions;
    onAccept?: (cookie: Cookie<Category>) => void;
    onChange?: (cookie: Cookie<Category>, changed_categories: Array<Category>) => void;
    onFirstAction?: (user_preferences: UserPreferences<Category>, cookie: Cookie<Category>) => void;
    languages?: Record<string, Languages>;
  }
}
