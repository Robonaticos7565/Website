import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css';
import { ThemeProvider } from './utils/ThemeProvider';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
