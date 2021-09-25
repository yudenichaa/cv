import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from 'components';
import { Suspense } from 'react';
import { PageLoadingIndicator } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
import 'libs/i18n';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<PageLoadingIndicator />}>
        <Router>
          <App />
        </Router>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
