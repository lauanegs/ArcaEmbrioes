import React from 'react';
import logoImg from '../../assets/2021.jpg';
import './IntroEquipe.css';

const IntroEquipe = () => {
  return (
    <section className="intro-equipe">
      <div className="intro-image1">
        <img src={logoImg} alt="Imagem representativa da empresa" />
      </div>
      <div className="intro-text1">
        <h1>A melhor empresa para cuidar do seu material genético!</h1>
        <p>
          Contamos com equipamentos modernos, em um local totalmente esterilizado permitindo os melhores resultados.
        </p>
      </div>
    </section>
  );
}

export default IntroEquipe;
