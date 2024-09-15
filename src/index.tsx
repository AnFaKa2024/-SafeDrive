import React from "react";

 function Index() {
  return (
    <header>
        <h1><b>Olá, como podemos te ajudar?</b></h1>
        <div className="Logo">
          <img src="" alt="LogoPorto" />
        </div>
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
        <div className="login">
          <li>
            <a href="/Paginas/login.html">
              <img src="" alt="IconeCliente" />
            </a>
          </li>
        </div>
      </header>

      <main>
        <div className="container2">
          <section className="sec1">
            CADASTRO
            <div className="cliente">
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
          </section>
          <section className="sec2">
            RELATAR PROBLEMA OU ACIDENTE
            <div className="problema">
              <img src=""" />
            </div>
          </section>
          <section className="sec3">
            CADASTRO DE VEÍCULO
            <div className="registro">
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
          </section>
          <section className="sec4">
            HISTÓRICO DO VEÍCULO
            <div className="historico">
              <img src="" alt="" />
            </div>
          </section>
          <section className="sec5">
            DIAGNÓSTICO
            <div className="diagnostico">
              <img src="" alt="" />
            </div>
          </section>
          <section className="sec6">
            RECLAMAÇÕES
            <div className="reclamacao">
              <img src="" alt="" />
            </div>
          </section>
        </div>
      </main>

      <footer>
        <h2>FALE CONOSCO ATRAVÉS DO NOSSO ASSISTENTE</h2>
        <div className="assitente">
          <img src="" alt="" />
        </div>
      </footer>
  
  );
  
  
}

export default function index()