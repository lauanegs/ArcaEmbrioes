import Banner from '../components/banner';
import { Title } from '../components/contato/title';
import { Contatos } from '../components/contato/contatos';
import { Formulario } from '../components/contato/formulario';
import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 
import bannerImage from '../assets/bannerContato.jpg';

const Contato = () => {
  useEffect(() => {
    setCssVariables();
  }, []);

  const bannerTitle = "A Arca Embriões está de portas abertas para te atender.";
  const bannerDescription = "Nossa equipe está preparada para oferecer os melhores serviços em melhoramento genético de bovinos. Conte conosco! ";

  return (
    <div>  
        <Banner 
        title={bannerTitle} 
        description={bannerDescription} 
        backgroundImage={bannerImage} 
      />
        <Title/>
        <Contatos/>
        <Formulario/>
    </div>
  );
}

export default Contato;
