import React from 'react';
import IntroBanner from '../components/servicos/IntroBanner';
import BannerServicos from '../components/servicos/BannerServicos';
import OutroBanner from '../components/servicos/OutroBanner';

const Servicos = () => {
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
