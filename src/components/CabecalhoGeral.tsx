import { DivCabGeral } from "../styled";
import {Link} from 'react-router-dom'

export default function CabecalhoGeral(){
  
  <>
   
    <DivCabGeral>
    <h1 >SafeDrive</h1>
        
        <img src= '/LG_SafeDrive.png' className="logo"  alt="Logo SafeDrive" />
        <nav className="navegacao">
          <ul>
            <div className="Home">
            <li><Link to='/home'>Home</Link></li>
            </div>
            <div className="SD">
              <li><Link to='/home/safedrive'>SafeDrive</Link></li>
            </div>
            <div className="Cl">
              <li><Link to='/home/cliente'>Clientes</Link></li>
            </div>
            <div className="Rec">
              <li><Link to='/home/recomendacao'>Recomendações</Link></li>
            </div>
          </ul>
        </nav>
    </DivCabGeral>
    </>


}