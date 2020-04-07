import styled from 'styled-components';

import colors, { hex2rgb } from '../../res/colors';

export const Window = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1500px;
    padding-left: 7rem;
    margin: 0 auto;
`;

export const Content = styled.div`
    width: 100%;
    padding: 0 30px;
`;

