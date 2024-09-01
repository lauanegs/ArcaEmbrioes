// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import './Home.css'; // Importar o CSS específico para a Home
import incubadoraImg from '../assets/incubadora.jpg'; // Verifique o caminho do arquivo
import vitrificacaoImg from '../assets/vitrificacao.jpg';
import parceriasImg from '../assets/parcerias.jpg';
import { FaFlask, FaSyringe, FaTransgender, FaSeedling, FaHeartbeat, FaLeaf, FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="services">
        <h2>O que nós fazemos</h2>
        <p className="services-subtitle">A Arca Embriões permite acelerar o melhoramento genético de seus parceiros por meio da técnica de fertilização in vitro em bovinos!</p>
        <div className="card-container">
          <div className="card">
            <FaFlask size={40} color="#1A154B" />
            <h3>Produção in vitro</h3>
          </div>
          <div className="card">
            <FaSyringe size={40} color="#1A154B" />
            <h3>Aspiração folicular</h3>
          </div>
          <div className="card">
            <FaTransgender size={40} color="#1A154B" />
            <h3>Transferência de embriões</h3>
          </div>
        </div>
      </section>
      <section className="structure">
        <h2>A melhor estrutura</h2>
        <p className="structure-subtitle">Contamos com equipamentos modernos, em um local totalmente esterilizado permitindo os melhores resultados</p>
        <div className="structure-card-container">
          <div className="structure-card">
            <img src={incubadoraImg} alt="Incubadora" />
            <h3>Incubadora</h3>
          </div>
          <div className="structure-card">
            <img src={vitrificacaoImg} alt="Vitrificação" />
            <h3>Vitrificação</h3>
          </div>
          <div className="structure-card">
            <img src={parceriasImg} alt="Parcerias" />
            <h3>Parcerias</h3>
          </div>
        </div>
      </section>
      <section className="contact-banner">
        <h2>Ainda com dúvidas?</h2>
        <p>Nos envie um e-mail!</p>
        <div className="contact-buttons">
          <a href="#saiba-mais" className="btn">Saiba Mais</a>
          <a href="#contato" className="btn">Entre em Contato</a>
        </div>
      </section>
      <section className="advantages">
        <h2>Descubra as vantagens de trabalhar conosco</h2>
        <p className="advantages-subtitle">Somos uma empresa especializada na produção in vitro de embriões bovinos, uma biotecnologia da reprodução que vem revolucionando o setor, permitindo um rápido crescimento da produtividade do rebanho, levando genética de alto nível a todos os produtores, independentemente do tamanho.</p>
        <div className="advantages-container">
          <div className="advantage-row">
            <div className="advantage-item">
              <FaSeedling size={40} color="#1A154B" />
              <div className="advantage-text">
                <h3>Vantagem 1</h3>
                <p>Descrição da vantagem 1.</p>
              </div>
            </div>
            <div className="advantage-item">
              <FaHeartbeat size={40} color="#1A154B" />
              <div className="advantage-text">
                <h3>Vantagem 2</h3>
                <p>Descrição da vantagem 2.</p>
              </div>
            </div>
          </div>
          <div className="advantages-row">
            <div className="advantage-item">
              <FaLeaf size={40} color="#1A154B" />
              <div className="advantage-text">
                <h3>Vantagem 3</h3>
                <p>Descrição da vantagem 3.</p>
              </div>
            </div>
            <div className="advantage-item">
              <FaStar size={40} color="#1A154B" />
              <div className="advantage-text">
                <h3>Vantagem 4</h3>
                <p>Descrição da vantagem 4.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <h2>Nosso orgulho</h2>
        <p className="pride-subtitle">Somos gratos a todos que estão conosco nessa jornada. O crescimento da empresa é fruto de um trabalho conjunto, nosso e dos parceiros que nos escolhem como prestadora de serviço.</p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/l6vLJ1s_jMg?si=lHipar_6paSCJKLq" 
            title="Vídeo de apresentação"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;
