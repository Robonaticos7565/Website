import React, { Component } from 'react';
import { FiInstagram, FiYoutube, FiFacebook } from 'react-icons/fi'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Link } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

import colors, { hex2rgb } from '../../res/colors';
import devices from '../../res/devices';

import LogoRobonáticos from '../../assets/images/RobonaticosLogo.png'

/** Keyframes */
const fillUp = keyframes`
    0%, 60% { width: 0;
        box-shadow: none }
    100% { width: 100%; }
`;
const opacity = keyframes`
    0%, 50% { opacity: 0 }
    100% { opacity: 1 }
`;
const slideInLogo = keyframes`
    0%, 50% {
        opacity: 0;
        transform: translateX(-100%);
    }
    99% {
        opacity: 1;
        transform: translateX(0);
    }
`;
const slideInBuguer = keyframes`
    0%, 50% {
        opacity: 0;
        transform: translate(-150%, -50%);
    }
    99% {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;
const backFadeOut = keyframes`
    from { background: rgba(0, 0, 0, .23); }
    to { background: rgba(0, 0, 0, 0); }
`;
const backFadeIn = keyframes`
    from { background: rgba(0, 0, 0, 0); }
    to { background: rgba(0, 0, 0, .23); }
`;

/** Styles */
const NavContainer = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 7rem;
    height: 100vh;
    z-index: 1;

    .backOpacity {
        width: 0;
        height: 100%;
        animation: ${backFadeOut} 1s;
        top: 0;
        left: 0;
        position: fixed;
        z-index: -1;
        cursor: pointer;
    }

    .backOpacity.active {
        width: 100vw;
        background: rgba(0, 0, 0, .23);
        animation-delay: 1s;
        animation: ${backFadeIn} 1s;
    }

    @media ${devices.laptop} {
        width: 100%;
        height: 5rem;
    }
`;
const NavBar = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${(props) => !props.isTop ? !props.active ? '0 -5px 20px rgba(0,0,0,.15)' : props.active ? '' : '0 -5px 20px rgba(0,0,0,.15)' : ''};
    background: ${(props) => props.isTop ? props.active ? colors.white : 'transparent' : colors.white};
    transition: all .3s;
    z-index: 2;
    animation: ${fillUp} 1s;

    img {
        width: 5.5rem;
        margin: .5rem auto auto auto;
        transition: all .7s;
        animation: ${slideInLogo} 2s;
    }

    img.active {
        width: 13rem;
        transform: translate(7.5rem)
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
        animation: ${slideInBuguer} 2s;

        .burgerContainer {
            width: 100%;
            padding: 0 5px;
            height: 34px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;

            .burguerLine {
                width: 100%;
                height: 4px;
                background-color: ${(props) => props.isTop ? colors.white : colors.gray33};
                transition: all .3s;
            }

            .burguerLine:nth-child(2) { width: 75%; }

            .burguerLine.active { background-color: ${colors.gray33}; }

            .burguerLine.active:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }

            .burguerLine.active:nth-child(2) {
                transform: translateX(-100%);
                opacity: 0;
                visibility: hidden;
            }

            .burguerLine.active:nth-child(3) {
                transform: rotate(-45deg) translate(9px, -9px);
            }
        }

        p {
            font-size: 16px;
            font-family: 'Roboto Medium', sans-serif;
            color: ${(props) => props.isTop ? colors.white : colors.gray33};
            transition: all .5s;
        }

        p.active { opacity: 0 }
    }

    @media ${devices.laptop} {

        padding: 10px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        img {
            margin: 0;
            animation: ${opacity} 2s;
        }

        img.active { transform: translate(0, 2rem); }
        
        .menuContainer {
            position: relative;
            transform: none;
            top: 0;
            left: 0;
            animation: ${opacity} 2s;
            width: 40px;
            height: 40px;

            .burgerContainer {
                align-items: flex-end;
                height: 32px;

                .burguerLine.active:nth-child(2) { transform: translateX(100%); }
            }

            p { display: none; }
        }
    }

    @media ${devices.tablet} {
        img { width: 5rem; }
        img.active { width: 8rem; }
    }
