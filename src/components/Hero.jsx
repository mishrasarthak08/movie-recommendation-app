import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Discover Your Next Favorite Movie</h1>
          <p>Join our vibrant community of movie enthusiasts. Get personalized recommendations, read expert reviews, and explore the magical world of cinema.</p>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Get in Touch</h2>
            <div className="form-group">
              <label htmlFor="name" style={{color: 'white'}}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{color: 'white'}}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" style={{color: 'white'}}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                aria-required="true"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero; 