import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import messagesEs from "./locales/es.json";
import messagesEn from "./locales/en.json";

const messages = {
  'es': messagesEs,
  'en': messagesEn,
};

const language = navigator.language.split(/[-_]/)[0];  
const localeMessages = messages[language] || messages.en;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={language} messages={localeMessages}>
        <App />
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();