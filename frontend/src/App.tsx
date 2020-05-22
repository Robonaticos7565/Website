import React from 'react';
import Routes from './routes/routes';

import GlobalStyle from './styles/global';

import { ThemeContextProvider } from './contexts/theme';

export default function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Routes />
    </ThemeContextProvider>
  );
};
