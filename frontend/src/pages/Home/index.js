import React, { useEffect, Component } from 'react';

/** Components */
import { Window, Container, Content, BISectionContainer, BISectionContent } from '../../components/Base'
import { Title } from '../../components/Text';
import { Menu } from '../../components/Menu';

/** Images */
import Team from '../../assets/images/Team.jpeg';

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