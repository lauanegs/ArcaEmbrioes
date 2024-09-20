import React from 'react';
import './Pride.css';

const Pride = () => {
  return (
    <section className="pride">
      <h2>Nosso orgulho</h2>
      <p className="pride-subtitle">Somos gratos a todos que estão conosco nessa jornada. O crescimento da empresa é fruto de um trabalho conjunto, nosso e dos parceiros que nos escolhem como prestadora de serviço.</p>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/l6vLJ1s_jMg?si=lHipar_6paSCJKLq" 
          title="Vídeo de apresentação"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Pride;
