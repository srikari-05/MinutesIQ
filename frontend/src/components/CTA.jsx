import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <span className="cta-badge">READY TO GET STARTED?</span>

          <h2>
            Make Every Meeting
            <span> More Meaningful</span>
          </h2>

          <p>
            Stop spending hours going through meeting recordings and
            transcripts. Let MinutesIQ turn every conversation into
            actionable intelligence.
          </p>

          <Link to="/register" className="cta-button">
            Start Using MinutesIQ →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;