import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BotaoLogin() {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate('/Login');
  };
  const handleClick2 = () => {
    Navigate('/Cadastro');
  };

  return (
    <>
      <div className='bts'>
        <button onClick={handleClick} className="boton-elegante2"> Login </button >
        <button onClick={handleClick2} className="boton-elegante2">Cadastro</button>
      </div>
      <div className="b">
        <footer>
          <p className="sac1">Informações sobre SAC  <img className="sac" src="sac.png" /></p>
        </footer>
      </div>
    </>
  )
}