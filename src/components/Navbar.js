import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [iconColor, setIconColor] = useState('#FFFFFF'); // Cor padrão dos ícones
  let scrollTimeout = null;
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // Mostrar a navbar quando houver rolagem
    setScrolled(currentScroll > 50);

    if (currentScroll === 0) {
      // Sempre exibir a navbar no topo
      setVisible(true);
      setScrolled(false); // Não aplicar o estilo "scrolled" no topo
      setIconColor('#FFFFFF'); // Cor dos ícones no topo
    } else {
      // Mostrar a navbar quando houver rolagem
      setVisible(true);

      // Atualizar a cor dos ícones com base na rolagem
      setIconColor(currentScroll > 50 ? '#1A154B' : '#FFFFFF');

      // Ocultar a navbar após um tempo de inatividade
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Se o usuário estiver rolando para cima ou estiver no topo
      if (currentScroll < lastScrollTop || currentScroll === 0) {
        setVisible(true);
      } else {
        scrollTimeout = setTimeout(() => {
          setVisible(false);
        }, 1500); // Tempo de espera antes de esconder a navbar
      }
    }

    lastScrollTop = currentScroll;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${visible ? 'visible' : ''}`}>
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
          <FaFacebook size={24} color={iconColor} className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color={iconColor} className="social-icon" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
