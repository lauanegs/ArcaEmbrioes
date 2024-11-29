import React from 'react';
import './title.css';

export const Title = () => {
    const title = "Entre em contato";
    const subTitle = "Nos envie um e-mail ou venha nos conhecer pessoalmente!";

    return (
        <div className="container">
            <div className="container-title">
                <h1 className="title">{title}</h1>
            </div>
            <div className="container-subtitle">
                <p className="subtitle">{subTitle}</p>
            </div>
        </div>
    );
};
