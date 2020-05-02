import React from "react";
import PropTypes from "prop-types";
import "../css/Header.css";

export default function Header(props) {
  const { title, subtitle } = props;
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  title: null,
  subtitle: null,
};
