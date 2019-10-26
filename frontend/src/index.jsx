import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyles from './globalStyles';
import App from './components/App';
import store from './store';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  root,
);
