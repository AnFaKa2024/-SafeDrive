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

      <header>
        <h1><strong>CADASTRAR USUÁRIO</strong></h1>
        <p>link p - HOME</p>
      </header>  
      
      <form action="cadastro cliente" method="get">
        <DadosPessoais/>
        <DadosCondutor/>
        <ObsUser/>
        <RodapeCad/>
      </form>
       
   
    </>
  )
}