export default function TelaConfig() {
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
                    <a href="/Relatorio">Relatorios</a>
                </div>
            </div>
            <div className="container">
                <h1>Configurações</h1>
                <div className="sectionConfig">
                    <div id="quadrado2">
                        <div id="bo2">
                            <img id="img1" src="logoCadeado.png" />

                        </div>
                        <div id="bo1">
                            <p>Dados da conta</p>
                        </div>
                    </div>
                    <div id="quadrado2">
                        <div id="bo2">
                            <img id="img2" src="logoDoc.png" />
                        </div>
                        <div id="bo1">
                            <p>Dados pessoais</p>
                        </div>
                    </div>
                    <div id="quadrado2">
                        <div id="bo2">
                            <img id="img3" src="logoNotf.png" />
                        </div>
                        <div id="bo1">
                            <p>Notificações</p>
                        </div>
                    </div>
                    <div id="quadrado2">
                        <div id="bo2">
                            <img id="img4" src="logoEscudo.png" />
                        </div>
                        <div id="bo1">
                            <p>Segurança</p>
                        </div>
                    </div>
                    <div id="quadrado2">
                        <div id="bo2">
                            <img id="img5" src="logoMic.png" />
                        </div>
                        <div id="bo1">
                            <p>Preferências de anúncios</p>
                        </div>
                    </div>
                    <div id="quadrado2">
                        <div id="bo2">
                            <img id="img6" src="logoInterrog.png" />
                        </div>
                        <div id="bo1">
                            <p>Acessibilidade</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 