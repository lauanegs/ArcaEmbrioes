// src/components/Banner.js
import React from 'react';
import './Banner.css';
import bannerImage from '../assets/banner.jpg'; // Certifique-se de adicionar a imagem na pasta src/assets

function Banner() {
  return (
    <section className="banner" id="home" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        <h2>Bem-vindo à Embriovita</h2>
        <p>Excelência em Medicina Reprodutiva</p>
        <button onClick={() => window.location.href='#about'}>Saiba Mais</button>
      </div>
    </section>
  );
}

export default Banner;
