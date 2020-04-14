import React from 'react';

import {
    Window,
    Container,
    Content,
} from './style';

import Toggle from '../../components/Button';

import { Menu } from '../../components/Menu/';

const Main: React.FC = ({ children }) => {
    return (
        <Window>
            <Container>
                {/* <Toggle /> */}
                <Menu />
                <Content>
                    {children}
                </Content>
            </Container>
        </Window>
    );
}

export default Main;