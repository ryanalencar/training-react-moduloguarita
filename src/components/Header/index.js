import React, { useContext } from "react";
<<<<<<< HEAD
=======
import PropTypes from "prop-types";
>>>>>>> 590e82619bae2df9054b2d4fa751d76098a85e5a
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container, Brand } from "./styles.ts";

export default function Header(props) {
  const { toggleTheme } = props;
  const { colors, title } = useContext(ThemeContext);
  return (
    <>
      <Container>
        <Brand>Domus Training</Brand>

        <Switch
<<<<<<< HEAD
          onChange={props.toggleTheme}
=======
          onChange={toggleTheme}
>>>>>>> 590e82619bae2df9054b2d4fa751d76098a85e5a
          checked={title === "dark"}
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
