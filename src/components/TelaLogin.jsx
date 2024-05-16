import { useNavigate } from "react-router-dom";
import { useState } from "react";


function TLogin() {
  let Navigate =  useNavigate()
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const loginteste = 'admin';
  const senhateste = 'admin';
  
  const handleClick = () => {
    if (inputValue === loginteste && inputValue2 === senhateste) {
      Navigate('/Home');
    } else {
      alert('Resposta incorreta. Tente novamente.');
    }
  };
  return (
    <>
      <div>
        <header>
            <img src="logoss.jpg" />
        </header>
          <div class="login-box">
            <form>
              <div class="user-box">
                <input type="text" name="" required="" value={inputValue} id="user" onChange={(e) => setInputValue(e.target.value)} />
                <label>Username</label>
              </div>
                <div class="user-box">
                  <input type="password" name="" required="" value={inputValue2} id="password" onChange={(e) => setInputValue2(e.target.value)} />
                  <label>Password</label>
                </div>
              </form>
          </div>
      </div>
      

<div className="b">
      <button onClick={handleClick} className="boton-elegante"> Clique aqui </button >
 </div>
 <div className="b">
      <footer>
        <p className="sac1">Informações sobre SAC<img className="sac" src="sac.png" /></p> 
      </footer>
  </div>
    </>
    )

} 

export default TLogin