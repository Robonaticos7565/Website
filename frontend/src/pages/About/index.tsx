import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../App'; 

import { Button1 } from '../../components/Button/styles';

export default function About() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Button1 onClick={toggleTheme} ></Button1>
    );
}