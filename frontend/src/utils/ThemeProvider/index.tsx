import React, { useState } from "react";
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import { DefaultTheme } from 'styled-components'
import usePersistedState from '../../utils/usePersistedState';


type Theme = object;
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)
    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};