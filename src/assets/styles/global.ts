import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(https://fonts.googleapis.com/css2?family=Roboto&display=swap) format('woff2'),
        font-weight: 300;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        font-size: 14px;
        color: ${(props) => props.theme.colors.text};
        font-family: Roboto Regular ,sans-serif;
    }
`;
