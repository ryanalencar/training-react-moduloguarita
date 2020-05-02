import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "./inputs.css";
import {
  LoginBox,
  LoginHeader,
  LoginHeaderTitle,
  LoginHeaderSubTitle,
  LoginIcon,
  LoginSign,
  LoginContent,
} from "./style.ts";

export default function Login() {
  return (
    <LoginBox>
      <LoginHeader>
        <LoginIcon
          src={logo}
          alt="logo avatar soluções"
          style={{ width: 200, height: 120, textAlign: "center" }}
        />
        <LoginHeaderTitle>Log in</LoginHeaderTitle>
        <LoginHeaderSubTitle>
          Não possui uma conta?
          <Link to="/signup">
            <LoginSign>Cadastre-se</LoginSign>
          </Link>
        </LoginHeaderSubTitle>
      </LoginHeader>
      <LoginContent className="login-content">
        <input
          type="mail"
          className="login-mail"
          placeholder="Endereço de email"
        />
        <input type="password" className="login-pass" placeholder="Senha" />
        <Link to="/recover" className="login-forgot">
          Esqueceu a senha?
        </Link>
        <Link to="/home">
          <button className="login-enter">Entrar</button>
        </Link>
      </LoginContent>
    </LoginBox>
  );
}
