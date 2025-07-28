import React from 'react'
import Hero from '../components/Hero'
import MovieCarousel from '../components/MovieCarousel'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      
      <MovieCarousel 
        title="Trending This Week"
        endpoint="getTrending"
      />
      
      <MovieCarousel 
        title="Popular Movies"
        endpoint="getPopular"
      />
      
      <MovieCarousel 
        title="Top Rated"
        endpoint="getTopRated"
      />
      
      <MovieCarousel 
        title="Coming Soon"
        endpoint="getUpcoming"
      />
      
      <TestimonialsCarousel />
    </div>
  )
}

export default Home