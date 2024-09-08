import React from 'react';
import "./Contato.css"
import { BannerContato } from '../components/contato/banner';
import { Title } from '../components/contato/title';
import { Contatos } from '../components/contato/contatos';
const Contato = () => {
  return (
    <div class="container">
      <BannerContato/>
      
      <Title
        title="Entre em contato" 
        subTitle="Nos envie um e-mail ou venha nos conhecer pessoalmente!"
        colorTitle="PURPLE"
        colorSubTitle="BLACK"
      />

      <Contatos/>
    </div>
  );
}

export default Contato;
