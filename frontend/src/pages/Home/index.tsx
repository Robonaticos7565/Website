import React, { useEffect, Component } from 'react';
import { Link } from 'react-router-dom';

/** Components */
import {
    Window,
    Container,
    Content,
    BISectionContainer,
    BISectionContent,
    Mask,
    Section,
    TextDiv,
    OneImageDiv,
    Image
} from '../../components/Base';

import {
    SecH1,
    Desc,
    SubDesc,
    CompDesc,
    Underline,
} from '../../components/Text';

import { Button1 } from "../../components/Button/styles";
import Toggle from '../../components/Button';

import { Menu } from '../../components/Menu/';

import CompMenu from '../../components/CompMenu';

/** Images */
import Team from '../../assets/images/Team.jpeg';
import TeamMember from '../../assets/images/TeamMember.png';
import Project1 from '../../assets/images/Project1.png';
import Project2 from '../../assets/images/Project2.png';

export default class Home extends Component {

    componentDidMount() {
        document.title = `Robonáticos | Home`;
        document.addEventListener('DOMContentLoaded', init);
    }

    render() {
        return (
            <Window>
                <Container>
                    <Toggle />
                    <Menu />
                    <Content>
                        {/* Wellcome Section */}
                        <BISectionContainer src={Team} >
                            <BISectionContent>
                                <div className="txtContainer">
                                    <div className="txtContent">
                                        <h1>Nós<span className="txt" data-wait="1000" data-words='[" Aprendemos", " Ensinamos", " nos Divertimos", " somos STEAM", " fazemos Ciência", " Compartilhamos", " Construimos"]'></span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="mouse"> <div className="mouseContent" /> </div>
                            </BISectionContent>
                        </BISectionContainer>
                        <Mask />

                        {/* About Section */}
                        <Section>
                            <TextDiv
                                width='50%'
                                flexDirection='column'
                                justifyContent='space-around'
                                alignItems='flex-start'

                                respWidth='100%'
                            >
                                <SubDesc>O que é ser Robonático?</SubDesc>
                                <Desc>Ser Robonático é <Underline>aprender,</Underline> <Underline>aplicar</Underline> e <Underline>divulgar</Underline> conhecimento, sempre de forma <Underline>divertida!</Underline></Desc>
                                <SubDesc>Venha conhecer mais sobre nós!</SubDesc>
                                <Button1
                                    fontSize='25px'
                                >
                                    <Link to='/'>Saiba mais!</Link>
                                </Button1>
                            </TextDiv>
                            <OneImageDiv
                                width='50%'
                                respMargin='50px 0'
                            >
                                <Image
                                    large='410px'
                                    medium=''
                                    small='85%'
                                    src={TeamMember}
                                    alt="Membro do time"
                                />
                            </OneImageDiv>
                        </Section>

                        {/* Projects Section */}
                        <Section>
                            <TextDiv
                                width='50%'
                                flexDirection='column'
                                justifyContent='space-around'
                                alignItems='flex-start'
                            >
                                <Desc>Compartilhamos gratuitamente o <Underline>conhecimento,</Underline> porque ele é a chave para a <Underline>mudança</Underline> do jovem e do mundo.</Desc>
                                <SubDesc>Veja nossos projetos!</SubDesc>
                                <Button1
                                    fontSize='25px'
                                >Saiba mais!</Button1>
                            </TextDiv>
                            <OneImageDiv
                                width='50%'
                                flexDirection='column'
                                alignItems='center'
                                respMargin='50px 0 0 0'
                                lapJustifyContent='space-between'
                            >
                                <Image
                                    large='410px'
                                    medium='460px'
                                    small='85%'
                                    src={Project1}
                                    alt="Membro do time"
                                />
                                <Image
                                    large='410px'
                                    medium='460px'
                                    small='85%'
                                    margin='40px'
                                    src={Project2}
                                    alt="Membro do time"
                                />
                            </OneImageDiv>
                        </Section>

                        {/* Competition Section */}
                        <Section>
                            <CompMenu />
                            <TextDiv
                                flexDirection='column'
                            >
                                <SecH1>Competições</SecH1>
                                <CompDesc>
                                    Clique ao lado e saiba mais!
                                </CompDesc>
                            </TextDiv>
                        </Section>
                    </Content>
                </Container>
            </Window>
        );
    }
}

/** Function to TypeWritter Effect */
// ES6 Class
class TypeWriter {
    txtElement: any;
    words: string;
    txt: string;
    wordIndex: number;
    wait: any;
    isDeleting: boolean;

    constructor(txtElement: string, words: string, wait: any = 300) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 15);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        let test = this.txtElement as HTMLInputElement
        test.innerHTML = String(`<span class="txt">${this.txt}</span>`);

        // Initial Type Speed
        let typeSpeed = 80;

        if (this.isDeleting) {
            typeSpeed /= 2.1;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 0;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init App
function init(txtElement?: any): void {
    txtElement = document.querySelector('.txt');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}