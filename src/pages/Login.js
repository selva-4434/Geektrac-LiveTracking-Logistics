import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    const hasAlphabet = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[@$!%*?&]/.test(password);
    return hasAlphabet && hasNumber && hasSymbol;
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      setError('Incorrect password');
      return;
    }

    setError('');
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logo-file.png" alt="Geektrac Logo" className="logo" />

        <input
          type="text"
          placeholder="Email *"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password *"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="monkey-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img
              src={showPassword ? '/monkey-closed.png' : '/monkey-open.png'}
              alt="Toggle Password"
              className="monkey-img"
            />
          </span>
        </div>

        {error && <p className="error-message">{error}</p>}

        <a href="#" className="forgot-link">Forgot password?</a>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <p className="footer-text">Powered By Geektrac Labs</p>
      </div>
    </div>
  );
};

export default Login;
