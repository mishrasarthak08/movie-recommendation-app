import React from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialsCarousel.css';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Movie Enthusiast",
      content: "CineVerse helped me discover so many amazing films I never would have found otherwise. The recommendations are spot-on!",
      rating: 5,
      image: "/images/testimonials/sarah.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Film Student",
      content: "As a film student, I need to watch a lot of movies. This platform makes it so easy to find quality content.",
      rating: 5,
      image: "/images/testimonials/michael.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Casual Viewer",
      content: "Perfect for someone like me who doesn't know what to watch. The search feature is incredibly helpful.",
      rating: 4,
      image: "/images/testimonials/emma.jpg"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Movie Critic",
      content: "The movie details and ratings are comprehensive. It's become my go-to platform for movie research.",
      rating: 5,
      image: "/images/testimonials/david.jpg"
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Users Say</h2>
        <p>Join thousands of satisfied movie lovers</p>
      </div>
      <div className="testimonials-carousel">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel; 