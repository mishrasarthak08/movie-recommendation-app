const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const API_KEY = '1b7c076a0e4849aeefd1f3c429c79b8';

const imageSizes = {
  poster: {
    small: 'w185',
    medium: 'w342',
    large: 'w500',
    original: 'original'
  },
  backdrop: {
    small: 'w300',
    medium: 'w780',
    large: 'w1280',
    original: 'original'
  }
};

export const tmdbApi = {
  getImageUrl: (path, type = 'poster', size = 'medium') => {
    if (!path) return null;
    const sizeKey = imageSizes[type]?.[size] || imageSizes.poster.medium;
    return `${IMAGE_BASE_URL}/${sizeKey}${path}`;
  },

  async makeRequest(endpoint, params = {}) {
    const url = new URL(`${BASE_URL}${endpoint}`);
    
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-US',
      ...params
    });

    url.search = searchParams.toString();

    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },

  async searchMovies(query, page = 1) {
    return this.makeRequest('/search/movie', {
      query: query,
      page: this.validatePage(page),
      include_adult: false
    });
  },

  async getTrendingMovies(timeWindow = 'week', page = 1) {
    return this.makeRequest('/trending/movie/week', {
      page: this.validatePage(page)
    });
  },

  async getPopularMovies(page = 1) {
    return this.makeRequest('/movie/popular', {
      page: this.validatePage(page)
    });
  },

  async getTopRatedMovies(page = 1) {
    return this.makeRequest('/movie/top_rated', {
      page: this.validatePage(page)
    });
  },

  async getUpcomingMovies(page = 1) {
    return this.makeRequest('/movie/upcoming', {
      page: this.validatePage(page)
    });
  },

  async getMovieDetails(movieId) {
    const [movieData, creditsData, videosData] = await Promise.all([
      this.makeRequest(`/movie/${movieId}`),
      this.makeRequest(`/movie/${movieId}/credits`),
      this.makeRequest(`/movie/${movieId}/videos`)
    ]);

    return {
      ...movieData,
      credits: creditsData,
      videos: videosData.results.filter(video => video.site === 'YouTube' && video.type === 'Trailer')
    };
  },

  validatePage(page) {
    const pageNum = parseInt(page);
    return isNaN(pageNum) || pageNum < 1 ? 1 : pageNum;
  }
}; 