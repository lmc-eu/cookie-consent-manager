export const config = {
  consent_modal: {
    title: 'I use cookies',
    description: 'Your cookie consent message here',
    primary_btn: {
      text: 'Accept',
      role: 'accept_all', //'accept_selected' or 'accept_all'
    },
    secondary_btn: {
      text: 'Reject',
      role: 'accept_necessary', //'settings' or 'accept_necessary'
    },
  },
  settings_modal: {
    title: 'Cookie settings',
    save_settings_btn: 'Save settings',
    accept_all_btn: 'Accept all',
    reject_all_btn: 'Reject all', // optional, [v.2.5.0 +]
    close_btn_label: 'Close',
    blocks: [
      {
        toggle: {
          value: 'necessary',
          enabled: true,
          readonly: true,
        },
      },
      {
        toggle: {
          value: 'analytics',
          enabled: false,
          readonly: false,
        },
      },
      {
        toggle: {
          value: 'functionality',
          enabled: false,
          readonly: false,
        },
      },
      {
        toggle: {
          value: 'personalization',
          enabled: false,
          readonly: false,
        },
      },
    ],
  },
};

export default config;
