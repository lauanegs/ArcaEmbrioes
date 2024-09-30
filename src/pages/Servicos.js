import IntroBanner from '../components/servicos/IntroBanner';
import BannerServicos from '../components/servicos/BannerServicos';
import OutroBanner from '../components/servicos/OutroBanner';
import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 

const Servicos = () => {
  useEffect(() => {
    setCssVariables();
  }, []);
  
  return (
    <div>
      <BannerServicos/>
      <IntroBanner />
      <OutroBanner/>
      <IntroBanner />
      <OutroBanner/>
    </div>
  );
}

export default Servicos;
