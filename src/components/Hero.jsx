import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Movie</h1>
        <p>Explore thousands of movies, get personalized recommendations, and never run out of great films to watch.</p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Start Exploring</button>
          <button className="hero-btn secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 