import React, { useState, Component } from 'react';
import { FiInstagram, FiYoutube, FiFacebook } from 'react-icons/fi'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Link } from 'react-router-dom';

import LogoRobonaticos from '../../assets/images/RobonaticosLogo.png';

import { 
    NavContainer,
    NavBar,
    NavBox,
    NavContent,
} from './styles';

interface Props {
    active?: boolean;
}

interface State {
    targetElement?: any;
    active: boolean;
    isTop: boolean;
}

export class Menu extends Component<Props, State> {

    state: State;

    constructor(props : Props) {
        super(props);

        this.state = {
            targetElement: null,
            active: false,
            isTop: true,
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

    onScroll(isTop: boolean) {
        this.setState({ isTop });
    }

    showTargetElement = () => {
        disableBodyScroll(this.state.targetElement);
    };

    hideTargetElement = () => {
        enableBodyScroll(this.state.targetElement);
    }


    render() {
        return (
            <NavContainer >
                <div
                    className={this.state.active ? 'backOpacity active' : 'backOpacity'}
                    // active={this.state.active}
                    onClick={() => { this.setState({ active: !this.state.active }); !this.state.active ? this.showTargetElement() : this.hideTargetElement() }}
                />
                <NavBar
                    active={this.state.active}
                    isTop={this.state.isTop}>
                    <img
                        className={this.state.active ? 'active' : ''}
                        src={LogoRobonaticos}
                        alt="Robonáricos 7565"
                    />
                    <div
                        className="menuContainer"
                        onClick={() => { this.setState({ active: !this.state.active }); !this.state.active ? this.showTargetElement() : this.hideTargetElement() }}
                    >
                        <div
                            className="burgerContainer"
                        >
                            <div 
                            // isTop={this.state.isTop} 
                            className={this.state.active ? 'burguerLine active' : 'burguerLine'}></div>
                            <div 
                            // isTop={this.state.isTop} 
                            className={this.state.active ? 'burguerLine active' : 'burguerLine'}></div>
                            <div 
                            // isTop={this.state.isTop} 
                            className={this.state.active ? 'burguerLine active' : 'burguerLine'}></div>
                        </div>
                        <p
                            // isTop={this.state.isTop}
                            className={this.state.active ? 'active' : ''}
                        >menu</p>
                    </div>
                </NavBar>
                <NavBox active={this.state.active} >
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