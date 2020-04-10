import React, { Component } from 'react';

import {
    Window,
    Container,
    Content,
    Section,
} from '../../components/Base';

import Toggle from '../../components/Button';

import { Menu } from '../../components/Menu/';

import CompMenu from '../../components/CompMenu';

export default function WhiteBoard() {
    return(
        <Window>
            <Container>
                <Toggle />
                <Menu />
                <Content>
                    <Section>
                        <CompMenu/>
                    </Section>
                </Content>
            </Container>
        </Window>
    );
}