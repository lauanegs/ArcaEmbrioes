import React from 'react';
import './Profissional.css';

const Profissional = ({ src, alt, nome, descricao }) => {
  return (
    <div className="profissional-item">
      <img src={src} alt={alt} className="profissional-img" />
      <div className="profissional-text">
        <h3>{nome}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export default Profissional;
