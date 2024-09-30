import React from 'react';
import incubadoraImg from '../../assets/vidros.jpg';
import './Structure.css';

const Structure = () => {
  return (
    <section className="structure">
      <h2>A melhor estrutura</h2>
      <p className="structure-subtitle">Contamos com equipamentos modernos, em um local totalmente esterilizado permitindo os melhores resultados</p>
      <div className="structure-card-container">
        <div className="structure-card">
          <img src={incubadoraImg} alt="Incubadora" className="structure-card-image" />
          <div className="structure-card-content">
            <h3>Incubadora</h3>
            <p className="structure-description">Nossa incubadora possui tecnologia de ponta para garantir o ambiente ideal para o desenvolvimento dos embriões.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Structure;
