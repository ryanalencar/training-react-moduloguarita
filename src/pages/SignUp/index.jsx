import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

import logo from "../../assets/logo.svg";
import "../Login/inputs.css";
import {
  LoginBox,
  LoginHeader,
  LoginHeaderTitle,
  LoginHeaderSubTitle,
  LoginIcon,
  LoginSign,
  LoginContent,
} from "../Login/style.ts";

export default function SignUp() {
  // eslint-disable-next-line no-console
  const handleSubmit = () => {
    axios.post();
  };

  const validateName = (value) => value.replace(/\d/g, "");

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
    name: yup
      .string()
      .max(100, "Digite seu nome verdadeiro")
      .required("Preencha o campo do nome"),
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
            <LoginHeaderTitle>Cadastro</LoginHeaderTitle>
            <LoginHeaderSubTitle>
              Já possui uma conta?
              <Link to="/">
                <LoginSign> Log in</LoginSign>
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
              autocomplete="off"
            />
            <ErrorMessage
              component="span"
              name="name"
              className="login-error"
            />
            <Field
              type="text"
              name="name"
              className="login-mail"
              placeholder="Nome"
              autocomplete="off"
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
              autocomplete="off"
            />
            {/* <Link to="/home"> */}
            <button className="login-enter" type="submit">
              Enviar
            </button>
            {/* </Link> */}
          </LoginContent>
        </LoginBox>
      </Form>
    </Formik>
  );
}
