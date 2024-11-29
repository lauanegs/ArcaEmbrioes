import React from 'react';
import './OutroBanner.css';

const OutroBanner = ({ title, description, imageSrc }) => {
  return (
    <section className="outro-banner">
      <div className="outro-image">
        <img src={imageSrc} alt="Logo" />
      </div>
      <div className="outro-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default OutroBanner;
