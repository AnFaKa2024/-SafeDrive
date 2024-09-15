import { Outlet } from "react-router-dom"
import RodapeCad from "./Components/RodapeCad"
import DadosCondutor from "./routes/CadUsuario/DadosCondutor"
import DadosPessoais from "./routes/CadUsuario/DadosPessoais"




function App() {
  

  return (
    <>
      <DadosCondutor/>
      <br />
      <DadosPessoais/>
      <RodapeCad/>
    </>
  )
}

export default App

