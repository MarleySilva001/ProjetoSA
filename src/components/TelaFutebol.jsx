export default function TelaFutebol() {
    return (
        <>
            <div className="tudo1">
                <div class="dropdown">
                    <button class="dropbtn"><img id="foto2" src="lista.png" /></button>
                    <div class="dropdown-content">
                        <a href="/Home">Home</a>
                        <a href="/Esportes">Esportes</a>
                        <hr />
                        <a href="/Perfil">Perfil</a>
                        <a href="/Configuracoes">Configurações</a>
                        <a href="/Relatorio">Relatorios</a>
                    </div>
                </div>
                <div className="botoesFut">
                    <div className="grupo">
                        <img className='basqueteFoto1' src="JOGADOR.png" />
                        <img className='basqueteFoto1' src="CALENDARIO.png" />
                    </div>
                    <div className="grupo">
                        <img className='basqueteFoto1' src="TIMES.png" />
                        <img className='basqueteFoto1' src="MIDIA.png" />
                    </div>
                </div>

                <div className="compdiv">
                    <img className="compFoto" src="comp.png" alt="" />
                </div>
            </div>
        </>
    )
}