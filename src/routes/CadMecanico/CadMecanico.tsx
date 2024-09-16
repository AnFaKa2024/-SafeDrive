
import CabecalhoGeral from "../../components/CabecalhoGeral";
import RodapeCad from "../../Components/RodapeCad";
import CadMeca from "./CadMeca";
import CadOficina from "./CadOficina";



export default function CadMecanico(){

  return(

    <>
    <CabecalhoGeral/>
    <h1>Seja um de nossos parceiros</h1>
    <form action="cadastro mecanico e oficina" method="get">
      <CadMeca/>
      <CadOficina/>
    </form>
    <RodapeCad/>
    </>
    
    )
}