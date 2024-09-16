import { DivMec } from "../../styled";
 
export default function Login(){
 
  return(
 
    <DivMec>
 
      <h1><b>SAFE DRIVE</b></h1>
 
          <label htmlFor="idLogin">Login</label>
          <input type="text" className="login" id="idLogin" />
 
          <label htmlFor="idSenha">Senha</label>
          <input type="password" className="senha" id="isSenha" /*maxlength="6"*/ />
          <br />
 
          <button className="BotaoEntrar" onClick={()=> alert (' Acessando o portal da SafeDrive ')}> Acessar SafeDrive </button>   <button
          className="BotaoRecuperaSenha" onClick={()=> alert (' Reset da senha enviado para o e-mail cadastrado ')}> Recuperar Senha </button>
 
 
    </DivMec>
  )
}