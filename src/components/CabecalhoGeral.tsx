import { DivCabGeral } from "../styled";
import {Link} from 'react-router-dom'

export default function CabecalhoGeral(){
  
  <>
   
    <DivCabGeral>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/safedrive'>SafeDrive</Link>
        <Link to='/cliente'>Clientes</Link>
        <Link to='/recomendacao'>Recomendações</Link>
      </nav>
    </DivCabGeral>
    </>


}