import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Consulta from './pages/consultarPet'
import Cadastro from './pages/cadastrarPet'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/cadastrar' element={<Cadastro/>}/>
        <Route path='/consultar' element={<Consulta/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

