import React from 'react'

export default function TRelatorio() {
    return (
        <>
            <div class="dropdown">
                <button class="dropbtn"><img id="foto2" src="lista.png" /></button>
                <div class="dropdown-content">
                    <a href="/Home">Home</a>
                    <a href="/Esportes">Esportes</a>
                    <a href="/Noticias">Noticias</a>
                    <hr />
                    <a href="/Perfil">Perfil</a>
                    <a href="/Configuracoes">Configurações</a>
                </div>
            </div>
            <div className='relatorioCentro'>
                <h1 className='relatorioTitulo' >Seu Relatorio</h1>
                <div className='relatorioQuadrado'>
                    <div className='relatorioTipo'>
                        <button className='relatorioEsp'>Esportes</button>
                        <button className='relatorioRS' >Rede Social</button>
                    </div>
                    <div className='relatorios'>
                        <div className='relatorioConteudo'>
                            <h2 className='conteudoTitulo' >Times favoritos </h2>
                            <img src="RealMadrid.png" alt="" />
                            <p className='conteudoP'>Real Madrid</p>
                        </div>
                        <div className='relatorioConteudo'>
                        <h2 className='conteudoTitulo' >Competições favoritas </h2>
                            <img src="championsLeague.png" alt="" />
                            <p className='conteudoP'>Champions League</p>
                        </div>
                        <div className='relatorioConteudo'>
                        <h2 className='conteudoTitulo' >Esportes favoritos </h2> 
                            <img src="futebol.png" alt="" />
                            <p className='conteudoP'>Futebol</p>
                        </div>
                        <div className='relatorioConteudo'>
                            <h2 className='conteudoTitulo' >Descobertas</h2>
                            <img src="Ajax.jpg" alt="" />
                            <p className='conteudoP'>Ajax</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
