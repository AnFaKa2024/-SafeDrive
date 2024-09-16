import { HeaderHome } from "../../styled";



export default function Principal(){
  return(

    

    <HeaderHome>
    
        <h1>Olá, seja bem vindo ao SafeDrive</h1>

        <img src= '/LG_SafeDrive.png' className="logo"  alt="Logo SafeDrive" />
        <br />
        <nav className="navegacao">
          <ul>
            <div className="SD">
              <li><a href="">SafeDrive</a></li>
            </div>
            <div className="Cl">
              <li><a href="">Clientes</a></li>
            </div>
            <div className="Rec">
              <li><a href="">Recomendações</a></li>
            </div>
          </ul>
        </nav>
        
        
        {/* esse login deve ficar na pagina HOME */}
        <img src='/icone_cliente_branco2.png' className="login" alt="Ícone Cliente"  />


      </HeaderHome>
    
    
  )

}