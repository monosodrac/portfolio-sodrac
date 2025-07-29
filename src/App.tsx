import React from 'react';
import Routes from './Router';
import { ToastContainer } from 'react-toastify';

import EstiloGlobal from './styles';

export default function App() {
  return (
    <div>
      <EstiloGlobal />
      <Routes />
      <ToastContainer
        autoClose={5000}
      />
    </div>
  );
};
