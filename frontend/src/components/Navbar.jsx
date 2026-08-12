import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <span className="logo-icon">M</span>
          <span>
            Minutes<span className="logo-highlight">IQ</span>
          </span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="get-started-btn">
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;