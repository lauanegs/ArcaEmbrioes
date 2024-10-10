import React from 'react';
import logoImg from '../../assets/2021.jpg';
import './texto.css';

const OutroBanner = () => {
  return (
    <section className="outro-banner">
      <div className="outro-image">
        <img src={logoImg} alt="Logo" />
        {/* Card removido */}
      </div>
      <div className="outro-text">
        <p>Localizado no município de Patos de Minas, Minas Gerais, 
          o laboratório ARCA surgiu do consenso entre técnicos e produtores sobre a necessidade 
          de biotecnologias reprodutivas e pessoas capacitadas mais próximas às propriedades da região. 
          Nosso foco é gerar valor aos nossos clientes, fornecendo um atendimento personalizado, 
          a um valor justo, de modo a obter embriões de qualidade e altas taxas de concepção.<br/><br/>

          ARCA EMBRIÕES, melhorando o AGORA.</p>
      </div>
    </section>
  );
}

export default OutroBanner;
