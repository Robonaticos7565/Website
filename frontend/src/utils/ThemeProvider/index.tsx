import React, { useState } from "react";
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from '../../utils/usePersistedState';

type Theme = any;
type ThemeContext = { theme: Theme ,toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

export const ThemeProviderTest: React.FC = ({ children }) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme} >
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProviderTest;
