import styled from 'styled-components';
import colors, { hex2rgb } from '../../res/colors';

export const DefButton = styled.button`
    padding: 15px 30px;
    cursor: pointer;
    font-family: 'Roboto Bold';
    font-size: ${props => props.fontSize};
    line-height: calc(100% + 15%) ;
    border-radius: 5px;
    transition: all .3s;

    a {
        color: ${props => props.fontColor || colors.white}
    }

    &:hover {
        opacity: 0.9;
    }
`;

export const Button1 = styled(DefButton)`
    background: ${props => props.color || colors.mainYellow};
    border: none;
    box-shadow: -7px 7px 0px ${props => props.color ? hex2rgb(props.color, 0.5) : hex2rgb(colors.mainYellow, 0.5)};
    color: ${props => props.color || colors.white};
`;

export const Button2 = styled(DefButton)`
    background: transparent;
    color: ${props => props.color || colors.mainYellow};
    border: 1px solid ${props => props.color || colors.mainYellow};
`;