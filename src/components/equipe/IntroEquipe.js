import React from 'react';
import logoImg from '../../assets/equipamento.jpg';
import './IntroEquipe.css';

const IntroEquipe = () => {
  return (
    <section className="intro-banner">
      <div className="intro-image">
        <img src={logoImg} alt="Logo" />
      </div>
      <div className="intro-text">
        <h1>Temos profissionais incríveis para te auxiliar</h1>
        <p>Estamos sempre empenhados em fornecer o melhor atendimento a você. </p>
      </div>
    </section>
  );
}

export default IntroEquipe;
