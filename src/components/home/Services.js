import React from 'react';
import { FaFlask, FaSyringe, FaTransgender } from 'react-icons/fa';
import './Services.css';
import icone1 from '../../assets/1.png';
import icone2 from '../../assets/2.png';
import icone3 from '../../assets/3.png';
import icone4 from '../../assets/4.png';

const Services = () => {
  return (
    <section className="services">
      <h2>O que nós fazemos</h2>
      <p className="services-subtitle">Somos especializados na produção de embriões bovinos via fertilização in 
        vitro (FIV), com foco em melhoramento genético e aumento da produtividade. 
        Oferecemos soluções personalizadas para maximizar o potencial do seu rebanho.</p>
      <div className="card-container">
        <div className="card">
          <img src={icone1} />
          <p>Aspiração folicular</p>
        </div>
        <div className="card">
          <img src={icone2} />
          <p>FIV</p>
        </div>
        <div className="card">
          <img src={icone3} />
          <p>Transferência de embriões</p>
        </div>
        <div className="card">
          <img src={icone4} />
          <p>Venda de embriões</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
