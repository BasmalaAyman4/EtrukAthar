import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
i18next
 .use(initReactI18next)
 .use(LanguageDetector)
 .use(HttpApi)
 .init({
  supportedLngs: ['en', 'ar'],
  fallbackLng :"ar",
  detection: {
    order: ['cookie','htmlTag','localStorage','path', 'subdomain'],
    caches:['cookie']
  },
  backend:{
    loadPath:'/assets/locales/{{lng}}/translation.json',
  },
  react:{
    useSuspense: false
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
