import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Movie Recommendations",
      description: "Discover trending, popular, and top-rated movies curated just for you. Browse through different categories like 'Trending This Week', 'Popular Movies', 'Top Rated', and 'Coming Soon'.",
      icon: "fas fa-film",
      image: "/images/services/recommendations.jpg",
      features: [
        "Trending movies this week",
        "Popular movies from around the world", 
        "Top rated films of all time",
        "Upcoming releases"
      ]
    },
    {
      id: 2,
      title: "Movie Search",
      description: "Search for any movie by title, genre, or actor. Get instant results with movie details, ratings, and recommendations.",
      icon: "fas fa-search",
      image: "/images/services/discovery.jpg",
      features: [
        "Search by movie title",
        "Find movies by genre",
        "Search by actor or director",
        "Get detailed movie information"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>What CineVerse Does</h1>
          <p>Two simple things: Find movies and search movies</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-content">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  <h4>What you get:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="services-cta">
          <h2>Ready to start discovering movies?</h2>
          <p>Go back to the home page and start exploring!</p>
          <a href="/" className="cta-btn">Go to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
