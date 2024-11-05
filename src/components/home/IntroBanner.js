import React from 'react';
import logoImg from '../../assets/vacas.png';
import './IntroBanner.css';

const IntroBanner = () => {
  return (
    <section className="intro-banner">
      <div className="intro-text">
        <h1>A melhor empresa para cuidar do seu material genético!</h1>
        <p>
          Transformando genética em potencial de alta performance.
        </p>
      </div>
      <div className="intro-image">
        <img src={logoImg} alt="Imagem representativa da empresa" />
      </div>
    </section>
  );
}

export default IntroBanner;
