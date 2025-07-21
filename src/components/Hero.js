import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Innovative Digital Solutions</h1>
        <h2>Powered by the Latest Technology & AI</h2>
        <p>
          TDS Creations delivers cutting-edge development services tailored to your business needs.
          From web applications to AI-powered solutions, we bring your ideas to life.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn primary-btn">Our Services</a>
          <a href="#contact" className="btn secondary-btn">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;