import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const detectorOptions = {
  order: ['localStorage', 'path', 'navigator'],
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: detectorOptions,
    supportedLngs: ['en', 'ru'],
    ns: ['common'],
    fallbackLng: 'en',
    saveMissing: true,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
