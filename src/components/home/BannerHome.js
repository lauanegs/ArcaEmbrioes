import React from 'react';
import './BannerHome.css';
import logo from '../../assets/logot.png';

const BannerHome = () => {
  return (
    <div className='banner-home'>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <button>Saiba mais</button>
    </div>

  );
}

export default BannerHome;
