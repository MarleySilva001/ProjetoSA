import { useNavigate } from 'react-router-dom';
export default function TelaEsportes() {

    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/Futebol');
    };
    return (
        <>



            <div className='tudo'>
                <div className='dropdown1'>
                    <button class="dropbtn1"><img id="foto2" src="lista.png" /></button>
                    <div class="dropdown-content1">
                        <a href="/Home">Home</a>
                        <a href="/Futebol">Futebol</a>
                        <hr />
                        <a href="/Perfil">Perfil</a>
                        <a href="/Configuracoes">Configurações</a>
                        <a href="/Relatorio">Relatorios</a>
                    </div>
                </div>
                <div className='botoesEsp'>
                    <div className='CE1'>
                        <a href="/Futebol"><img className='basqueteFoto' src="futebol.png" /></a>
                        <a href="/Basquete"><img className='basqueteFoto' src="basquete.png" /></a>
                        <a href="/Voley"><img className='basqueteFoto' src="volei.png" /></a>
                        <a href="/Mma"><img className='basqueteFoto' src="mma.png" /></a>
                    </div>
                    <div className='CE2'>
                        <a href="/Basquete"><img className='basqueteFoto' src="tenis.png" /></a>
                        <a href="/Hoquei"><img className='basqueteFoto' src="hoquei.png" /></a>
                        <a href="/Beisebol"><img className='basqueteFoto' src="beisebol.png" /></a>
                        <a href="/Formula1"><img className='basqueteFoto' src="f1.png" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}