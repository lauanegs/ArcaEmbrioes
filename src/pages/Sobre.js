import Banner from '../components/banner';
import Texto from '../components/sobre/texto';
import Valores from '../components/sobre/valores';
import ContactBanner from '../components/ContactBanner';
import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 
import bannerImage from '../assets/bannerSobre.jpg'; 

const Sobre = () => {
  useEffect(() => {
    setCssVariables();
  }, []);

  const bannerTitle = "Conheça nossa história e nossa empresa";
  const bannerDescription = "Localizada na cidade de Patos de Minas, estamos prontos para atendê-lo! Venha nos fazer uma visita.";
  
  const contactTitle = "Nossos profissionais estão prontos para te atender!";
  const contactLink = "#contato";
  
  return (
    <>
      <Banner 
        title={bannerTitle} 
        description={bannerDescription} 
        backgroundImage={bannerImage} 
      />
      <Texto />
      <Valores />
      <ContactBanner 
        title={contactTitle} 
        link={contactLink} 
      />
    </>
  );
}

export default Sobre;
