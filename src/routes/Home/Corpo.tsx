import { MainCorpo } from "../../styled";


export default function Corpo(){

  return(

    <MainCorpo>
      <div className="container2">
        <section className="sec1">
          CADASTRO
          <div className="cliente">
            <a href="/Paginas/cadastro_usuario.html"
              ><img src="/icone_cliente_preto.png" alt=""
            /></a>
          </div>
        </section>
        <section className="sec2">
          RELATAR PROBLEMA OU ACIDENTE
          <div className="problema"><img src="/problema.png" alt="" /></div>
        </section>
        <section className="sec3">
          CADASTRO DE VEÍCULO
          <div className="registro">
            <a href="/Paginas/cadastro_veiculo.html"
              ><img src="/carro.png" alt=""
            /></a>
          </div>
        </section>
        <section className="sec4">
          HISTÓRICO DO VEÍCULO
          <div className="historico"><img src="/histórico.png" alt="" /></div>
        </section>
        <section className="sec5">
          DIAGNÓSTICO
          <div className="diagnostico">
            <img src="/diagnóstico.png" alt="" />
          </div>
        </section>
        <section className="sec6">
          RECLAMAÇÕES
          <div className="reclamacao">
            <img src="/reclamação.png" alt="" />
          </div>
        </section>
      </div>
    </MainCorpo>



  )


}