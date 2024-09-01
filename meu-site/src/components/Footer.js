import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import bannerImage from '../assets/banner.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Arca Embriões</h2>
        <p>Melhoramento genético em bovinos</p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope size={24} />
            <p>contato@arcaembrioes.com</p>
          </div>
          <div className="contact-item">
            <FaPhone size={24} />
            <p>(34) 99999-9999</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt size={24} />
            <p>Rua Exemplo, 123 - Patos de Minas</p>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <h2>Entre em contato!</h2>
        <p>Para orçamentos e dúvidas entre em contato. Estamos prontos para atendê-lo!</p>
        <a href="mailto:contato@arcaembrioes.com" className="btn">Enviar mensagem</a>
      </div>
      <div className="footer-banner">
        <img src={bannerImage} alt="Banner Arca Embriões" />
      </div>
    </footer>
  );
}

export default Footer;
