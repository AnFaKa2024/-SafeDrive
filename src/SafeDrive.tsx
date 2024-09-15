
import React from "react";

export default function AfkPage() {
  return (
    <>
      <header>
        <h1>AFK</h1>
        
        <img className="logo" alt="logopeq" />

        <nav>
          <ul>
            <div className="index">
              <li><a href="/index.html">Menu</a></li>
            </div>
            <div className="Cl">
              <li><a href="/Paginas/clientes.html">Clientes</a></li>
            </div>
            <div className="Rec">
              <li><a href="/Paginas/recomendacoes.html">Recomendações</a></li>
            </div>
          </ul>
        </nav>

        <div className="login">
        
          <a href="/Paginas/login.html">
            <img alt="login" />
          </a>
        </div>
      </header>

      <main>
        <div className="p">
          <p><b>AFK</b> Consultoria em <b>Desenvolvimento de Software</b></p>
        </div>

        <div className="p1">
          <p><strong>Inovação tecnológica</strong> que transcende o digital! Criamos
            software personalizado e robusto, adaptado às suas necessidades de negócios.
          </p>
        </div>

        <div className="p2">
          <p>A AFK é uma empresa formada por três desenvolvedores universitários que estão cursando Análise de Desenvolvimento de Sistemas na FIAP: Antônio, Fernanda e Karen.
            Entre os projetos que desenvolvemos, destaca-se o SafeDrive, um software projetado para identificar possíveis problemas em veículos automotivos e auxiliar o usuário.
            Este projeto, ainda em desenvolvimento, incluirá um site para hospedagem e fará uso de um ChatBot para ajudar os clientes. Além disso, estamos planejando oferecer um plano de assinatura
            que disponibilizará uma IA capaz de diagnosticar defeitos no carro utilizando vídeo, imagem e texto
          </p>
        </div>

        <div className="p3">
          <p> Somos uma empresa de consultoria na área de desenvolvimento de software, atuando no
            mercado desde 2024 com o objetivo principal de ouvir e atender o nosso cliente com agilidade e execelência.
          </p>
        </div>
      </main>

      <section>
        <article>
          <div className="Des">
            <h2>Desenvolvedores</h2>
          </div>
          <div className="Turma">
            <p><b>Turma: 1TDSPI</b></p>
          </div>
          <div className="conteiner2">
            <div className="Antonio">
           
              <img alt="FtoAntonio" />
            </div>
            <div className="Ant">
              <h2><b>Antônio Guilherme</b></h2>
              <h3>RM 555883</h3>
            </div>
            <div className="Fernanda">
            
             
            </div>
            <div className="Fe">
              <h2><b>Fernanda Seda</b></h2>
              <h3>RM 558274</h3>
            </div>
            <div className="Karen">
            
              <img alt="FotoKaren" />
            </div>
            <div className="Ka">
              <h2><b>Karen Marques</b></h2>
              <h3>RM 554556</h3>
            </div>
          </div>
        </article>
      </section>

      <footer>
        <h3><b>Contato: trabalhos12fiap@gmail.com</b></h3>
      </footer>
    </>
  );
}