`;
const NavBox = styled.div`
    width: 650px;
    height: 100%;
    background: ${colors.white};
    position: fixed;
    left: 0;
    top: 0;
    margin-left: 7rem;
    transform: ${(props) => !props.active ? 'translateX(calc(-100% - 7rem))' : 'translateX(0)'};
    transition: all .7s;

    @media ${devices.laptop} {
        margin-left: 0;
        width: 100%;
        height: 100vh
    }
`;
const NavContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    position: relative;

    .navLinks {
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: calc(50% + 20px);
        transform: translate(-50%,-50%);

        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            li {
                text-transform: uppercase;
                text-decoration: none;
                position: relative;
                font-size: 50px;
                cursor: pointer;

                &:before {
                    content: "";
                    position: absolute;
                    bottom: 50%;
                    left: -8px;
                    transform: translateY(50%);
                    z-index: -1;
                    width: 0;
                    overflow: hidden;
                    height: 30%;
                    background-color: ${colors.mainYellow};
                    transition: ease-in-out .3s;
                }

                &:hover:before {
                    width: calc(100% + 20px);
                }

                a {
                    color: ${colors.gray33};
                }
            }
        }
    }

    .socialContainer {
        width: 100%;
        height: auto;
        position: absolute;
        left: 20px;
        bottom: 20px;

        .socialContent {
            width: 100%;
            padding: 10px 0;

            ul {
                width: 100%;
                display: flex;
                justify-content:flex-start;
                align-items: center;

                li{
                    margin-left: 20px;

                    a {
                        color: ${colors.gray33};
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        p {
                            font-family: 'Roboto Medium', sans-serif;
                            font-size: 1.1rem;
                            margin-left: 4px;
                        }
                    }
                }

                li:nth-child(1) {
                    margin-left: 0;
                }
            }
        }
    }

    @media ${devices.tablet} {
        .socialContainer {
            .socialContent {
                width: auto;
                margin-right: auto;

                ul {
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;

                    li { 
                        margin-left: 0; 
                        margin-top: 10px; 
                    }
                }
            }
        }
    }

    @media ${devices.mobileL} {
        .navLinks{
            ul {
                li {
                    font-size: 40px;
                }
            }
        }

        .socialContainer {
            .socialContent {
                ul {
                    li { 
                        p {
                            font-size: 0.9em;
                        }
                    }
                }
            }
        }
    }
    @media ${devices.mobileM} {
        .navLinks{
            ul {
                li {
                    font-size: 35px;
                }
            }
        }
    }
    @media ${devices.mobileS} {
        .navLinks{
            ul {
                li {
                    font-size: 30px;
                }
            }
        }
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
                <div
                    className={this.state.active ? 'backOpacity active' : 'backOpacity'}
                    active={this.state.active}
                    onClick={() => this.setState({ active: !this.state.active })}
                />
                <NavBar
                    active={this.state.active}
                    isTop={this.state.isTop}>
                    <img
                        className={this.state.active ? 'active' : ''}
                        src={LogoRobonáticos}
                        alt="Robonáricos 7565"
                    />
                    <div
                        className="menuContainer"
                        onClick={() => this.setState({ active: !this.state.active })}
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
                <NavBox active={this.state.active}>
                    <NavContent>
                        <nav className="navLinks">
                            <ul>
                                <li><Link to='/about'>sobre</Link></li>
                                <li><Link to='/projects'>projetos</Link></li>
                                <li><Link to='/competitions'>competições</Link></li>
                                <li><Link to='/'>contato</Link></li>
                            </ul>
                        </nav>
                        <div className="socialContainer">
                            <div className="socialContent">
                                <ul>
                                    <li>
                                        <a href="https://www.instagram.com/robonaticos7565/" target="_blank">
                                            <FiInstagram size={20} className="icon" />
                                            <p>@robonaticos7565</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/robonaticos/" target="_blank">
                                            <FiFacebook size={20} className="icon" />
                                            <p>/robonáticos</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.youtube.com/c/Robonáticos7565" target="_blank">
                                            <FiYoutube size={20} className="icon" />
                                            <p>Robonáticos #7565</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </NavContent>
                </NavBox>
            </NavContainer>
        );
    }
}