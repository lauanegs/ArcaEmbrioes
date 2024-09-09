import React from 'react';
import Profi from '../../assets/profissional.jpg';
import './Profissional.css';

const Profissional = () => {
  return (
    <section className="structure">
      <h2>A melhor equipe</h2>
      <p className="structure-subtitle">Contamos com profissionais altamente qualificados!</p>
      <div className="structure-card-container">
        <div className="structure-card">
          <img src={Profi} alt="Incubadora" />
          <h3>Profissional</h3>
          <p className="structure-description">Formado em Medicina Veterinária.</p>
        </div>
        <div className="structure-card">
          <img src={Profi} alt="Vitrificação" />
          <h3>Profissional</h3>
          <p className="structure-description">Formado em Medicina Veterinária.</p>
        </div>
        <div className="structure-card">
          <img src={Profi} alt="Parcerias" />
          <h3>Profissional</h3>
          <p className="structure-description">Formado em Medicina Veterinária.</p>
        </div>
      </div>
    </section>
  );
}

export default Profissional;
