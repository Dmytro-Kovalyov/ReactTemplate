import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";

import App from "./App";

import i18next from "i18next";
import common_uk from "./i18n/uk.json";
import common_en from "./i18n/en.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  
  lng: 'uk',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      uk: {
          common: common_uk
      },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

