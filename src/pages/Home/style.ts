import styled, { keyframes } from 'styled-components';

export const App = styled.div`
  text-align: center;
`;

export const AppLogo = styled.img`
  height: 40vmin;
  max-height: 120px;
  pointer-events: none;
  animation: App-logo-fadeInOut infinite 3s ease-in-out;
`;

export const AppLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  text-shadow: rgba(0, 0, 0, 0.5) 0 0 1px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    text-decoration: none;
    color: #204969;
    font-size: 30px;
    text-shadow: 0px -2px 0px #204969, 0 0 5px #204969, 0 -4px 15px #204969;
  }
`;

export const AppHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.colors.text};
`;

export const AppLogoFadeInOut = keyframes`
    0% { opacity: 0.1; }
    25% { opacity: 0.5; }
    50% { opacity: 1; }
    75% { opacity: 0.5; }
    100% { opacity: 0.1; }
`;
