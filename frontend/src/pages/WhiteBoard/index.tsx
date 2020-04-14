import React, { Component } from 'react';

import Main from '../../components/Base/';

import { Section } from '../../components/Base/style';

import Toggle from '../../components/Button';

import { Menu } from '../../components/Menu/';

import CompMenu from '../../components/CompMenu';

export default function WhiteBoard() {
    return (
        <Main>
            <Section>
                <CompMenu />
            </Section>
        </Main>
    );
}