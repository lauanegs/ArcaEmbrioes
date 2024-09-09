import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <h2>Ainda com dúvidas?</h2>
      <p>Nos envie um e-mail!</p>
      <div className="contact-buttons">
        <a href="#saiba-mais" className="btn">Saiba Mais</a>
        <a href="#contato" className="btn">Entre em Contato</a>
      </div>
    </section>
  );
}

export default ContactBanner;
