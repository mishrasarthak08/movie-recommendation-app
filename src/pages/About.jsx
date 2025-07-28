import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About CineVerse</h1>
          <p>We make finding your next favorite movie simple and fun.</p>
        </div>
      </div>

      {/* What We Do */}
      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>What We Do</h2>
            <p>CineVerse is a movie discovery platform that helps you find great films to watch. We do two things really well:</p>
            
            <div className="services-overview">
              <div className="service-overview">
                <div className="service-icon">
                  <i className="fas fa-film"></i>
                </div>
                <h3>Movie Recommendations</h3>
                <p>Browse trending movies, popular films, top-rated classics, and upcoming releases. We curate the best movies so you don't have to spend hours searching.</p>
              </div>
              
              <div className="service-overview">
                <div className="service-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Movie Search</h3>
                <p>Search for any movie by title, genre, or actor. Get instant results with movie details, ratings, and similar recommendations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Sarthak Mishra</h3>
              <p className="position">Founder & Developer</p>
              <p className="bio">Created CineVerse to make movie discovery simple and enjoyable. Passionate about building user-friendly applications that solve real problems.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h2>Ready to discover your next favorite movie?</h2>
          <a href="/" className="about-cta-btn">Start Exploring</a>
        </div>
      </div>
    </div>
  );
};

export default About;
