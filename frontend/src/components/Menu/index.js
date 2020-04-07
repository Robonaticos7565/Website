
import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import colors, { hex2rgb } from '../../res/colors';

import LogoRobonáticos from '../../assets/images/RobonaticosLogo.png'

const NavContainer = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 7rem;
    height: 100vh;
`;
const NavBar = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 -5px 20px rgba(0,0,0,.25);
    background: ${(props) => props.isTop ? 'transparent' : colors.white};
    transition: all .3s;

    img {
        width: 5.5rem;
        margin: 1rem auto auto auto;
    }

    .menuContainer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 50px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .burgerContainer {
            width: 100%;
            padding: 0 5px;
            height: 34px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .burguerLine {
                width: 100%;
                height: 4px;
                border-radius: 2px;
                background-color: ${(props) => props.isTop ? colors.white : colors.gray33};
                transition: all .3s;
                display: ${(props) => !props.active ? 'block' : 'none'};
            }

            .burguerLine.active { background-color: ${colors.gray33}; }

            .burguerLine.active:nth-child(2) {
                background-color: #FF0000
            }
        }

        p {
            font-size: 16px;
            font-family: 'Roboto Medium', sans-serif;
            color: ${(props) => props.isTop ? colors.white : colors.gray33};
            transition: all .3s;
        }

        p.active { color: ${colors.gray33}; }
    }
`;

export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            targetElement: null,
            active: false,
            isTop: true
        };
        this.onScroll = this.onScroll.bind(this);
    };

    componentWillUnmount() {
        clearAllBodyScrollLocks();
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50;
            if (isTop !== this.state.isTop) {
                this.onScroll(isTop);
            }
        });
        this.state.targetElement = document.querySelector('body');
    }

    onScroll(isTop) {
        this.setState({ isTop });
    }

    showTargetElement = () => {
        disableBodyScroll(this.targetElement);
    };

    hideTargetElement = () => {
        enableBodyScroll(this.targetElement);
    }


    render() {
        return (
            <NavContainer >
                <NavBar isTop={this.state.isTop}>
                    <img src={LogoRobonáticos} alt="Robonáricos 7565" />
                    <div
                        className="menuContainer"
                        onClick={() => this.setState({active: !this.state.active})}
                    >
                        <div
                            className="burgerContainer"
                        >
                            <div isTop={this.state.isTop} className={this.state.active ? 'burguerLine active' : 'burguerLine'}></div>
                            <div isTop={this.state.isTop} className={this.state.active ? 'burguerLine active' : 'burguerLine'}></div>
                            <div isTop={this.state.isTop} className={this.state.active ? 'burguerLine active' : 'burguerLine'}></div>
                        </div>
                        <p 
                            isTop={this.state.isTop}
                            className={this.state.active ? 'active' : ''}
                        >menu</p>
                    </div>
                </NavBar>
            </NavContainer>
        );
    }
}