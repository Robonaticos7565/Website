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
    Desc,
    SubDesc, 
    Underline,
} from '../../components/Text';

import { Button1 } from "../../components/Button";

import { Menu } from '../../components/Menu';

/** Images */
import Team from '../../assets/images/Team.jpeg';
import TeamMember from '../../assets/images/TeamMember.png'

export default class Home extends Component {

    componentDidMount() {
        document.title = `Robonáticos | Home`;
        document.addEventListener('DOMContentLoaded', init);
    }

    render() {
        return (
            <Window>
                <Container>
                    <Menu />
                    <Content>
                        <BISectionContainer src={Team} >
                            <BISectionContent>
                                <div className="txtContainer">
                                    <div class="txtContent">
                                        <h1>Nós<span class="txt" data-wait="1000" data-words='[" Aprendemos", " Ensinamos", " nos Divertimos", " somos STEAM", " fazemos Ciência", " Compartilhamos", " Construimos"]'></span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="mouse"> <div className="mouseContent" /> </div>
                            </BISectionContent>
                        </BISectionContainer>
                        <Mask />
                        <Section>
                            <TextDiv
                                width='50%'
                                flexDirection='column'
                                justifyContent='space-around'
                                alignItems='flex-start'
                            >
                                <SubDesc>O que é ser Robonático?</SubDesc>
                                <Desc>Ser Robonático é <Underline>aprender</Underline>, <Underline>aplicar</Underline> e <Underline>divulgar</Underline> conhecimento, sempre de forma <Underline>divertida</Underline>!</Desc>
                                <SubDesc>Venha conhecer mais sobre nós!</SubDesc>
                                <Button1
                                    fontSize='25px'
                                >
                                    <Link>Saiba mais!</Link>
                                </Button1>
                            </TextDiv>
                            <OneImageDiv
                                width='50%'
                            >
                                <Image 
                                    large='500px'
                                    medium
                                    small
                                    src={TeamMember} 
                                    alt="Membro do time"
                                />
                            </OneImageDiv>
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
    constructor(txtElement, words, wait = 300) {
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
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

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
function init() {
    const txtElement = document.querySelector('.txt');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}