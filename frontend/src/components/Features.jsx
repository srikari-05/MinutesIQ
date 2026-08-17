import React from "react";
import "./Features.css";

const features = [
  {
    icon: "📝",
    title: "Smart Summary",
    description:
      "Get a concise and meaningful summary of your entire meeting without reading the full transcript.",
  },
  {
    icon: "🔑",
    title: "Keyword Extraction",
    description:
      "Automatically identify important topics, people, technologies, and terms discussed during the meeting.",
  },
  {
    icon: "⭐",
    title: "Important Statements",
    description:
      "Highlight critical statements and key points that deserve attention after the meeting.",
  },
  {
    icon: "✅",
    title: "Action Items",
    description:
      "Identify tasks, responsibilities, and follow-ups discussed during the meeting.",
  },
  {
    icon: "🎯",
    title: "Decision Tracking",
    description:
      "Capture important decisions made during meetings so nothing gets forgotten.",
  },
  {
    icon: "📋",
    title: "MoM Generator",
    description:
      "Generate professional Minutes of Meeting with discussions, decisions, action items, and next steps.",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">

        <div className="section-heading">
          <span className="section-badge">POWERFUL FEATURES</span>

          <h2>
            Everything You Need After
            <span> Every Meeting</span>
          </h2>

          <p>
            MinutesIQ turns lengthy meeting conversations into clear,
            organized, and actionable insights.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className="feature-arrow">→</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;