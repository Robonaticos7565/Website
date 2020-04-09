import React, { useState } from 'react';

import { Toggle } from './styles';

const ToggleBtn: React.FC = () => {

    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    }

    return(
        <Toggle
            onClick={() => toggle()}
        >
            <div className={active ? "toogleBody active" : "toogleBody"}>
                <div className={active ? "toggleBtn active" : "toggleBtn"}></div>
            </div>
        </Toggle>
    );
};

export default ToggleBtn;