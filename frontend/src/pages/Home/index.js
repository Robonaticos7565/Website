import React, { useEffect } from 'react';

import { Window, Container, Content } from '../../components/Base'
import { Title } from '../../components/Text';
import { Menu } from '../../components/Menu'

export default function Home() {

    useEffect(() => {
        document.title = `Robonáticos - Home`;
    })

    return (
        <Window>
            <Container>
                <Menu/>
                <Content>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                    <Title>Home</Title>
                </Content>
            </Container>
        </Window>
    );
}