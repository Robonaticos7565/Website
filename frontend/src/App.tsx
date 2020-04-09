import React, { useState } from 'react';
import Routes from './utils/routes';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

export default function App() {
  const [theme, setTheme] = useState(light)

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
