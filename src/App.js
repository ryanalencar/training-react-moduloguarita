<<<<<<< HEAD
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import darklogo from './assets/darklogo.svg';
import lightlogo from './assets/logo.png';

import light from './assets/styles/themes/light.ts';
import dark from './assets/styles/themes/dark.ts';

import GlobalStyle from './assets/styles/global.ts';
import Header from './components/Header';
import PageHome from './pages/Home';
=======
import React from 'react';
// import PageHome from './pages/Home';
import Home2 from './pages/Home2';
>>>>>>> 9802e06b247dd94aaf7d4448daac3ce2aa4c066d

import './assets/styles/App.css';

function App() {
<<<<<<< HEAD
  const [theme, setTheme] = usePersistedState('theme', light);
  const [logo, setLogo] = usePersistedState('logo', darklogo);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    setLogo(theme.title === 'light' ? lightlogo : darklogo);
  };

  return (
    <>
      {/* <img alt="" srcSet={logo} /> */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <PageHome logo={logo} />
      </ThemeProvider>
    </>
  );
=======
  return <Home2 />;
>>>>>>> 9802e06b247dd94aaf7d4448daac3ce2aa4c066d
}

export default App;
