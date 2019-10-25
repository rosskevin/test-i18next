import i18n, { TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';
// import i18nextDefault, { TFunction } from 'i18next';
import { appStrings } from '../../assets/i18n/appStrings.json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const i18next: typeof i18nextDefault = require('i18next');

i18n.use(initReactI18next).init(
  {
    debug: true,
    resources: appStrings,
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation', 'help', 'settings'],
  },
  (err: Error, t: i18n.TFunction) => {
    if (err) {
      console.error(`i18Next initialization error: ${err.message}`);
    } else {
      console.log(`i18N initialized. Language: ${t('langCode')}`);
    }
  },
);

export default i18n;
