import { useState, useEffect } from 'react';
import { tmdbApi } from '../services/tmdbApi';

export const useMovies = (endpoint, params = {}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get the appropriate API method based on the endpoint
        const apiMethod = tmdbApi[endpoint];
        if (!apiMethod) {
          throw new Error(`Invalid endpoint: ${endpoint}`);
        }

        const data = await apiMethod(params.page || 1);

        if (isMounted) {
          setMovies(data.results || []);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching movies:', err);
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      
      isMounted = false;
    };
  }, [endpoint, params.page]);

  return { movies, loading, error };
};

export const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMovieDetails = async () => {
      if (!movieId) return;

      try {
        setLoading(true);
        setError(null);

        const [details, credits, videos] = await Promise.all([
          tmdbApi.getMovieDetails(movieId),
          tmdbApi.getMovieCredits(movieId),
          tmdbApi.getMovieVideos(movieId),
        ]);

        if (isMounted) {
          setMovie({
            ...details,
            credits,
            videos: videos.results,
          });
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching movie details:', err);
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchMovieDetails();

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  return { movie, loading, error };
}; 