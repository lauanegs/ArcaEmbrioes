import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 
import BannerHome from '../components/home/BannerHome';
import IntroBanner from '../components/home/IntroBanner';
import Services from '../components/home/Services';
import Structure from '../components/home/Structure';
import ContactBanner from '../components/ContactBanner';
import Advantages from '../components/home/Advantages';
import Pride from '../components/home/Pride';

const Home = () => {
  useEffect(() => {
    setCssVariables();
  }, []);

  const contactTitle = "Nossos profissionais estão prontos para te atender!";
  const contactLink = "#contato";

  return (
    <div>
      <BannerHome />
      <IntroBanner />
      <Services />
      <Structure />
      <ContactBanner 
        title={contactTitle} 
        link={contactLink} 
      />
      <Advantages />
      <Pride />
    </div>
  );
}

export default Home;
