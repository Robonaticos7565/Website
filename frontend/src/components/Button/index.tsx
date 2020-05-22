import React, { useState, useContext, useEffect } from 'react';
import { Toggle } from './styles';

import { ThemeContext } from '../../utils/ThemeProvider/';

const ToggleBtn: React.FC = () => {
    const [active, setActive] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);

    console.log(theme.title)

    useEffect(() => {
        if (theme.title === 'dark') {
            setActive(false);
        } else {
            setActive(true);
        }
    });

    const toggle = () => {
        setActive(!active);
    }

    return(
        <Toggle
            onClick={() => {toggleTheme(); toggle()}}
        >
            <div className={active ? "toogleBody active" : "toogleBody"}>
                <div className={active ? "toggleBtn active" : "toggleBtn"}></div>
            </div>
        </Toggle>
    );
};

export default ToggleBtn;