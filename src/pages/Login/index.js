import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

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
  // eslint-disable-next-line no-console
  const handleSubmit = (values) => {
    axios.post();
  };

  const validations = yup.object().shape({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Preencha o campo de e-mail"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .max(16, "A senha deve ter no máximo 16 caracteres")
      .required("Preencha o campo de senha"),
  });

  return (
    <Formik
      initialValues={{}}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      <Form>
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
            <ErrorMessage
              component="span"
              name="email"
              className="login-error"
            />
            <Field
              type="mail"
              name="email"
              className="login-mail"
              placeholder="Endereço de email"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="login-error"
            />
            <Field
              type="password"
              name="password"
              className="login-pass"
              placeholder="Senha"
            />
            <Link to="/recover" className="login-forgot">
              Esqueceu a senha?
            </Link>
            {/* <Link to="/home"> */}
            <button className="login-enter" type="submit">
              Entrar
            </button>
            {/* </Link> */}
          </LoginContent>
        </LoginBox>
      </Form>
    </Formik>
  );
}
