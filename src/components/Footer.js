import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import bannerImage from '../assets/footer1.png';

const Footer = () => {
  const whatsappNumber = "5538999625079";

  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Arca Embriões</h2>
        <p>Melhoramento genético em bovinos</p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope size={24} />
            <p>arcaembrioes@gmail.com</p>
          </div>
          <div className="contact-item">
            <FaPhone size={24} />
            <p>(34) 9994-7927</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt size={24} />
            <p>R. José Alves Coelho, 454 - Loja 1 - Aurélio Caixeta</p>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <h2>Entre em contato!</h2>
        <p>Para orçamentos e dúvidas entre em contato. </p>
        <p> Estamos prontos para atendê-lo!</p>
        <a href={`https://wa.me/${whatsappNumber}`} className="btn" target="_blank" rel="noopener noreferrer">Enviar mensagem</a>
      </div>
      <div className="footer-banner">
        <img src={bannerImage} alt="Banner Arca Embriões" />
      </div>
    </footer>
  );
}

export default Footer;
