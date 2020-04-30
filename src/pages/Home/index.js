import React from 'react';

import { App, AppLogo, AppHeader, AppLink } from './style.ts';

export default function PageHome(props) {
  return (
    <>
      <App>
        <AppHeader>
          <AppLogo alt="logo" src={props.logo} />
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
