import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieCard from './MovieCard';
import './MovieCarousel.css';

const MovieCardSkeleton = () => (
  <div className="movie-card skeleton">
    <div className="movie-poster">
      <div className="movie-poster-skeleton" />
    </div>
  </div>
);

const MovieCarousel = React.memo(({ title, endpoint, params = {} }) => {
  const carouselRef = useRef(null);
  const { movies, loading, error } = useMovies(endpoint, params);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateScrollButtons = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => carousel.removeEventListener('scroll', updateScrollButtons);
    }
  }, [updateScrollButtons, movies]);

  const scroll = useCallback((direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="movie-carousel" ref={carouselRef}>
          {[...Array(6)].map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="carousel-error">
          Error: {error}
        </div>
      );
    }

    return (
      <div 
        className="movie-carousel" 
        ref={carouselRef}
        role="region"
        aria-label={`${title} carousel`}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  };

  return (
    <section className="movie-carousel-section">
      <div className="carousel-header">
        <h2>{title}</h2>
        {!isMobile && !loading && (
          <div className="carousel-controls">
            <button
              className="carousel-control"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="carousel-control"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
      {renderContent()}
    </section>
  );
});

MovieCarousel.displayName = 'MovieCarousel';

export default MovieCarousel; 