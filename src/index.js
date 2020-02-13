import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Store';
import { Router } from 'react-router-dom';
import App from './App';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
