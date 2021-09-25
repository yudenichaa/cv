import { useDarkTheme } from 'hooks';
import ThemeContext from 'contexts/theme';
import { lazy, useEffect } from 'react';
import pMinDelay from 'p-min-delay';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { languageOptions } from 'config';

const HomePage = lazy(() => pMinDelay(import('./pages/Home'), 600));

function App() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();
  const { i18n } = useTranslation();
  const languageCode = i18n.languages[0];
  const history = useHistory();

  useEffect(() => {
    const path = history.location.pathname;
    const indexOfSecondSlash = path.indexOf('/', 1);
    if (indexOfSecondSlash === -1) {
      const languagePart = path.slice(1);
      if (languagePart in languageOptions) {
        history.replace('/' + languageCode);
      } else {
        history.replace('/' + languageCode + path);
      }
    } else {
      const languagePart = path.slice(1, indexOfSecondSlash);
      if (languagePart in languageOptions) {
        const pathWithoutLanguage = path.slice(indexOfSecondSlash + 1);
        history.replace('/' + languageCode + '/' + pathWithoutLanguage);
      } else {
        history.replace('/' + languageCode + path);
      }
    }
  }, [languageCode, history]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.resolvedLanguage }} />
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        <HomePage />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
