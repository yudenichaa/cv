import { Switch, Route } from 'react-router-dom';
import { Home } from 'pages';
import { useDarkTheme } from 'hooks';
import ThemeContext from 'contexts/theme';
import { Suspense } from 'react';

function App() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();

  return (
    <Switch>
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        <Suspense fallback="loading">
          <Route exact path="/">
            <Home />
          </Route>
        </Suspense>
      </ThemeContext.Provider>
    </Switch>
  );
}

export default App;
