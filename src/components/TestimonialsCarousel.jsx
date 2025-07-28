import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';
import './TestimonialsCarousel.css';

// Sample testimonials data (replace with your actual data)
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Movie Enthusiast",
    photo: "/images/testimonials/sarah.jpg",
    text: "CineVerse has completely transformed how I discover movies. The personalized recommendations are spot-on, and I've found so many hidden gems I would have never discovered otherwise!"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Film Critic",
    photo: "/images/testimonials/michael.jpg",
    text: "As a film critic, I appreciate the depth of analysis and quality of reviews on CineVerse. The community discussions are engaging and insightful."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Casual Viewer",
    photo: "/images/testimonials/emma.jpg",
    text: "I love how easy it is to find movies that match my mood. The interface is intuitive, and the recommendations are always relevant to my taste."
  },
  {
    id: 4,
    name: "David Kim",
    title: "Movie Blogger",
    photo: "/images/testimonials/david.jpg",
    text: "The detailed movie analysis and behind-the-scenes content on CineVerse are invaluable for someone who loves to dive deep into filmmaking."
  },
  {
    id: 5,
    name: "Lisa Patel",
    title: "Film Student",
    photo: "/images/testimonials/lisa.jpg",
    text: "CineVerse has been an amazing resource for my film studies. The community is knowledgeable and supportive, and the content is always high quality."
  }
];

const TestimonialsCarousel = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = direction === 'left' ? -400 : 400;
    const newPosition = scrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });

    setScrollPosition(newPosition);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Users Say</h2>
        <div className="carousel-controls">
          <button 
            className="carousel-control" 
            onClick={() => scroll('left')}
            disabled={scrollPosition <= 0}
          >
            <FaChevronLeft />
          </button>
          <button 
            className="carousel-control" 
            onClick={() => scroll('right')}
            disabled={scrollPosition >= carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="testimonials-carousel" ref={carouselRef}>
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarousel; 