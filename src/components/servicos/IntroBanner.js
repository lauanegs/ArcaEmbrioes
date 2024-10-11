import React from 'react';
import './IntroBanner.css';

const IntroBanner = ({ title, description, imageSrc }) => {
  return (
    <section className="intro-banner">
      <div className="intro-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="intro-image">
        <img src={imageSrc} alt="Banner" />
      </div>
    </section>
  );
}

export default IntroBanner;
