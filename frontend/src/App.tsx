import React, { useState, createContext } from 'react';
import Routes from './utils/routes';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={dark}>
      <div className="app">
        <GlobalStyle />
        <Routes />
      </div>
    </ThemeProvider>
  );
}
