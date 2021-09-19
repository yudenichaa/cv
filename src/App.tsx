import { Switch, Route } from 'react-router-dom';
import { Home } from 'pages';
import { useDarkTheme } from 'hooks';
import ThemeContext from 'contexts/theme';

function App() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();

  return (
    <Switch>
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        <Route exact path="/">
          <Home />
        </Route>
      </ThemeContext.Provider>
    </Switch>
  );
}

export default App;
