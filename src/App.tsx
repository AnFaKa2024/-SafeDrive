import RodapeCad from "./Components/RodapeCad";
import DadosCondutor from "./routes/CadUsuario/DadosCondutor";
import DadosPessoais from "./routes/CadUsuario/DadosPessoais";
import Recomendacao from "./routes/Recomendacao/Recomendacao";
import Recomendacao1 from "./routes/Recomendacao/Recomendacao1";
import Recomendacao2 from "./routes/Recomendacao/Recomendacao2";
import Recomendacao3 from "./routes/Recomendacao/Recomendacao3";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Cliente2 from "./routes/Cliente/Cliente2";
import Cliente3 from "./routes/Cliente/Cliente3";
import Cliente from "./routes/Cliente/Cliente";
import Principal from "./routes/Home/Principal";
import Corpo from "./routes/Home/Corpo";
import Texto from "./routes/SafeDrive/Texto";
import Nos from "./routes/SafeDrive/Nos";
import CabecalhoGeral from "./components/CabecalhoGeral";
import Observacao from "./routes/Relatos/Obs";
import Filtro from "./routes/CadVeiculo/Filtro";
import Fluido from "./routes/CadVeiculo/Fluido";
import Historico from "./routes/Historico/Historico";

function App() {
  return (
    <>
      <Principal />
      <br />
      <Nos />
      <br />
      <CabecalhoGeral />
      <br />
      <Texto />
      <br />
      <Corpo />
      <br />
      <Cabecalho />
      <br />
      <Recomendacao1 />
      <br />
      <Recomendacao2 />
      <br />
      <Recomendacao3 />
      <br />
      <br />
      <Cliente />
      <br />
      <Rodape />
      <br />
      <br />
      <Filtro />
      <br />
      <Fluido />
      <br />
      <Historico />
      <br />
      <Observacao />
      <br />
      <DadosCondutor />
      <br />
      <DadosPessoais />
      <br />
      <RodapeCad />
    </>
  );
}

export default App;
