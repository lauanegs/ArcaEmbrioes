// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact">
      <p>&copy; 2024 Embriovita. Todos os direitos reservados.</p>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="mailto:contato@embriovita.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
