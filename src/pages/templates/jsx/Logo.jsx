import React from "react";
import logo from "../../../assets/logo.svg";
import "../css/Logo.css";

export default function Logo() {
  return (
    <aside className="logo">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </aside>
  );
}
