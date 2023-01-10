import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';

import store from './store';

import App from './components/App';

import axios from 'axios';
window.axios = axios;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
