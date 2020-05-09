import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container, Brand } from './styles.ts';

export default function Header(props) {
  const { toggleTheme } = props;
  const { colors, title } = useContext(ThemeContext);
  return (
    <>
      <Container>
        <Brand>Domus Training</Brand>

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={12}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor="#A2D3C2"
        />
      </Container>
    </>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.string,
};

Header.defaultProps = {
  toggleTheme: null,
};
