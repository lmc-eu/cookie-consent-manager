export enum CookieConsentLevel {
  NECESSARY = 'necessary',
  AD = 'ad',
  ANALYTICS = 'analytics',
  FUNCTIONALITY = 'functionality',
  PERSONALIZATION = 'personalization',
}

export interface Cookie {
  data: any;
  level: Array<CookieConsentLevel>;
  revision: number;
  rfc_cookie: boolean;
}

/**
 * Instance of the underlying CookieConsent component.
 *   For available API, see https://github.com/orestbida/cookieconsent#apis--configuration-parameters
 */
export type CookieConsent = {
  get: (name: string) => any;
  set: (name: string, value: any) => void;
  run: (config: any) => void;
  validCookie: (name: string) => boolean;
  getConfig: (name: string) => any;
};

export type OnAcceptCallback = (cookie: Cookie, cookieConsent: CookieConsent) => void;

export type CookieConsentOptions = {
  defaultLang: string;
  autodetectLang: boolean;
  consentCollectorApiUrl: string;
  onFirstAccept: OnAcceptCallback;
  onFirstAcceptOnlyNecessary: OnAcceptCallback;
  onFirstAcceptAll: OnAcceptCallback;
  onAccept: OnAcceptCallback;
  onAcceptOnlyNecessary: OnAcceptCallback;
  onAcceptAll: OnAcceptCallback;
  companyNames: string[];
  config: any;
};

export type CookieConsentManager = (serviceName: string, args: CookieConsentOptions) => CookieConsent;
