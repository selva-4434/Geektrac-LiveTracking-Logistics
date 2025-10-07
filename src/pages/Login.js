import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // validation later
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logo-file.png" alt="Geektrac Logo" className="logo" />
        {/* <h2>Geektrac</h2> */}
        <input type="text" placeholder="Username *" className="input-field" />
        <input type="password" placeholder="Password *" className="input-field" />
        <a href="#" className="forgot-link">Forgot password?</a>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <p className="footer-text">Powered By Geektrac Labs</p>
      </div>
    </div>
  );
};

export default Login;
