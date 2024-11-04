import React from 'react';
import Slider from 'react-slick';
import transferenciaImg from '../../assets/transferencia.jpg';
import aspiracaoImg from '../../assets/aspiracao.jpg';
import producaoImg from '../../assets/producao.jpg';
import sincronizacaoImg from '../../assets/sincronizacao.jpg';
import vidros from '../../assets/vidros.jpg';
import './Structure.css';

const images = [
  { src: transferenciaImg, alt: 'Transferência' },
  { src: aspiracaoImg, alt: 'Aspiração' },
  { src: producaoImg, alt: 'Produção' },
  { src: sincronizacaoImg, alt: 'Sincronização' },
  { src: vidros, alt: 'Vidros'},
];

const Structure = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    centerMode: true, 
    centerPadding: '0px', 
  };

  return (
    <section className="structure">
      <h2>A melhor estrutura</h2>
      <p className="structure-subtitle">
        Contamos com equipamentos modernos, em um local totalmente esterilizado permitindo os melhores resultados
      </p>
      <div className="structure-carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="structure-carousel-item">
              <img src={image.src} alt={image.alt} className="structure-carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Structure;
