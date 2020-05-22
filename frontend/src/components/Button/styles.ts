import styled, { keyframes } from 'styled-components';
import { hex2rgb } from '../../styles/themes/colors';
import devices from '../../res/device';

import { slideInLogo, opacity } from '../Menu/styles';


/** Exemplo 1 */
interface Props{ 
    fontSize?: string,
    fontColor?: any,
}

/** Exemplo 2 */
type PropsType = {
    fontSize?: string,
    fontColor?: string,
}

export const DefButton = styled.button<Props>`
    position: relative;
    padding: 15px 30px;
    cursor: pointer;
    font-family: 'Roboto Bold';
    font-size: ${props => props.fontSize};
    line-height: calc(100% + 15%) ;
    border-radius: 5px;
    transition: all .8s;

    a {
        color: ${props => props.fontColor || props.theme.colors.font}
    }

    &:hover {
        opacity: 0.9;
    }
`;

export const Button1 = styled(DefButton)`
    background: ${props => props.color || props.theme.colors.primary};
    border: none;
    box-shadow: -7px 7px 0px ${props => props.color ? hex2rgb(props.color, 0.5) : hex2rgb(props.theme.colors.primary, 0.5)};
    color: ${props => props.color || props.theme.colors.font};
`;

export const Button2 = styled(DefButton)`
    background: transparent;
    color: ${props => props.color || props.theme.colors.primary};
    border: 1px solid ${props => props.color || props.theme.colors.primary};
    box-sizing: content-box;
    position: relative;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: -5px;
        width: 100%;
        height: 100%;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 5px;
        z-index: 0;
    }
`;

/** Switch Button */

// Animations

const angle = keyframes`
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;

const angleReverse = keyframes`
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;

// Style

export const Toggle = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    animation: ${slideInLogo} 2s;
    z-index: 5;

    .toogleBody {
        width: 3rem;
        height: .7rem;
        position: absolute;
        top: calc(50% - .7rem / 2);
        left: calc(50% - 3rem / 2);
        background: ${props => props.theme.colors.secondary};
        border-radius: 2rem;
        animation: ${angleReverse} .8s cubic-bezier(0.68, -0.15, 0.265, 1.35);
        cursor: pointer;

        .toggleBtn {
            width: 1.65rem;
            height: 1.65rem;
            position: absolute;
            top: calc(50% - 1.65rem / 2);
            left: calc(27% - 1.65rem / 2);
            background: white;
            border-radius: 2rem;
            background: ${props => props.theme.colors.primary};
            cursor: pointer;
            transform: translateX(0);
            transition: .8s cubic-bezier(0.68, -0.15, 0.265, 1.35);
        }

        .toggleBtn.active {
            transition: .8s cubic-bezier(0.68, -0.15, 0.265, 1.35);
            transform:  translateX(100%);
        }
    }

    .toogleBody.active {
        animation: ${angle} .8s cubic-bezier(0.68, -0.15, 0.265, 1.35);
        animation-direction: alternate;
    }

    @media ${devices.laptop} {
        right: 50px;
        bottom: 30px;
        animation: ${opacity} 2s;
    }
`;