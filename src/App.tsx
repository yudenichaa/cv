import { useDarkTheme, useLanguagePathSwitcher } from 'hooks';
import { ThemeContext } from 'contexts';
import { Helmet } from 'react-helmet';
import { Home } from 'pages';
import { useState, useEffect } from 'react';
import { PageLoadingIndicator } from 'components';
import pMinDelay from 'p-min-delay';

function App() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();
  const i18n = useLanguagePathSwitcher();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pMinDelay(
      new Promise<void>((resolve) => {
        i18n.on('loaded', () => {
          resolve();
        });
      }),
      1000
    ).then(() => {
      setLoading(false);
    });
  }, [i18n]);

  return (
    <>
      {loading && <PageLoadingIndicator />}
      <Helmet
        htmlAttributes={{ lang: i18n.language }}
        meta={[
          {
            name: 'theme-color',
            content: isDarkTheme ? '#22272e' : '#ffffff',
          },
        ]}
      />
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        <Home />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
