import React from 'react';
import BannerEquipe from '../components/equipe/BannerEquipe';
import Profissional from '../components/equipe/Profissional';
import Secao from '../components/equipe/Secao';
import IntroEquipe from '../components/equipe/IntroEquipe';

const Equipe = () => {
  return (
    <div>
      <BannerEquipe />
      <IntroEquipe/>
      <Profissional />
      <Secao />
    </div>
  );
}

export default Equipe;
