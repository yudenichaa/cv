import { useDarkTheme } from 'hooks';
import ThemeContext from 'contexts/theme';
import { PageLoadingIndicator } from 'components';
import { Suspense, lazy } from 'react';
import pMinDelay from 'p-min-delay';

const HomePage = lazy(() => pMinDelay(import('./pages/Home'), 600));

function App() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <Suspense fallback={<PageLoadingIndicator />}>
        <HomePage />
      </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;
