import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About TDS Creations</h2>
        <p>Who we are and what we do</p>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h3>Your Vision, Our Expertise</h3>
          <p>
            TDS Creations is a forward-thinking digital agency specializing in creating innovative solutions 
            for businesses of all sizes. We combine technical expertise with creative thinking to deliver 
            projects that exceed expectations.
          </p>
          <p>
            Our team of skilled developers, designers, and digital strategists work together to bring your 
            ideas to life using the latest technologies and industry best practices. We stay ahead of market 
            trends to ensure our clients receive cutting-edge solutions that give them a competitive edge.
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Expertise in the latest technologies and frameworks</li>
            <li>Custom solutions tailored to your specific needs</li>
            <li>AI-powered development for smarter applications</li>
            <li>Commitment to quality and attention to detail</li>
            <li>Ongoing support and maintenance</li>
            <li>Transparent communication throughout the project</li>
          </ul>
        </div>
        
        <div className="about-stats">
          <div className="stat-item">
            <h4>50+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h4>30+</h4>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h4>5+</h4>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h4>100%</h4>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;