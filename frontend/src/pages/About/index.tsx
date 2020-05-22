import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeProvider/';

import { Button1 } from '../../components/Button/styles';

export default function About() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Button1 onClick={toggleTheme} ></Button1>
    );
}