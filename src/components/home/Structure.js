import React from 'react';
import incubadoraImg from '../../assets/incubadora.jpg';
import vitrificacaoImg from '../../assets/vitrificacao.jpg';
import parceriasImg from '../../assets/parcerias.jpg';
import './Structure.css';

const Structure = () => {
  return (
    <section className="structure">
      <h2>A melhor estrutura</h2>
      <p className="structure-subtitle">Contamos com equipamentos modernos, em um local totalmente esterilizado permitindo os melhores resultados</p>
      <div className="structure-card-container">
        <div className="structure-card">
          <img src={incubadoraImg} alt="Incubadora" />
          <h3>Incubadora</h3>
          <p className="structure-description">Nossa incubadora possui tecnologia de ponta para garantir o ambiente ideal para o desenvolvimento dos embriões.</p>
        </div>
        <div className="structure-card">
          <img src={vitrificacaoImg} alt="Vitrificação" />
          <h3>Vitrificação</h3>
          <p className="structure-description">Utilizamos técnicas avançadas de vitrificação para preservar a qualidade dos embriões durante o armazenamento.</p>
        </div>
        <div className="structure-card">
          <img src={parceriasImg} alt="Parcerias" />
          <h3>Parcerias</h3>
          <p className="structure-description">Trabalhamos em parceria com instituições renomadas para garantir a excelência no tratamento e manejo dos embriões.</p>
        </div>
      </div>
    </section>
  );
}

export default Structure;
