import React from 'react';
import logoImg from '../../assets/2021.jpg';
import './IntroBanner.css';

const IntroBanner = () => {
  return (
    <section className="intro-banner">
      <div className="intro-text">
        <h1>A melhor empresa para cuidar do seu material genético!</h1>
        <p>
          Contamos com equipamentos modernos, em um local totalmente esterilizado permitindo os melhores resultados.
        </p>
        <div className="orcamento-container">
          <a href="#orcamento" className="orcamento-btn">Faça um orçamento</a>
        </div>
      </div>
      <div className="intro-image">
        <img src={logoImg} alt="Imagem representativa da empresa" />
      </div>
    </section>
  );
}

export default IntroBanner;
