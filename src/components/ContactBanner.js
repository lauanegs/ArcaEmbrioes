import React from 'react';
import './ContactBanner.css';
import { Link } from 'react-router-dom';

const ContactBanner = ({ title, link }) => {
  return (
    <section className="contact">
      <h2>{title}</h2>
      <div className="contact-buttons1">
        <Link to="/contato" className="btn">Entre em Contato</Link>
      </div>
    </section>
  );
}

export default ContactBanner;
