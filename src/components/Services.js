import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies.',
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'AI Solutions',
      description: 'Custom AI-powered tools and applications to automate and enhance your business.',
      icon: '🤖'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging and intuitive digital experiences.',
      icon: '🎨'
    },
    {
      id: 5,
      title: 'E-commerce Solutions',
      description: 'Complete online store setups with payment integration and inventory management.',
      icon: '🛒'
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to increase your online presence and reach your target audience.',
      icon: '📊'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Cutting-edge solutions for modern businesses</p>
      </div>
      
      <div className="services-container">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;