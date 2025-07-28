import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span>CineVerse</span>
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-login">
            Login
          </Link>
          <Link to="/signup" className="btn btn-signup">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 