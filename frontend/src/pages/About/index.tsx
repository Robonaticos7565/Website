import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

import { Button1 } from '../../components/Button/styles';

export default function About() {

    const { toggleTheme } = useContext(ThemeContext);

    return (
        <Button1 onClick={toggleTheme} ></Button1>
    );
}