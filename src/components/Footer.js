import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>TDS Creations</h2>
          <p>Innovative Digital Solutions</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">AI Solutions</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">E-commerce Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Contact</h3>
            <ul>
              <li>prabhatprabhakar918@outlook.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Street, Tech City</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} TDS Creations. All Rights Reserved.</p>
        <div className="footer-social">
          <a href="#" className="social-icon">FB</a>
          <a href="#" className="social-icon">TW</a>
          <a href="#" className="social-icon">IG</a>
          <a href="#" className="social-icon">LI</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;