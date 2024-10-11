import Banner from '../components/banner';
import Profissional from '../components/equipe/Profissional';
import ContactBanner from '../components/ContactBanner';
import IntroEquipe from '../components/equipe/IntroEquipe';
import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 
import bannerImage from '../assets/bannerSobre.jpg';

const Equipe = () => {
  useEffect(() => {
    setCssVariables();
  }, []);

  const bannerTitle = "Conheça a nossa equipe!";
  const bannerDescription = "Oferecemos os melhores profissionais do mercado, que sempre atendem os clientes com educação e dedicação. ";

  const contactTitle = "Nossos profissionais estão prontos para te atender!";
  const contactLink = "#contato";

  return (
    <div>
      <Banner 
        title={bannerTitle} 
        description={bannerDescription} 
        backgroundImage={bannerImage} 
      />
      <IntroEquipe/>
      <Profissional />
      <ContactBanner 
        title={contactTitle} 
        link={contactLink} 
      />
    </div>
  );
}

export default Equipe;
