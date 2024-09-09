import React from 'react';
import { FaSeedling, FaHeartbeat, FaLeaf, FaStar } from 'react-icons/fa';
import './Advantages.css';

const Advantages = () => {
  return (
    <section className="advantages">
      <h2>Descubra as vantagens de trabalhar conosco</h2>
      <p className="advantages-subtitle">Somos uma empresa especializada na produção in vitro de embriões bovinos, uma biotecnologia da reprodução que vem revolucionando o setor, permitindo um rápido crescimento da produtividade do rebanho, levando genética de alto nível a todos os produtores, independentemente do tamanho.</p>
      <div className="advantages-container">
        <div className="advantage-row">
          <div className="advantage-item">
            <FaSeedling size={40} color="#ffff" />
            <div className="advantage-text">
              <h3>Vantagem 1</h3>
              <p>Descrição da vantagem 1.</p>
            </div>
          </div>
          <div className="advantage-item">
            <FaHeartbeat size={40} color="#ffff" />
            <div className="advantage-text">
              <h3>Vantagem 2</h3>
              <p>Descrição da vantagem 2.</p>
            </div>
          </div>
        </div>
        <div className="advantages-row">
          <div className="advantage-item">
            <FaLeaf size={40} color="#ffff" />
            <div className="advantage-text">
              <h3>Vantagem 3</h3>
              <p>Descrição da vantagem 3.</p>
            </div>
          </div>
          <div className="advantage-item">
            <FaStar size={40} color="#ffff" />
            <div className="advantage-text">
              <h3>Vantagem 4</h3>
              <p>Descrição da vantagem 4.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
