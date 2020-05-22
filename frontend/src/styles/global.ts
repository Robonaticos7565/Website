import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root { font-size: 16px; }

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

    ul { list-style: none; }

    a { text-decoration: none; }
`;