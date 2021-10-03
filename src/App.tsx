import { useDarkTheme, useLanguagePathSwitcher } from 'hooks';
import { ThemeContext } from 'contexts';
import { Helmet } from 'react-helmet';
import { Home } from 'pages';

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
        <Home />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
