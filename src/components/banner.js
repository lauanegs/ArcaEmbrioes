import React from 'react'; 
import './banner.css';

const Banner = ({ title, description, backgroundImage }) => {
  return (
    <div className='banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Banner;
