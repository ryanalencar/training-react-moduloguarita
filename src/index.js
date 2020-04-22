import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';

import { something2 } from './helper/utils';

something2(1, 2);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

export function Teste() {
  return <h1>teste</h1>;
}
