import { useDarkTheme, useLanguage } from 'hooks';
import { ThemeContext } from 'contexts';
import { Helmet } from 'react-helmet';
import { Home } from 'pages';
import { PageLoadingIndicator } from 'components';

function App() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();
  const [language, loading] = useLanguage();

  return (
    <>
      {loading && <PageLoadingIndicator />}
      <Helmet
        htmlAttributes={{ lang: language }}
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
