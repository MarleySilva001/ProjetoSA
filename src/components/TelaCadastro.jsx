import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function TelaCadastro(){
    const Navigate= useNavigate();
    const handleClick = () => {
      Navigate('/Home');
    };
   
    return(
        <>
        <div id="login">
        
          <div class="login-box">
            <form>
              <div class="user-box">
                <input type="text" name="" required=""  />
                <label>Nome</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required=""  />
                <label>Email</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required=""  />
                <label>Telefone</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required=""  />
                <label>Nome de usuário</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required=""  />
                <label>Senha</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required=""  />
                <label>Confirmar a Senha</label>
              </div>
              </form>
          </div>
      </div>
      

<div className="centro">
      <button onClick={handleClick} className="boton-elegante"> Clique aqui </button >
 </div>
 <div className="centro">
      <footer>
      <p className="sac1">Informações sobre SAC  <img className="sac" src="sac.png" /></p> 
      </footer>
  </div>
        </>
    )
} 