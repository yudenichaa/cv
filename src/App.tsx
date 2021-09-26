import { useDarkTheme, useLanguagePathSwitcher } from 'hooks';
import ThemeContext from 'contexts/theme';
import { lazy } from 'react';
import pMinDelay from 'p-min-delay';
import { Helmet } from 'react-helmet';

const HomePage = lazy(() => pMinDelay(import('./pages/Home'), 600));

function App() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();
  const languageCode = useLanguagePathSwitcher();

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: languageCode }}
        meta={[
          {
            name: 'theme-color',
            content: isDarkTheme ? '#22272e' : '#ffffff',
          },
        ]}
      />
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        <HomePage />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
