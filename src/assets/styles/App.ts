import styled, { keyframes } from "styled-components";

export const App = styled.div`
    text-align: center;
`;

export const AppLogo = styled.img`
    height: 40vmin;
    max-height: 120px;
    pointer-events: none;
    animation: App-logo-fadeInOut infinite 3s ease-in-out;
`;

export const AppHeader = styled.header`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
`;

export const AppLink = styled.a`
    color: #0d7ecc;
    text-shadow: rgba(0, 0, 0, 0.5) 0 0 1px;
`;

export const AppLogoFadeInOut = keyframes`
    0% { opacity: 0.1; }
    25% { opacity: 0.5; }
    50% { opacity: 1; }
    75% { opacity: 0.5; }
    100% { opacity: 0.1; }
`;