import React from 'react';
import Router from './routes';
import ProvedorAutenticacao from './ProvedorAutenticacao'
import '../custom.css'

function App() {
  return (
    <ProvedorAutenticacao>
      <Router />
    </ProvedorAutenticacao> 
  );
}

export default App;
