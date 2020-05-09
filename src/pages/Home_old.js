import React from 'react';
import logo from '../assets/logo.svg';

export default function PageHome() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>&quot;./src/pages/Home.js&quot;</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/avatarsolucoes/training-react-moduloguarita.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}
