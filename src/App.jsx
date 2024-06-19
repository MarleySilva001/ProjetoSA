import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import Esportes from './pages/Esportes';
import Perfil from './pages/Perfil';
import './styles/Esportes.css'
import './styles/Home.css'
import './styles/Login.css'
import './styles/Perfil.css'
import './styles/Start.css'
import Cadastro from './pages/Cadastro';
import Futebol from './pages/Futebol';
import './styles/Futebol.css'
import './styles/Config.css'
import './styles/Noticias.css'
import './styles/Relatorio.css'
import Configuracoes from './pages/Config';
import Noticias from './pages/Noticias';
import Relatorio from './pages/Relatorio';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />   
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Esportes" element={<Esportes />} /> 
        <Route path="/Perfil" element={<Perfil />} />      
        <Route path="/Cadastro" element={<Cadastro/>} />  
        <Route path="/Futebol" element={<Futebol/>} />  
        <Route path="/Configuracoes" element={<Configuracoes/>} />  
        <Route path="/Noticias" element={<Noticias/>} />
        <Route path="/Relatorio" element={<Relatorio />}/>
        

      </Routes>
    </Router>
  );
}

export default App;



