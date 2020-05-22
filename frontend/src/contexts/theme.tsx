import React from "react";
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from '../hooks/usePersistedState';

import { dark, light } from '../styles/themes/';

type Theme = any;
type ThemeContext = { theme: Theme, toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

export const ThemeContextProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
