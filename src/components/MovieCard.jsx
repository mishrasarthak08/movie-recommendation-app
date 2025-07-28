import React, { useState, useEffect } from 'react';
import { tmdbApi } from '../services/tmdbApi';
import './MovieCard.css';

const MovieCard = React.memo(({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = tmdbApi.getImageUrl(movie.poster_path, 'poster', 'medium');

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
  }, [imageUrl]);

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {!imageLoaded && <div className="movie-poster-skeleton" />}
        <img
          src={imageUrl}
          alt={movie.title}
          loading="lazy"
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
        <div className="movie-overlay">
          <h3>{movie.title}</h3>
          <p className="movie-rating">
            <i className="fas fa-star"></i>
            {movie.vote_average.toFixed(1)}
          </p>
          <p className="movie-year">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard; 