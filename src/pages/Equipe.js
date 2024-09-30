import BannerEquipe from '../components/equipe/BannerEquipe';
import Profissional from '../components/equipe/Profissional';
import Secao from '../components/equipe/Secao';
import IntroEquipe from '../components/equipe/IntroEquipe';
import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 

const Equipe = () => {
  useEffect(() => {
    setCssVariables();
  }, []);

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
