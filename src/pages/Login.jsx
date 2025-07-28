import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-header">Login to CineVerse</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <span className="input-icon"><i className="fas fa-envelope"></i></span>
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <span
                className="input-icon password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </span>
            </div>
          </div>
          <div className="form-options">
            <div className="checkbox-wrapper">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <span className="checkmark"></span>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button className="auth-button" type="submit" disabled={isLoading}>
            {isLoading ? <span className="loading-spinner"></span> : 'Login'}
          </button>
        </form>
        <div className="auth-footer">
          <span>Don't have an account?</span>
          <a href="/signup" className="auth-link">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login; 