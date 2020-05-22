import React from 'react';
import Routes from './routes/routes';

import GlobalStyle from './styles/global';

import { ThemeProviderTest } from './utils/ThemeProvider/';

export default function App() {
  return (
    <ThemeProviderTest>
      <GlobalStyle />
      <Routes />
    </ThemeProviderTest>
  );
}
