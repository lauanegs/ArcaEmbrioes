import React from 'react';
import './ContactBanner.css';

const ContactBanner = ({ title, link }) => {
  return (
    <section className="contact">
      <h2>{title}</h2>
      <div className="contact-buttons1">
        <a href={link} className="btn">Entre em Contato</a>
      </div>
    </section>
  );
}

export default ContactBanner;
