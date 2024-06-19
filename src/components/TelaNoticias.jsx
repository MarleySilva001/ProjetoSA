export default function NoticiasPage() {
    return (
        <>
            <div className="notTudo">
                <div class="dropdown">
                    <button class="dropbtn"><img id="foto2" src="lista.png" /></button>
                    <div class="dropdown-content">
                        <a href="/Home">Home</a>
                        <a href="/Esportes">Esportes</a>
                        <hr />
                        <a href="/Perfil">Perfil</a>
                        <a href="/Relatorio">Relatorios</a>
                    </div>
                </div>
                <div>
                    <img src="ESPORTES.png" />
                    <h2>Montes-clarense conquista título na Liga de Basquete Universitário</h2>
                    <p>Competição realizada nos EUA.</p>

                </div>
                <div>
                    <img src="ESPORTES.png" />
                    <h2>Torneio de tênis em Florianópolis</h2>
                    <p>Projeto leva crianças para acompanhar torneio de tênis internacional</p>
                </div>
            </div>
        </>
    )

}