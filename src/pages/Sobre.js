import BannerSobre from '../components/sobre/banner';
import Texto from '../components/sobre/texto';
import Valores from '../components/sobre/valores';
import Banner2 from '../components/sobre/banner2';
import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 

const Sobre = () => {
  useEffect(() => {
    setCssVariables();
  }, []);
  
  return (
    <>
    <BannerSobre/>
    <Texto/>
    <Valores/>
    <Banner2/>
    </>
  );
}

export default Sobre;
