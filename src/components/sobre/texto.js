import React from 'react';
import logoImg from '../../assets/2021.jpg';
import './texto.css';

const OutroBanner = () => {
  return (
    <section className="outro-banner">
      <div className="outro-image">
        <img src={logoImg} alt="Logo" />
        {/* Card removido */}
      </div>
      <div className="outro-text">
        <h1>A melhor empresa para cuidar do seu material genético!</h1>
        <p>Contamos com equipamentos modernos, em um local totalmente esterilizado permitindo os melhores resultados.</p>
      </div>
    </section>
  );
}

export default OutroBanner;
