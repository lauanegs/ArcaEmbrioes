import React from 'react';
import './App.css';
import bannerImage from './assets/banner.jpg'; // Certifique-se de que a imagem está na pasta correta

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Arca Embriões</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2>Bem-vindo à Arca Embriões</h2>
        <p>Excelência em medicina reprodutiva</p>
        <button>Saiba Mais</button>
      </section>

      {/* Conteúdo */}
      <section className="content">
        <div id="about" className="section">
          <h2>Sobre Nós</h2>
          <p>Nós somos líderes em medicina reprodutiva, ajudando famílias a crescer.</p>
        </div>

        <div id="services" className="section services">
          <h2>Nossos Serviços</h2>
          <div className="cards">
            <div className="card">
              <h3>Fertilização In Vitro (FIV)</h3>
              <p>Tratamento especializado para casais com dificuldade de conceber naturalmente.</p>
            </div>
            <div className="card">
              <h3>Inseminação Artificial</h3>
              <p>Processo de inseminação assistida para aumentar as chances de gravidez.</p>
            </div>
            <div className="card">
              <h3>Congelamento de Óvulos</h3>
              <p>Preservação da fertilidade feminina para uso futuro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Arca Embriões. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
