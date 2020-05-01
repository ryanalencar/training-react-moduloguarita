import React from "react";
import NavItem from "./NavItem";
import "../css/Nav.css";

export default function Nav() {
  return (
    <nav className="app-sidebar">
      <NavItem href="/" label="Home" />
      <NavItem href="/chat" label="Chat" />
    </nav>
  );
}
