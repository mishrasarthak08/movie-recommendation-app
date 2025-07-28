import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Find Your Next Favorite Movie",
      excerpt: "Simple tips and tricks to discover amazing films that match your taste and mood.",
      author: "Sarthak Mishra",
      date: "March 15, 2024",
      category: "Tips"
    },
    {
      id: 2,
      title: "The Best Movies of 2024 So Far",
      excerpt: "A curated list of the most impressive and entertaining films released this year.",
      author: "Sarthak Mishra",
      date: "March 10, 2024",
      category: "Reviews"
    },
    {
      id: 3,
      title: "Hidden Gems You Might Have Missed",
      excerpt: "Discover amazing films that didn't get the attention they deserved but are absolutely worth watching.",
      author: "Sarthak Mishra",
      date: "March 5, 2024",
      category: "Discovery"
    },
    {
      id: 4,
      title: "Building Your Movie Watchlist",
      excerpt: "How to organize and maintain a great collection of movies you want to watch.",
      author: "Sarthak Mishra",
      date: "March 1, 2024",
      category: "Tips"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="blog-hero-content">
          <h1>CineVerse Blog</h1>
          <p>Movie insights, tips, and recommendations</p>
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-content">
                <div className="blog-category">{post.category}</div>
                <h2>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-author">By {post.author}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
