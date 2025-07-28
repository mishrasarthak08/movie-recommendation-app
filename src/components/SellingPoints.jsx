import React from 'react';
import './SellingPoints.css';

const SellingPoints = () => {
  return (
    <section className="selling-points">
      {/* First Selling Point */}
      <div className="selling-point">
        <div className="selling-point-content">
          <h2>Personalized Movie Recommendations</h2>
          <p>
            Discover your next favorite movie with our AI-powered recommendation system. 
            We analyze your watching history, preferences, and ratings to suggest films 
            that match your taste perfectly. No more endless scrolling through movie 
            catalogs - we bring the perfect picks directly to you.
          </p>
          <ul className="feature-list">
            <li>Smart AI-powered suggestions</li>
            <li>Personalized watchlists</li>
            <li>Genre-based recommendations</li>
            <li>Similar movie suggestions</li>
          </ul>
        </div>
        <div className="selling-point-image">
          <img 
            src="/images/recommendations.jpg" 
            alt="Personalized movie recommendations" 
          />
        </div>
      </div>

      {/* Second Selling Point */}
      <div className="selling-point reverse">
        <div className="selling-point-content">
          <h2>Expert Movie Reviews & Analysis</h2>
          <p>
            Get in-depth insights from our community of movie critics and enthusiasts. 
            Our detailed reviews cover everything from cinematography to storytelling, 
            helping you make informed decisions about what to watch. Join discussions, 
            share your thoughts, and connect with fellow movie lovers.
          </p>
          <ul className="feature-list">
            <li>Professional critic reviews</li>
            <li>Community ratings and comments</li>
            <li>Detailed movie analysis</li>
            <li>Behind-the-scenes insights</li>
          </ul>
        </div>
        <div className="selling-point-image">
          <img 
            src="/images/reviews.jpg" 
            alt="Expert movie reviews and analysis" 
          />
        </div>
      </div>
    </section>
  );
};

export default SellingPoints; 