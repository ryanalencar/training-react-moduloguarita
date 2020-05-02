import styled, { keyframes } from 'styled-components';

export const Container = styled.body`
    height: 100%;
    background-color: #f0f0f0;
    color: black;
    font-size: 100%;
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
    overflow-y: hidden;
`;


export const Button = styled.button`
    background-color: #1A2F3A;
    font-weight: 300;
    color: white;
    font-size: 1.2em;
    text-decoration: none;
    border: 1px solid #efefef;
    padding: .5em;
    border-radius: 3px;
    float: left;
    margin: 2em 0 0 -155px;
    left: 50%;
    position: relative;
    transition: all .3s linear;
    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
`;

export const Text = styled.p`
    font-size: 2em;
    text-align: center;
    font-weight: 300;
    margin: 0;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 8em;
    font-weight: 100;
    margin: 0;
`;

export const Logo = styled.div`
    width: 500px;
    margin: 20px auto;
    margin-bottom: 0;
    margin-top: 50px;
    pointer-events: none;
    background-color: transparent;
    animation: App-logo-fadeInOut infinite 3s ease-in-out;
`
export const AppLogoFadeInOut = keyframes`
    0% { opacity: 0.1; }
    25% { opacity: 0.5; }
    50% { opacity: 1; }
    75% { opacity: 0.5; }
    100% { opacity: 0.1; }
`;