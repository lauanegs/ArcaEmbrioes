import React from 'react';
import Profi from '../../assets/profissional.jpg';
import './Profissional.css';

const Profissional = () => {
  return (
    <section className="profissional">
      <h2>A melhor equipe</h2>
      <p className="profissional-subtitle">Contamos com profissionais altamente qualificados!</p>
      <div className="profissional-card-container">
        <div className="profissional-card">
          <img src={Profi} alt="Incubadora" />
          <h3>Profissional</h3>
          <p className="profissional-description">Formado em Medicina Veterinária.</p>
        </div>
        <div className="profissional-card">
          <img src={Profi} alt="Vitrificação" />
          <h3>Profissional</h3>
          <p className="profissional-description">Formado em Medicina Veterinária.</p>
        </div>
        <div className="profissional-card">
          <img src={Profi} alt="Parcerias" />
          <h3>Profissional</h3>
          <p className="profissional-description">Formado em Medicina Veterinária.</p>
        </div>
      </div>
      <div className="profissional-card-container">
        <div className="profissional-card">
          <img src={Profi} alt="Incubadora" />
          <h3>Profissional</h3>
          <p className="profissional-description">Formado em Medicina Veterinária.</p>
        </div>
        <div className="profissional-card">
          <img src={Profi} alt="Vitrificação" />
          <h3>Profissional</h3>
          <p className="profissional-description">Formado em Medicina Veterinária.</p>
        </div>
        <div className="profissional-card">
          <img src={Profi} alt="Parcerias" />
          <h3>Profissional</h3>
          <p className="profissional-description">Formado em Medicina Veterinária.</p>
        </div>
      </div>
    </section>
  );
}

export default Profissional;
