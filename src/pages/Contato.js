import { BannerContato } from '../components/contato/BannerContato1';
import { Title } from '../components/contato/title';
import { Contatos } from '../components/contato/contatos';
import { Formulario } from '../components/contato/formulario';
import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 

const Contato = () => {
  useEffect(() => {
    setCssVariables();
  }, []);

  return (
    <div>  
        
        <Title/>
        <Contatos/>
        <Formulario/>
    </div>
  );
}

export default Contato;
