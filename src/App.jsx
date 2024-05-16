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

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />   
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Esportes" element={<Esportes />} /> 
        <Route path="/Perfil" element={<Perfil />} />      
      </Routes>
    </Router>
  );
}

export default App;



