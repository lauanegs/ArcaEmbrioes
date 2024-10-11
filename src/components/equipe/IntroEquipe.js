import React from 'react';
import logoImg from '../../assets/equipamento.jpg';
import './IntroEquipe.css';

const OutroBanner = () => {
  return (
    <section className="outro-banner">
      <div className="outro-image">
        <img src={logoImg} alt="Logo" />
      </div>
      <div className="outro-text">
        <h1>Temos profissionais incríveis para te auxiliar</h1>
        <p>Estamos sempre empenhados em fornecer o melhor atendimento a você. </p>
      </div>
    </section>
  );
}

export default OutroBanner;
