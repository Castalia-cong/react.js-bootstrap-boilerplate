import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { LoadingSpinner } from './components/common/spinner';
import App from './App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
