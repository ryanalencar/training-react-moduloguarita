import React from 'react';
import PropTypes from 'prop-types';

import { App, AppLogo, AppHeader, AppLink } from './style.ts';

export default function PageHome(props) {
  const { logo } = props;
  return (
    <>
      <App>
        <AppHeader>
          <AppLogo alt="logo" src={logo} />
          <p>
            Edit <code>&quot;./src/pages/Home/index.js&quot;</code> and save to reload.
          </p>
          <AppLink
            href="https://github.com/avatarsolucoes/training-react-moduloguarita.git"
            target="_blank"
          >
            Github
          </AppLink>
        </AppHeader>
      </App>
    </>
  );
}

PageHome.propTypes = {
  logo: PropTypes.string,
};

PageHome.defaultProps = {
  logo: null,
};
