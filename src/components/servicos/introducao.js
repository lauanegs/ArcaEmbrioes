import React from 'react';
import './introducao.css';

export const Introducao = () => {
    const title = "Serviços fornecidos";
    const subTitle = (
        <>
          Quando a qualidade é a prioridade, os resultados falam por si <br />
          - estamos aqui para garantir que você veja a diferença.
        </>
      );

    return (
        <div className="container1">
            <div className="container-title1">
                <h1 className="title1">{title}</h1>
            </div>
            <div className="container-subtitle1">
                <p className="subtitle1">{subTitle}</p>
            </div>
        </div>
    );
};
