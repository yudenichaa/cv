import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
import 'libs/i18n';
import './index.scss';

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={null}>
      <ErrorBoundary>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
