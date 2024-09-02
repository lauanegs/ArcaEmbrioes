import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo Arca Embriões" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre Nós</Link></li>
        <li><Link to="/equipe">Equipe</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} color="#FFFFFF" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#FFFFFF" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
