import styled from 'styled-components';
import { hex2rgb } from '../../styles/colors';

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
    padding: 15px 30px;
    cursor: pointer;
    font-family: 'Roboto Bold';
    font-size: ${props => props.fontSize};
    line-height: calc(100% + 15%) ;
    border-radius: 5px;
    transition: all .3s;

    a {
        color: ${props => props.fontColor || props.theme.colors.background}
    }

    &:hover {
        opacity: 0.9;
    }
`;

export const Button1 = styled(DefButton)`
    background: ${props => props.color || props.theme.colors.primary};
    border: none;
    box-shadow: -7px 7px 0px ${props => props.color ? hex2rgb(props.color, 0.5) : hex2rgb(props.theme.colors.primary, 0.5)};
    color: ${props => props.color || props.theme.colors.background};
`;

export const Button2 = styled(DefButton)`
    background: transparent;
    color: ${props => props.color || props.theme.colors.primary};
    border: 1px solid ${props => props.color || props.theme.colors.primary};
`;