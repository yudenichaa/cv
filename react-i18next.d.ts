import 'react-i18next';
import home from './public/locales/en/home.json';
import common from './public/locales/en/common.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      home: typeof home;
      common: typeof common;
    };
  }
}
