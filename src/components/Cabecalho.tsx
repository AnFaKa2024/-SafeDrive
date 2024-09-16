import { HeaderCabecalho } from "../styled";


export default function Cabecalho() {
  
  return (
    <HeaderCabecalho>
      
      {/*  CABEÇALHO GERAL */}
        <h1 >SafeDrive</h1>
        
        <img src= '/LG_SafeDrive.png' className="logo"  alt="Logo SafeDrive" />
        
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
      
    </HeaderCabecalho>
  );
};