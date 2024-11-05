import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import logoEsc from '../assets/logoesc.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [iconColor, setIconColor] = useState('#FFFFFF'); // Cor padrão dos ícones
  let scrollTimeout = null;
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    setScrolled(currentScroll > 50);

    if (currentScroll === 0) {
      setVisible(true);
      setScrolled(false); // Não aplicar o estilo "scrolled" no topo
      setIconColor('#FFFFFF'); // Cor dos ícones no topo
    } else {
      setVisible(true);
      setIconColor(currentScroll > 50 ? '#1A154B' : '#FFFFFF');

      if (scrollTimeout) clearTimeout(scrollTimeout);

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

  // Função para rolar rapidamente até o topo da página
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Rolagem instantânea para o topo
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${visible ? 'visible' : ''}`}>
      <div className="logo" onClick={scrollToTop}>
        <img src={scrolled ? logoEsc : logo} alt="Logo Arca Embriões" />
      </div>
      <ul className="nav-links">
        <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
        <li><Link to="/sobre" onClick={scrollToTop}>Sobre Nós</Link></li>
        <li><Link to="/equipe" onClick={scrollToTop}>Equipe</Link></li>
        <li><Link to="/servicos" onClick={scrollToTop}>Serviços</Link></li>
        <li><Link to="/contato" onClick={scrollToTop}>Contato</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100071313504184" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} color={iconColor} className="social-icon" />
        </a>
        <a href="https://www.instagram.com/arcaembrioes/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color={iconColor} className="social-icon" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
