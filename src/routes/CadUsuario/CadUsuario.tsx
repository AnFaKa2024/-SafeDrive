import CabecalhoGeral from "../../components/CabecalhoGeral";
import RodapeCad from "../../Components/RodapeCad";
import DadosCondutor from "./DadosCondutor";
import DadosPessoais from "./DadosPessoais";
import ObsUser from "./ObsUser";


export default function CadUsuario(){

  return(
    <>

      <head>
        <title>SAFE DRIVE - CADASTRO USUÁRIO</title>
      </head>   

       <CabecalhoGeral/> 
      
      <form action="cadastro cliente" method="get">
        <DadosPessoais/>
        <DadosCondutor/>
        <ObsUser/>
      </form>
      <RodapeCad/>
       
   
    </>
  )
}