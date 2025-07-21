import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      color: '#3182ce',
      description: 'A full-featured online store with payment processing and inventory management.'
    },
    {
      id: 2,
      title: 'AI Content Generator',
      category: 'ai',
      color: '#805ad5',
      description: 'An AI-powered tool that creates high-quality content for marketing purposes.'
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      color: '#38a169',
      description: 'A mobile application that helps users track their fitness goals and progress.'
    },
    {
      id: 4,
      title: 'Real Estate Website',
      category: 'web',
      color: '#dd6b20',
      description: 'A property listing website with advanced search and filtering capabilities.'
    },
    {
      id: 5,
      title: 'Smart Home Dashboard',
      category: 'ai',
      color: '#d53f8c',
      description: 'An AI-enhanced dashboard for controlling and monitoring smart home devices.'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      color: '#e53e3e',
      description: 'A mobile app connecting users with local restaurants for food delivery.'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-header">
        <h2>Our Portfolio</h2>
        <p>Check out our latest projects</p>
      </div>
      
      <div className="portfolio-filters">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'web' ? 'active' : ''} 
          onClick={() => setFilter('web')}
        >
          Web Development
        </button>
        <button 
          className={filter === 'mobile' ? 'active' : ''} 
          onClick={() => setFilter('mobile')}
        >
          Mobile Apps
        </button>
        <button 
          className={filter === 'ai' ? 'active' : ''} 
          onClick={() => setFilter('ai')}
        >
          AI Solutions
        </button>
      </div>
      
      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundColor: project.color }}>
              <div className="portfolio-title">{project.title}</div>
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;