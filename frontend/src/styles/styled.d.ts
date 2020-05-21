import 'styled-components';

// declare module '*.ttf' {
//     const src: string;
//     export default src;
// };

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,

            background: string,
            font: string,
        }
    }
};
