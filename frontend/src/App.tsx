import React, { useState, createContext } from 'react';
import Routes from './routes/routes';
import { ThemeProvider, DefaultTheme, } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

import About from './pages/About';

type ThemeContext = { theme: any; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  // const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme} >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="app">
          <GlobalStyle />
          <Routes />
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
