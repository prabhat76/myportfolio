import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus({
      submitted: false,
      error: false,
      message: 'Sending message...'
    });

    emailjs.sendForm(
      'service_5olbx1r',
      'template_hf2dv1w', // Replace this with your actual template ID from EmailJS dashboard
      form.current,
      '_JNA7QO7v46ymb1hl'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setFormStatus({
          submitted: true,
          error: true,
          message: 'Failed to send message. Please try again later.'
        });
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Let's discuss your project</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>prabhatprabhakar918@outlook.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+91 9462152706</p>
          </div>
          <div className="contact-item">
            <h3>Address</h3>
            <p>IndraPri chowk , Hazaribagh</p>.
          </div>
          <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">TW</a>
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">LI</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          {formStatus.message && (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
              {formStatus.submitted && !formStatus.error && (
                <button 
                  className="btn reset-btn" 
                  onClick={() => setFormStatus({submitted: false, error: false, message: ''})}
                  style={{marginTop: '15px'}}
                >
                  Send Another Message
                </button>
              )}
            </div>
          )}
          
          <form ref={form} onSubmit={handleSubmit} style={{ display: formStatus.submitted ? 'none' : 'block' }}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;