import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body {
        font-family: Roboto Bold, sans-serif;
        background: ${props => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }
`;