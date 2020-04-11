import styled from 'styled-components';
import devices from '../../res/device';

/** Interfaces */

interface Props {
    color?: string;
    textAlign?: string;
    lapTextAlign?: string;
}

export const SecH1 = styled.h1`
    font-family: 'Roboto Black', 'Roboto Bold', sans-serif;
    color: ${props => props.theme.colors.secondary};
    font-size: 70px;
    text-transform: uppercase;
    transition: all .8s;

    @media ${devices.laptop} {
        font-size: 65px
    }

    @media ${devices.tablet} {
        font-size: 56px
    }

    @media ${devices.mobileL} {
        font-size:48px
    }  

    @media ${devices.mobileM} {
        font-size: 42px
    }

    @media ${devices.mobileS} {
        font-size: 38px
    }
`;

const DescDef = styled.h2<Props>`
    font-family: 'Roboto Bold';
    color: ${props => props.theme.colors.secondary};
    text-align: ${props => props.textAlign || 'left'};
    word-wrap: wrap;
    margin-bottom: 35px;
    transition: all .8s;

    @media ${devices.laptop} {
        text-align: ${props => props.lapTextAlign || 'center'};
    }
`;

export const Desc = styled(DescDef)`
    font-size: 35px;
    letter-spacing: 0.01em;

    @media ${devices.tablet} {
        font-size: 30px
    }

    @media ${devices.mobileL} {
        font-size: 27px
    }   
`;

export const SubDesc = styled(DescDef)`
    font-size: 30px;

    @media ${devices.laptop} {
        font-size: 25px
    }

    @media ${devices.tablet} {
        font-size: 22px
    }

    @media ${devices.mobileL} {
        font-size: 20px
    }  

    @media ${devices.mobileM} {
        font-size: 18px
    }  
`;

export const CompDesc = styled(DescDef)`
    font-size: 23px;

    @media ${devices.laptop} {
        font-size: 20px
    }

    @media ${devices.tablet} {
        font-size: 18px
    }

    @media ${devices.mobileL} {
        font-size: 16px
    }  

    @media ${devices.mobileM} {
        font-size: 14px
    } 
`;

export const Underline = styled.span<Props>`
    position: relative;
    z-index: 0;
    display: inline!important;
    white-space: nowrap;
    
    font-family: 'Roboto Bold';
    &:after {
        content: "";
        position: absolute;
        bottom: 11%;
        left: 6%;
        z-index: -1;
        width: 95%;
        overflow: hidden;
        height: 40%;
        background-color: ${props => props.color || props.theme.colors.primary};
        transition: .5s;
    }
`;

export const CompNumber = styled.h3<Props>`
    font-family: 'Roboto Black', sans-serif;
    font-size: 70px;
    color: ${({ theme, color }) => color || theme.colors.primary};
    text-align: ${props => props.textAlign || 'left'};
    text-shadow: 3px 2px 0px ${({ theme }) => theme.colors.secondary};
`;