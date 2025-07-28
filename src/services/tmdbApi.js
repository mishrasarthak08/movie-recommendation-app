const API_KEY = '4f007d14946ba40a651c2e3e84a34774';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const endpoints = {
  trending: '/trending/movie/week',
  popular: '/movie/popular',
  topRated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
  search: '/search/movie',
  movieDetails: (id) => `/movie/${id}`,
  movieCredits: (id) => `/movie/${id}/credits`,
  movieVideos: (id) => `/movie/${id}/videos`,
  movieRecommendations: (id) => `/movie/${id}/recommendations`,
  genres: '/genre/movie/list',
};

const imageSizes = {
  poster: {
    small: 'w185',
    medium: 'w342',
    large: 'w500',
    original: 'original',
  },
  backdrop: {
    small: 'w300',
    medium: 'w780',
    large: 'w1280',
    original: 'original',
  },
};

const getImageUrl = (path, type = 'poster', size = 'medium') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${imageSizes[type][size]}${path}`;
};

const fetchFromApi = async (endpoint, params = {}) => {
  try {
    // Ensure endpoint is a string
    const endpointPath = typeof endpoint === 'function' ? endpoint(params.id) : endpoint;
    
    // Create URL with base parameters
    const queryParams = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-US',
      ...params,
    });

    const url = `${BASE_URL}${endpointPath}?${queryParams}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `API call failed: ${response.status} - ${errorData.status_message || response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Helper function to validate and format page parameter
const validatePage = (page) => {
  const pageNum = parseInt(page, 10);
  if (isNaN(pageNum) || pageNum < 1) return 1;
  if (pageNum > 500) return 500;
  return pageNum;
};

export const tmdbApi = {
  // Get trending movies
  getTrending: (page = 1) => fetchFromApi(endpoints.trending, { page: validatePage(page) }),

  // Get popular movies
  getPopular: (page = 1) => fetchFromApi(endpoints.popular, { page: validatePage(page) }),

  // Get top rated movies
  getTopRated: (page = 1) => fetchFromApi(endpoints.topRated, { page: validatePage(page) }),

  // Get upcoming movies
  getUpcoming: (page = 1) => fetchFromApi(endpoints.upcoming, { page: validatePage(page) }),

  // Search movies
  searchMovies: (query, page = 1) => 
    fetchFromApi(endpoints.search, { query, page: validatePage(page) }),

  // Get movie details
  getMovieDetails: (id) => fetchFromApi(endpoints.movieDetails(id)),

  // Get movie credits
  getMovieCredits: (id) => fetchFromApi(endpoints.movieCredits(id)),

  // Get movie videos
  getMovieVideos: (id) => fetchFromApi(endpoints.movieVideos(id)),

  // Get movie recommendations
  getMovieRecommendations: (id) => 
    fetchFromApi(endpoints.movieRecommendations(id)),

  // Get movie genres
  getGenres: () => fetchFromApi(endpoints.genres),

  // Helper function to get image URLs
  getImageUrl,
}; 