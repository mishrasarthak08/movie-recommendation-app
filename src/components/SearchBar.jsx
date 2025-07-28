import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { tmdbApi } from '../services/tmdbApi';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = async (searchQuery) => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        const data = await tmdbApi.searchMovies(searchQuery);
        setResults(data.results ? data.results.slice(0, 5) : []);
        setShowResults(true);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const handleResultClick = (movieId) => {
    navigate(`/movie/${movieId}`);
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={handleInputChange}
        />
        <i className="fas fa-search search-icon"></i>
      </div>
      {showResults && results.length > 0 && (
        <div className="search-results">
          {results.map(movie => (
            <div
              key={movie.id}
              className="search-result-item"
              onClick={() => handleResultClick(movie.id)}
            >
              <img 
                src={tmdbApi.getImageUrl(movie.poster_path, 'poster', 'small')} 
                alt={movie.title} 
              />
              <div className="search-result-info">
                <h4>{movie.title}</h4>
                <p>{new Date(movie.release_date).getFullYear()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar; 