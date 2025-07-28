import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../hooks/useMovies';
import { tmdbApi } from '../services/tmdbApi';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetails(id);

  if (loading) {
    return <div className="movie-details-loading">Loading...</div>;
  }

  if (error) {
    return <div className="movie-details-error">Error: {error}</div>;
  }

  if (!movie) {
    return <div className="movie-details-error">Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <div 
        className="movie-backdrop"
        style={{
          backgroundImage: `url(${tmdbApi.getImageUrl(movie.backdrop_path, 'backdrop', 'large')})`
        }}
      >
        <div className="backdrop-overlay">
          <div className="movie-info">
            <div className="movie-poster">
              <img
                src={tmdbApi.getImageUrl(movie.poster_path, 'poster', 'large')}
                alt={movie.title}
              />
            </div>
            <div className="movie-content">
              <h1>{movie.title}</h1>
              <div className="movie-meta">
                <span className="movie-year">
                  {new Date(movie.release_date).getFullYear()}
                </span>
                <span className="movie-runtime">
                  {movie.runtime} min
                </span>
                <span className="movie-rating">
                  <i className="fas fa-star"></i>
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
              <div className="movie-genres">
                {movie.genres.map(genre => (
                  <span key={genre.id} className="genre-tag">
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="movie-overview">{movie.overview}</p>
              {movie.credits && (
                <hr className="section-divider" />
              )}
              {movie.credits && (
                <div className="movie-cast">
                  <h3>Cast</h3>
                  <div className="cast-list">
                    {movie.credits.cast.slice(0, 5).map(person => (
                      <div key={person.id} className="cast-member">
                        <img
                          src={tmdbApi.getImageUrl(person.profile_path, 'poster', 'small')}
                          alt={person.name}
                        />
                        <span>{person.name}</span>
                        <span className="character">{person.character}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {movie.videos && movie.videos.length > 0 && (
                <>
                  <hr className="section-divider" />
                  <div className="movie-trailer">
                    <h3>Trailer</h3>
                    <div className="video-container">
                      <iframe
                        src={`https://www.youtube.com/embed/${movie.videos[0].key}`}
                        title="Movie Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails; 