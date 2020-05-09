import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/NavItem.css';

export default function Header(props) {
  const { href, label } = props;
  return (
    <Link to={href} className="app-navitem">
      {label}
    </Link>
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
