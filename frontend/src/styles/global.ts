import { createGlobalStyle } from 'styled-components';

// import * as Roboto from '../assets/fonts/Roboto/Roboto-Bold.ttf'

export default createGlobalStyle`

    /* @font-face {
        font-family: 'Roboto Bold';
        src: local('Roboto'), local('Roboto'), url('../assets/fonts/Roboto/Roboto-Bold.ttf') format('ttf'),
        src: url('../assets/fonts/Roboto/Roboto-Bold.ttf'); 
    } */

    :root {
        font-size: 16px;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-family: 'Roboto Bold', Arial, sans-serif;
        background: ${props => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;