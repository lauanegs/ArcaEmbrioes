import IntroBanner from '../components/servicos/IntroBanner';
import Banner from '../components/banner';
import OutroBanner from '../components/servicos/OutroBanner';
import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 
import { Introducao } from '../components/servicos/introducao';
import priImg from '../assets/sincronizacao.jpg';
import segImg from '../assets/aspiracao.jpg';
import terImg from '../assets/producao.jpg';
import quaImg from '../assets/transferencia.jpg';
import bannerImage from '../assets/producao.jpg';

const Servicos = () => {
  useEffect(() => {
    setCssVariables();
  }, []);

  const bannerTitle = "Conheça os nossos serviços";
  const bannerDescription = "A qualidade dos nossos serviços leva a resultados, sempre acompanhados de um excelente atendimento. ";

  const title1 = "Seleção de receptoras e Sincronização hormonal";
  const description1 = "As receptoras, popularmente conhecidas por “barriga de aluguel”, são avaliadas quanto a sua condição corporal.";
  const title2 ="Seleção de doadoras e Aspiração folicular guiada por ultrassom";
  const description2 = "As doadoras são avaliadas quanto sua condição corporal, nutricional e hormonal e estrutura anatômica do aparelho reprodutivo utilizando um ultrassom.";
  const title3 ="Fertilização in vitro de embriões (FIV)";
  const description3 = "Essa etapa é realizada no laboratório e se inicia com a chegada dos oócitos imaturos previamente selecionados. Esses oócitos são submetidos a uma etapa de maturação in vitro (MIV) por 22-24h.";
  const title4 ="Transferência de embriões";
  const description4 = "Os embriões são levados para implantação nas receptoras.";


  return (
    <div>
      <Banner 
        title={bannerTitle} 
        description={bannerDescription} 
        backgroundImage={bannerImage} 
      />
      <Introducao />
      <IntroBanner title={title1} description={description1} imageSrc={priImg} />
      <OutroBanner title={title2} description={description2} imageSrc={segImg} />
      <IntroBanner title={title3} description={description3} imageSrc={terImg} />
      <OutroBanner title={title4} description={description4} imageSrc={quaImg} />
    </div>
  );
}

export default Servicos;
