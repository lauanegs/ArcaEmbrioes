import React from 'react';
import './Banner.css';
import bannerImage from '../assets/banner.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <img src={bannerImage} alt="Banner Arca Embriões" />
      <div className="banner-text">
        <h1>Melhoramento genético com o melhor atendimento e resultado do mercado</h1>
        <p>A Arca Embriões está sempre atendendo com excelência seus parceiros de Patos de Minas e região.</p>
        <div className="banner-buttons">
          <a href="#saiba-mais" className="btn">Saiba Mais</a>
          <a href="#servicos" className="btn">Serviços</a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
