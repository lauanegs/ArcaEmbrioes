import React from 'react';
import BannerHome from '../components/home/BannerHome';
import IntroBanner from '../components/home/IntroBanner';
import Services from '../components/home/Services';
import Structure from '../components/home/Structure';
import ContactBanner from '../components/home/ContactBanner';
import Advantages from '../components/home/Advantages';
import Pride from '../components/home/Pride';

const Home = () => {
  return (
    <div>
      <BannerHome />
      <IntroBanner />
      <Services />
      <Structure />
      <ContactBanner />
      <Advantages />
      <Pride />
    </div>
  );
}

export default Home;
