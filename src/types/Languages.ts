export interface ExtraMessages {
  companyNames: string[];
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
export interface ModalBlock {
  title?: string;
  description?: string;
  toggle?: ModalBlockToggle;
}

export interface ConsentModal {
  title?: string;
  description?: string;
  primary_btn?: ModalPrimaryButton;
  secondary_btn?: ModalSecondaryButton;
}

export interface SettingsModal {
  title?: string;
  save_settings_btn?: string;
  accept_all_btn?: string;
  blocks?: ModalBlock[];
}

export interface LanguageConfig {
  consent_modal?: ConsentModal;
  settings_modal?: SettingsModal;
}
