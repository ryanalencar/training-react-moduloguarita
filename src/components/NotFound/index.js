import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/darklogo.svg";
import { Container, Button, Text, Title, Logo } from "./style.ts";

const NotFound = () => {
  return (
    <Container>
      <Logo>
        <img
          src={logo}
          alt="Logo Avatar Soluções"
          style={{ width: 500, height: 120, textAlign: "center" }}
        />
      </Logo>
      <Title>404 Not Found</Title>
      <Text>Oops! Desculpe pelo incômodo.</Text>
      <Text>Página não encontrada.</Text>
      <Link to="/">
        <Button>Volte para a página inicial, é melhor!.</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
