import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: "📤",
    title: "Upload Your Meeting",
    description:
      "Upload an audio, video, transcript, PDF, DOCX, or TXT file from your meeting.",
  },
  {
    number: "02",
    icon: "⚙️",
    title: "AI Processes It",
    description:
      "MinutesIQ analyzes the meeting content and identifies the important information.",
  },
  {
    number: "03",
    icon: "🧠",
    title: "Get Meeting Insights",
    description:
      "Receive summaries, keywords, important statements, decisions, and action items.",
  },
  {
    number: "04",
    icon: "📋",
    title: "Generate Your MoM",
    description:
      "Get a professionally structured Minutes of Meeting ready to review and share.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        <div className="section-heading">
          <span className="section-badge">HOW IT WORKS</span>

          <h2>
            From Meeting to
            <span> Meaningful Insights</span>
          </h2>

          <p>
            Four simple steps turn your meeting content into organized,
            actionable information.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="step-card">

                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-icon">
                  {step.icon}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;