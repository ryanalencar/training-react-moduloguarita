import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px;
`;

export const Brand = styled.h1`
    font-size: 1.5em;
`;