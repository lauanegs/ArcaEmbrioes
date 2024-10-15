import React from 'react';
import { FaFlask, FaSyringe, FaTransgender } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>O que nós fazemos</h2>
      <p className="services-subtitle">A Arca Embriões permite acelerar o melhoramento genético de seus parceiros por meio da técnica de fertilização in vitro em bovinos!</p>
      <div className="card-container">
        <div className="card">
          <FaFlask size={35} color="#1A154B" />
          <p>Aspiração folicular</p>
        </div>
        <div className="card">
          <FaSyringe size={35} color="#1A154B" />
          <p>Produção in vitro de embriões frescos/vitrificados</p>
        </div>
        <div className="card">
          <FaTransgender size={35} color="#1A154B" />
          <p>Transferência de embriões</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
