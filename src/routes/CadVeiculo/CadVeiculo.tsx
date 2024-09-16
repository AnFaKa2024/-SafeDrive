import CabecalhoGeral from "../../components/CabecalhoGeral";
import RodapeCad from "../../Components/RodapeCad";
import DadosVeiculo from "./DadosVeiculo";
import Filtro from "./Filtro";
import Fluido from "./Fluido";
import Historico from "../Historico/Historico";
import Observacao from "../Relatos/Obs";

export default function CadVeiculo() {
  return (
    <>
      <CabecalhoGeral />
      <head>
        <title>SAFE DRIVE - CADASTRO DO VEÍCULO</title>
      </head>

      <header>
        <h1>
          <strong>CADASTRAR O VEÍCULO</strong>
        </h1>
        <p>Preencha os campos com os dados do veículo</p>
      </header>

      <form action="cadastro veiculo" method="get">
        <DadosVeiculo />
        <Filtro />
        <Fluido />
        <Historico />
        <Observacao />
      </form>
      <RodapeCad />
    </>
  );
}
