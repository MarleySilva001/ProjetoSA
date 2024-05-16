import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TelaHome(){
const Navigate= useNavigate();
    const handleClick = () => {
      Navigate('/Perfil');
    };
    const handleClick2 = () => {
        Navigate('/Esportes');
    }
    return (
        <>
        <nav className="navbar">
            <img id="foto2" src="lista.png"/>
            <div>
                <div>
                    <form class="form">
                        <label for="search">
                            <input required="" autocomplete="off" placeholder="Pesquisar" id="search" type="text" />
                            <div class="icon">
                                <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-on">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                                <img src="./lupa.png" id='foto' />
                            </div>
                            <button type="reset" class="close-btn">
                                <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
                                </svg>
                            </button>
                        </label>
                    </form>
                </div>
            </div>
            <div>
                <a href="/Perfil"><img src="imgPerfil.png" id='fotoPerfil' /></a>
            </div>
        </nav>
        <div id='quadrado'>
            <a href="/Esportes"><img src="ESPORTES.png" id='foto-home'/></a>
            <img src="ESPORTES2.png" id='foto-home'/>
        </div>
        </>
        )
        }
    