import React from 'react';
import "./Contato.css";
import { BannerContato } from '../components/contato/banner';
import { Title } from '../components/contato/title';
import { Contatos } from '../components/contato/contatos';
import { Formulario } from '../components/contato/formulario';
const Contato = () => {
  return (
    <div className="container">
      <section>
        <BannerContato/>
      </section>
      
      <section className='contatos'>
        <Title
          title="Entre em contato"
          subTitle="Nos envie um e-mail ou venha nos conhecer pessoalmente!"
          colorTitle="PURPLE"
          colorSubTitle="BLACK"
        />
        <div style={{marginTop: 60}}><Contatos/></div>
      </section>

      <section className='formulario'>
        <Formulario/>
      </section>

    </div>
  );
}

export default Contato;
