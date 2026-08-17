import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">M</span>
            <span>
              Minutes<span>IQ</span>
            </span>
          </Link>

          <p>
            AI-powered meeting intelligence that transforms conversations
            into clear, actionable insights.
          </p>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <Link to="/login">Login</Link>
          <Link to="/register">Get Started</Link>
        </div>

        <div className="footer-column">
          <h4>Insights</h4>
          <span>Smart Summaries</span>
          <span>Keywords</span>
          <span>Action Items</span>
          <span>Minutes of Meeting</span>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <span>About MinutesIQ</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 MinutesIQ. All rights reserved.
        </p>

        <p>
          Built with React & Spring Boot
        </p>
      </div>
    </footer>
  );
}

export default Footer;