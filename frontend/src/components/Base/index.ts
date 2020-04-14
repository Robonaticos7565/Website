import styled, { keyframes } from 'styled-components';

import { hex2rgb } from '../../styles/colors';
import devices from '../../res/device';

/** Interfaces */

interface Props {
    src?: string;

    width?: string;
    respWidth?: string;
    height?: string;

    margin?: string;
    respMargin?: string;

    display?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;

    lapFlexDirection?: string;
    lapAlignItems?: string;
    lapJustifyContent?: string;

    tabFlexDirection?: string;
    tabAlignItems?: string;
    tabJustifyContent?: string;

    large?: string;
    medium?: string;
    small?: string;
}

const mouse = keyframes`
    0% {
        opacity: 1;
        top: 10px;
    }
    70% { opacity: 1; }
    100% {
        opacity: 0;
        top: 20px;
    }
`;

export const Window = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background: ${props => props.theme.colors.background};
    transition: all .8s;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 2000px;
    position: relative;
    padding-left: 7rem;
    padding-top: 0;
    margin: 0 auto;
    background: ${props => props.theme.colors.background};
    transition: all .8s;


    @media ${devices.laptop} {
        padding-left: 0;
        padding-top: 5rem;
    }
`;

export const Content = styled.div`
    width: 100%;
    padding: 0 20px;
    background: ${props => props.theme.colors.background};
    transition: all .8s;
    overflow-x: hidden; 
`;

export const BISectionContainer = styled.section<Props>`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(56,56,55,.5),rgba(44,44,43,.397)), url(${(props) => props.src}) 50%;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const BISectionContent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .txtContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .txtContent {
            h1 {
                text-align: center;
                color: ${props => props.theme.colors.font};
                font-family: 'Montserrat Light';
                font-size: 60px;
            }
        }
    }
    
    .mouse{
        width: 40px;
        height: 70px;
        border: 2px solid ${props => props.theme.colors.font};
        border-radius: 25px;
        bottom: 5%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        position: absolute;

        .mouseContent {
            width: 100%;
            height: 100%;
            position: relative;

            &:after {
                content: "";
                position: absolute;
                width: 8px;
                height: 15px;
                border-radius: 5px;
                background-color: ${props => props.theme.colors.font};
                top: 10px;
                left: calc(50% - 4px);
                -webkit-animation: ${mouse} 1.5s infinite;
                animation: ${mouse} 1.5s infinite;
            }
        }
    }  

    @media ${devices.laptop} {
        .txtContainer {
            .txtContent {
                h1 { font-size: 50px; }
            }
        }
        .mouse {
            display: none;
        }
    }

    @media ${devices.tablet} {
        .txtContainer {
            .txtContent {
                h1 { font-size: 37px; }
            }
        }
    }

    @media ${devices.mobileL} {
        .txtContainer {
            .txtContent {
                h1 { font-size: 27px; }
            }
        }
    }

    @media ${devices.mobileS} {
        .txtContainer {
            .txtContent {
                h1 { font-size: 22px; }
            }
        }
    }
`;

export const Mask = styled.div`
    width: 100%;
    height: 100vh;
    z-index: -1;
`;

export const Section = styled.section<Props>`
    width: 100%;
    min-height: 700px;
    padding: 40px;
    position: relative;
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    background: ${props => props.theme.colors.background};
    transition: all .8s;


    @media ${devices.laptop} {
        flex-direction: ${props => props.lapFlexDirection || 'column'};
        justify-content: ${props => props.lapJustifyContent || 'center'};
        align-items: ${props => props.lapAlignItems || 'center'};
    }

    @media ${devices.tablet} {
        flex-direction: ${props => props.tabFlexDirection || 'column'};
        justify-content: ${props => props.tabJustifyContent || 'center'};
        align-items: ${props => props.tabAlignItems || 'center'};
        padding: 40px 0;
    }
`;

const DefDiv = styled.div<Props>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0'};
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};

    @media ${devices.laptop} {
        width: ${props => props.respWidth || '100%'};
        margin: ${props => props.respMargin || '0'};
        flex-direction: ${props => props.lapFlexDirection || 'column'};
        justify-content: ${props => props.lapJustifyContent || 'center'};
        align-items: ${props => props.lapAlignItems || 'center'};
    }
`;

export const OneImageDiv = styled(DefDiv)<Props>`
    margin: ${props => props.margin || '0 0 0 30px'};
`;

export const TextDiv = styled(DefDiv)<Props>``;

export const Image = styled.img<Props>`
    width: ${props => props.large || '100%'};
    margin: ${props => props.margin || '0'};

    @media ${devices.laptop} {
        width: ${props => props.medium || 'auto'};
    }

    @media ${devices.tablet} {
        width: ${props => props.small || 'auto'};
    }
`;