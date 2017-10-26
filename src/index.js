import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import registerServiceWorker from 'registerServiceWorker';

import App from 'layouts/App';
import theme from './theme';
const history = createBrowserHistory();

/* eslint-disable no-unused-expressions*/
injectGlobal`${normalize()}`;
injectGlobal`
  html {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
  }

`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
