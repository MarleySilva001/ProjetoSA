import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TelaPerfil() {

  return (
    <>
      <nav className="navbar">
        <div class="dropdown">
          <button class="dropbtn7"><img id="foto2" src="lista.png" /></button>
          <div class="dropdown-content">
            <a href="/Home">Home</a>
            <a href="/Esportes">Esportes</a>
            <a href="/Noticias">Noticias</a>
            <hr />
            <a href="/Configuracoes">Configurações</a>
            <a href="Relatorio">Relatorios</a>
          </div>
        </div>
      </nav>
      <div className='centro-perfil'>
        <div className="perfil">
          <div className='section'>
            <div className="foto-perfil">
              <img src="gargamel.png" alt="Foto do perfil" />
            </div>
            <div className="nome-usuario">
              <h1>Gargamel_Kalil_056</h1>
            </div>
          </div>
          <div className="favoritos">
            <h2>Favoritos</h2>
            <div className='section2'>
              <div className='fav'>
                <img className='favimg' src="Flamengo.png" alt="flamengo" />
                <p>Flamengo</p>
              </div>
              <div className='fav'>
                <img className='favimg' src="RealMadrid.png" alt="real madrid" />
                <p>Real Madrid</p>
              </div>
              <div className='fav'>
                <img className='favimg' src="Brasil.png" alt="brasil" />
                <p>Brasil</p>
              </div>
            </div>
          </div>

          <div className="seu-relatorio">
            <h3>Sobre mim</h3>
            <p>Olá me chamo Caliu, torcedor raiz do Real madrid e adoro esportes como o remo e clash royale.</p>
          </div>
        </div>
      </div>
    </>
  );
}