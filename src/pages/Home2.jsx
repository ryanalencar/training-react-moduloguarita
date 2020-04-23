import React from 'react';
import '../assets/styles/App2.css';

import Logo from './templates/jsx/Logo';
import Header from './templates/jsx/Header';
import Main from './templates/jsx/Main';
import Nav from './templates/jsx/Nav';
import Footer from './templates/jsx/Footer';

export default function Home() {
  return (
    <div className="app">
      <Logo />
      <Header title="Início" subtitle="Host de projetos para treinamento" />
      <Main />
      <Nav />
      <Footer />
    </div>
  );
}
