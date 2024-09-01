// src/components/Services.js
import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Fertilização In Vitro (FIV)',
      description: 'Tratamento avançado para auxiliar casais com dificuldades de concepção.',
      icon: '🔬',
    },
    {
      title: 'Diagnóstico Genético Pré-implantacional',
      description: 'Análise genética dos embriões para garantir a saúde do futuro bebê.',
      icon: '🧬',
    },
    {
      title: 'Banco de Embriões',
      description: 'Armazenamento seguro dos embriões para futuras tentativas de gravidez.',
      icon: '❄️',
    },
    // Adicione mais serviços conforme necessário
  ];

  return (
    <section className="services" id="services">
      <h2>Nossos Serviços</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
