import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TelaPerfil () {

  return (
    <>
    <nav className="navbar"><a className="link" href="/Home">Home</a>
    </nav>

    <div className="perfil">
      <div className='section'>
        <div className="foto-perfil">
          <img src="gargamel.png" alt="Foto do perfil" />
        </div>
        <div className="nome-usuario">
          <h1>Gargamel_056</h1>
        </div>
      </div>
      <div className="favoritos">
        <h2>Favoritos</h2>
        <div className='section2'>
         <p>Item 1</p> 
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      </div>

      <div className="seu-relatorio">
        <h2>Sobre mim</h2>
        <p></p>
      </div>
    </div>
    </>
    );  
}