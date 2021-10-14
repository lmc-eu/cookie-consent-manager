export const config = {
  consent_modal: {
    title :  "Tyto stránky používají cookies",
      description :  'Cookies používáme, abychom zajistili správné fungování a bezpečnost našich stránek, tím pádem co nejlepší zkušenost při návštěvě. Kliknutím na „Přijmout všechny“ dáváte svůj souhlas s použitím cookies pro účely reklamy a analytik. Svá nastavení cookies můžete později kdykoliv změnit. Více informací naleznete v <a href="#">Prohlášení o cookies.</a>',
      primary_btn: {
      text: 'Přijmout',
        role: 'accept_all'  //'accept_selected' or 'accept_all'
    },
    secondary_btn: {
      text : 'Přijmout nezbytné',
        role : 'accept_necessary'   //'settings' or 'accept_necessary'
    }
  },
  settings_modal : {
    title : 'Nastavení cookies',
      save_settings_btn : "Uložit nastavené",
      accept_all_btn : "Přijmout vše",
      reject_all_btn : "Odmítnout vše", // optional, [v.2.5.0 +]
      close_btn_label: "Zavřít",
      blocks : [],
  },
};

export default config;
