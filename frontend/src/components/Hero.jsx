import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-badge">
            ✨ AI-Powered Meeting Intelligence
          </div>

          <h1>
            Turn Every Meeting Into
            <span> Actionable Intelligence</span>
          </h1>

          <p>
            MinutesIQ transforms meeting recordings and transcripts into
            intelligent summaries, professional Minutes of Meeting,
            important statements, decisions, keywords, and action items.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="hero-primary-btn">
              Get Started →
            </Link>

            <a href="#how-it-works" className="hero-secondary-btn">
              See How It Works
            </a>
          </div>

          <div className="supported-files">
            <span>Supports:</span>
            <span>🎙️ Audio</span>
            <span>🎥 Video</span>
            <span>📄 PDF</span>
            <span>📝 DOCX</span>
            <span>📃 TXT</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <div>
                <span className="card-label">MEETING INSIGHTS</span>
                <h3>Product Strategy Meeting</h3>
              </div>

              <span className="status-dot"></span>
            </div>

            <div className="summary-box">
              <div className="summary-icon">📝</div>
              <div>
                <span>AI Summary</span>
                <p>
                  The team discussed product improvements, upcoming
                  deadlines, and deployment plans.
                </p>
              </div>
            </div>

            <div className="insight-grid">
              <div className="insight-item">
                <span>🔑</span>
                <strong>Keywords</strong>
                <small>API · Testing · Deploy</small>
              </div>

              <div className="insight-item">
                <span>✅</span>
                <strong>Action Items</strong>
                <small>6 tasks identified</small>
              </div>

              <div className="insight-item">
                <span>🎯</span>
                <strong>Decisions</strong>
                <small>4 decisions made</small>
              </div>

              <div className="insight-item">
                <span>⭐</span>
                <strong>Important</strong>
                <small>8 statements</small>
              </div>
            </div>

            <div className="progress-section">
              <div>
                <span>Meeting analysis</span>
                <strong>100%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            ✓ MoM Generated
          </div>

          <div className="floating-card floating-card-two">
            🔥 6 Action Items
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;