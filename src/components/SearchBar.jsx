import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { tmdbApi } from '../services/tmdbApi';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const debounceTimerRef = useRef(null);
  const navigate = useNavigate();

  // Debounced search function
  const debouncedSearch = useCallback(async (searchQuery) => {
    if (searchQuery.trim().length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await tmdbApi.searchMovies(searchQuery);
      setResults(response.results.slice(0, 5));
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle input change with debouncing
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowResults(true);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      debouncedSearch(value);
    }, 300);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleMovieClick = (movieId) => {
    setShowResults(false);
    setQuery('');
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowResults(true)}
        />
        {isLoading && <div className="search-spinner"></div>}
      </div>

      {showResults && results.length > 0 && (
        <div className="search-results">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="search-result-item"
              onClick={() => handleMovieClick(movie.id)}
            >
              <img
                src={tmdbApi.getImageUrl(movie.poster_path, 'poster', 'small')}
                alt={movie.title}
                className="search-result-poster"
                loading="lazy"
              />
              <div className="search-result-info">
                <h4>{movie.title}</h4>
                <p className="search-result-year">
                  {new Date(movie.release_date).getFullYear()}
                </p>
                <p className="search-result-rating">
                  <i className="fas fa-star"></i>
                  {movie.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(SearchBar); 