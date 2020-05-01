import React from "react";
import PropTypes from "prop-types";
import "../css/NavItem.css";

export default function Header(props) {
  const { href, label } = props;
  return (
    <a href={href} className="app-navitem">
      {label}
    </a>
  );
}

Header.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
};

Header.defaultProps = {
  href: null,
  label: null,
};
