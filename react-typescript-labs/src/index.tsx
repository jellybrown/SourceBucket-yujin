import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
// import GlobalStyles from 'styles/globalStyles';
import App from './App';
import GlobalStyles from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
