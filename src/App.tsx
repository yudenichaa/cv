import { Switch, Route } from 'react-router-dom';
import { Home } from 'pages';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
