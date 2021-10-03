import { useDarkTheme, useLanguagePathSwitcher } from 'hooks';
import { ThemeContext } from 'contexts';
import { Helmet } from 'react-helmet';
import { Home } from 'pages';
import { Suspense } from 'react';
function App() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();
  const languageCode = useLanguagePathSwitcher();

  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

export default App;
