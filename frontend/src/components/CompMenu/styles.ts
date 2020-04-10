import styled from 'styled-components';
import devices from '../../res/device';

interface ImgContainerProps {
    width?: string;
}

export const Container = styled.div`
    width: 90%;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(calc(90% + 20px), -50%);
    background: ${({theme}) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0 0 20px 5px rgba(0,0,0,.15);

    @media ${devices.laptop} {
        position: relative;
        width:auto;
        top: 0;
        left: 0;
        transform: translate(0, 0);
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavBar = styled.div`
    width: 20%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};

    @media ${devices.laptop} {
        width: 300px;
        height: 100%;
    }
`;

export const ImgContainer = styled.div<ImgContainerProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

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

`;

export const ExitContent = styled.div`
    width: 100%;
    height: 100%;
`;

export const Exit = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 30px;
    height: 30px;
    display: none;
    cursor: pointer;

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



export const Comp = styled.div`
    width: 80%;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    
    @media ${devices.laptop} {
        display: none;
    }
`;
