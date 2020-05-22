import React from 'react';
import Routes from './routes/routes';

import { ThemeProviderTest } from './utils/ThemeProvider/';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <ThemeProviderTest>
      <GlobalStyle />
      <Routes />
    </ThemeProviderTest>
  );
}
