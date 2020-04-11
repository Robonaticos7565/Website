import styled from 'styled-components';
import devices from '../../res/device';

import {
    CompDesc,
} from '../Text';

interface ContainerProps {
    active?: boolean;
}

interface ImgContainerProps {
    width?: string;
    active?: boolean;
}

interface CompImgContentProps {
    src?: string;
}

export const Container = styled.div<ContainerProps>`
    width: 90%;
    height: 600px;
    position: absolute;
    top: 50%;
    left: ${({ active }) => active ? '50%' : 0} ;
    transform: ${({ active }) => !active ? 'translate(calc(90% + 20px), -50%);' : 'translate(-40%, -50%);'};
    background: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    box-shadow: 0 0 20px 5px rgba(0,0,0,.15);
    overflow: hidden;
    transition: all .5s;

    @media ${devices.laptop} {
        /* position: ${({ active }) => active ? 'absolute' : 'relative'}; */
        position: relative;
        width: ${({ active }) => active ? '100%' : 'auto'};
        height: ${({ active }) => active ? '950px' : '600px'};
        top: 0;
        left: 0;
        transform: translate(0, 0);
        border-radius: 16px;
    }
`;

export const Content = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .5s;

    @media ${devices.laptop}{
        flex-direction: column
    }
`;

export const NavBar = styled.div<ContainerProps>`
    width: 20%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    transition: all .5s;

    @media ${devices.laptop} {
        width: ${({ active }) => active ? '100%' : '250px'};
        /* width: 100%;
        padding: 30px; */
        height: ${({ active }) => active ? '90px' : '100%'};
    }
`;

export const ImgContainer = styled.div<ImgContainerProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all .5s;
    /* filter: grayscale(100%); */

    .imgContent {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
            width: 100%;
            height: auto;
        }
    }

    @media ${devices.laptop} {
        flex-direction: ${({ active }) => active ? 'row' : 'column'};

        .imgContent {
            img{
                width: ${({ active }) => active ? '80px' : 'auto'};
            }
        }
    }

`;

export const ExitContent = styled.div`
    width: 100%;
    height: 100%;
`;

export const Exit = styled.div<ContainerProps>`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 30px;
    height: 30px;
    opacity: ${({ active }) => active ? 1 : 0};
    cursor: pointer;
    transition: 1s;

    ${ExitContent} {
        &:after,
        &:before {
            content: '';
            width: 100%;
            height: 2px;
            position: absolute;
            top: 50%;
            left: 0;
            background: ${({ theme }) => theme.colors.secondary};
        }

        &:before {
            transform: rotate(45deg)
        }

        &:after {
            transform: rotate(-45deg)
        }
    }
`;

export const Comp = styled.div<ContainerProps>`
    width: 80%;
    height: 100%;
    padding: 20px 30px 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-left: 8px solid ${({ color, theme }) => color || theme.colors.primary};
    
    @media ${devices.laptop} {
        display: ${({ active }) => active ? 'block' : 'none'};
        border-left: none;
        border-top: 4px solid ${({ color, theme }) => color || theme.colors.primary};
        width: 100%;
        height: calc(100% - 90px);
        padding: 20px 0 0 0;
    }
`;

export const CompText = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${devices.laptop} {
        height: 27%;
    }
`;

export const CompImgContent = styled.div<CompImgContentProps>`
    position: absolute;
    bottom: -90px;
    right: -90px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: url(${({ src }) => src}) left center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%);

    @media ${devices.laptop} {
        width: 100%;
        height: auto;
        border-radius: 0;
        position: relative;
        bottom: 0;
        right: 0;
    }
`;

export const CompImg = styled.div`
    position: relative;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    @media ${devices.laptop} {
        width: 100%;
        height: 40%;
    }
`;

export const CompNumbersContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CompNumbers = styled.div`
    position: relative;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media ${devices.laptop} {
        width: 100%;
        height: 30%;
    }
`;

export const CompData = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${devices.laptop} {
        margin-top: 40px;
        flex-direction: column;
        height: 73%;
        justify-content: space-around;
    }
`;
