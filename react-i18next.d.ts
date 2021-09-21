import 'react-i18next';
import transaltions from './public/locales/en/translation.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      transaltions: typeof transaltions;
    };
  }
}
