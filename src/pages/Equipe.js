import React from 'react';
import BannerEquipe from '../components/equipe/BannerEquipe';
import Profissional from '../components/equipe/Profissional';
import Secao from '../components/equipe/Secao';

const profissionais = [
  {
    src: 'path/to/imagem1.jpg',
    alt: 'Descrição da imagem 1',
    nome: 'Profissional 1',
    descricao: 'Descrição do profissional 1'
  },
  {
    src: 'path/to/imagem2.jpg',
    alt: 'Descrição da imagem 2',
    nome: 'Profissional 2',
    descricao: 'Descrição do profissional 2'
  },
  {
    src: 'path/to/imagem3.jpg',
    alt: 'Descrição da imagem 3',
    nome: 'Profissional 3',
    descricao: 'Descrição do profissional 3'
  },
  {
    src: 'path/to/imagem4.jpg',
    alt: 'Descrição da imagem 4',
    nome: 'Profissional 4',
    descricao: 'Descrição do profissional 4'
  },
  {
    src: 'path/to/imagem5.jpg',
    alt: 'Descrição da imagem 5',
    nome: 'Profissional 5',
    descricao: 'Descrição do profissional 5'
  },
  {
    src: 'path/to/imagem6.jpg',
    alt: 'Descrição da imagem 6',
    nome: 'Profissional 6',
    descricao: 'Descrição do profissional 6'
  }
];

const Equipe = () => {
  return (
    <div>
      <BannerEquipe />
      <div className="profissionais-container">
        {profissionais.map((profissional, index) => (
          <div className="profissional-item" key={index}>
            <img src={profissional.src} alt={profissional.alt} className="profissional-img" />
            <div className="profissional-text">
              <h3>{profissional.nome}</h3>
              <p>{profissional.descricao}</p>
            </div>
          </div>
        ))}
      </div>
      <Secao />
    </div>
  );
}

export default Equipe;
