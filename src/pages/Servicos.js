import IntroBanner from '../components/servicos/IntroBanner';
import Banner from '../components/banner';
import OutroBanner from '../components/servicos/OutroBanner';
import React, { useEffect } from 'react';
import { setCssVariables } from '../utils/Constantes'; 
import { Introducao } from '../components/servicos/introducao';
import logoImg from '../assets/bannerSobre.jpg';
import bannerImage from '../assets/bannerSobre.jpg';

const Servicos = () => {
  useEffect(() => {
    setCssVariables();
  }, []);

  const bannerTitle = "Conheça os nossos serviços";
  const bannerDescription = "A qualidade dos nossos serviços leva a resultados, sempre acompanhados de um excelente atendimento. ";

  const title1 = "Seleção de receptoras e Sincronização hormonal";
  const description1 = "As receptoras, popularmente conhecidas por “barriga de aluguel”, são avaliadas quanto a sua condição corporal, se apresentam estrutura anatômica reprodutiva normal e se estão ciclando para verificar se estão aptas a receberem um embrião e levar a gestação a termo. Todo esse processo é feito com o auxílio de um ultrassom que garante uma melhor acurácia. Aquelas que estiverem aptas, serão submetidas a um protocolo hormonal para sincronização do ciclo estral.";
  const title2 ="Seleção de doadoras e Aspiração folicular guiada por ultrassom (OPU - ovum pick up)";
  const description2 = "As doadoras são avaliadas quanto sua condição corporal, nutricional e hormonal e estrutura anatômica do aparelho reprodutivo utilizando um ultrassom. Essa análise é essencial já que esses vários fatores podem influenciar a taxa de recuperação de oócitos aspirados bem como a qualidade dos mesmos. As fêmeas aptas para serem doadoras são submetidas ao processo de aspiração folicular (OPU – ovum pick-up) para a retirada dos oócitos imaturos dos dois ovários da fêmea. Esse processo é realizado na fazenda do cliente, utilizando uma sonda intravaginal guiada por ultrassonografia e conectada a um sistema de vácuo. Esses oócitos imaturos são devidamente avaliados em estereomicroscópio e aqueles considerados viáveis são enviados ao laboratório.";
  const title3 ="Produção in vitro de embriões (PIVE)";
  const description3 = "Essa etapa é realizada no laboratório e se inicia com a chegada dos oócitos imaturos previamente selecionados. Esses oócitos são submetidos a uma etapa de maturação in vitro (MIV) por 22-24h. No dia seguinte, os oócitos já maturados passam pela etapa de fertilização in vitro (FIV), quando se dá a junção do oócito com o espermatozoide do touro escolhido pelo cliente. A escolha do touro (se é sexado ou não e raça), tem grande influência sobre os resultados da produção in vitro de embriões. Após 12-18h na etapa de FIV, os embriões são transferidos para o cultivo in vitro (CIV), com nutrientes e condições adequadas para seu desenvolvimento. Permanecem nessa condição até que o embrião complete sete dias, quando este é avaliado morfologicamente quanto ao seu desenvolvimento. Apenas os embriões de ótima qualidade (grau I, pela classificação da IETS -International Embryo Technology Society) são envasados e enviados ao campo para transferência nas receptoras.";
  const title4 ="Inovulação de embriões";
  const description4 = "Os embriões envasados são levados para implantação nas receptoras. Nessa etapa, é muito importante ter um acompanhamento correto do médico veterinário, a fim de implantar os embriões apenas nas receptoras que responderam ao tratamento hormonal e que apresentam corpo lúteo (CL) de qualidade, garantindo taxas de prenhez satisfatórias.";


  return (
    <div>
      <Banner 
        title={bannerTitle} 
        description={bannerDescription} 
        backgroundImage={bannerImage} 
      />
      <Introducao />
      <IntroBanner title={title1} description={description1} imageSrc={logoImg} />
      <OutroBanner title={title2} description={description2} imageSrc={logoImg} />
      <IntroBanner title={title3} description={description3} imageSrc={logoImg} />
      <OutroBanner title={title4} description={description4} imageSrc={logoImg} />
    </div>
  );
}

export default Servicos;
