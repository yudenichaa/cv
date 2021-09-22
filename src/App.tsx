import { Home } from 'pages';
import { useDarkTheme } from 'hooks';
import ThemeContext from 'contexts/theme';
import { Suspense } from 'react';

function App() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <Suspense fallback="loading">
        <Home />
      </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;
