import React from 'react';
import './Pride.css';
import Video from '../../assets/video.mp4';

const Pride = () => {
  return (
    <section className="pride">
      <div className="pride-text">
        <h1>Nosso orgulho!!</h1>
        <p>
          Resultados incomparáveis.
        </p>
      </div>
      <div className="pride-video">
        <video 
        src={Video} 
        loop
        autoPlay
        muted />
      </div>
    </section>
  );
}

export default Pride;
