import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="quote-icon">"</div>
        <p className="testimonial-text">{testimonial.text}</p>
      </div>
      <div className="testimonial-author">
        <div className="author-image">
          <img src={testimonial.photo} alt={testimonial.name} />
        </div>
        <div className="author-info">
          <h4>{testimonial.name}</h4>
          <p className="author-title">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 