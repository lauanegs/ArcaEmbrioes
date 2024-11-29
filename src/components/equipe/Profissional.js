import React from 'react';
import Prof1 from '../../assets/prof1.jpeg';
import Prof2 from '../../assets/prof2.jpeg';
import Prof3 from '../../assets/prof3.jpeg';
import Prof4 from '../../assets/prof4.jpeg';
import Prof5 from '../../assets/prof5.jpeg';
import Prof6 from '../../assets/prof6.jpeg';
import Prof7 from '../../assets/prof7.jpeg';

import './Profissional.css';

const Profissional = () => {
  return (
    <section className="profissional">
      <h2>A melhor equipe</h2>
      <p className="profissional-subtitle">Contamos com profissionais altamente qualificados!</p>
      <div className="profissional-card-container">
        <div className="profissional-card">
          <img src={Prof1} alt="Incubadora" />
          <h3>Thaciana Ribeiro</h3>
          <p className="profissional-description">Sócia proprietária - Responsável técnica laboratório de embriões</p>
        </div>
        <div className="profissional-card">
          <img src={Prof2} alt="Vitrificação" />
          <h3>Stephanie Cooke</h3>
          <p className="profissional-description">Sócia proprietária - Gerente Administrativa</p>
        </div>
        <div className="profissional-card">
          <img src={Prof3} alt="Parcerias" />
          <h3>Neumar Borges</h3>
          <p className="profissional-description">Médico Veterinário</p>
        </div>
      </div>
      <div className="profissional-card-container">
        <div className="profissional-card">
          <img src={Prof4} alt="Incubadora" />
          <h3>Thiago Valadares</h3>
          <p className="profissional-description">Médico Veterinário</p>
        </div>
        <div className="profissional-card">
          <img src={Prof5} alt="Vitrificação" />
          <h3>Fabiana Silvério</h3>
          <p className="profissional-description">Técnica de laboratório</p>
        </div>
        <div className="profissional-card">
          <img src={Prof6} alt="Parcerias" />
          <h3>Luísa Miranda</h3>
          <p className="profissional-description">Técnica de laboratório</p>
        </div>
        <div className="profissional-card">
          <img src={Prof7} alt="Parcerias" />
          <h3>André Andrade</h3>
          <p className="profissional-description">Gerente Comercial</p>
        </div>
      </div>
    </section>
  );
}

export default Profissional;
