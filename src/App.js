import React from "react";
import { Send, Brain, LineChart, Users } from "lucide-react";
import "./App.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <h1 className="nav-title">TherapyTrack</h1>
          <a href="mailto:contact@bwh99.com" className="nav-contact">
            <Send size={20} />
            contact@bwh99.com
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">
              Your path, your progress. All in one place
            </h2>
            <p className="hero-subtitle">
              A revolutionary digital journal for comprehensive mental health
              tracking and management
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features container">
        <div className="feature-grid">
          <div className="feature-card">
            <Brain className="feature-icon" />
            <h3 className="feature-title">Comprehensive Tracking</h3>
            <p>
              Track symptoms, medications, therapy goals, and session notes in
              one intuitive platform.
            </p>
          </div>
          <div className="feature-card">
            <LineChart className="feature-icon" />
            <h3 className="feature-title">Pattern Recognition</h3>
            <p>
              Gain valuable insights into your mental health patterns over time
              with built-in analytics.
            </p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3 className="feature-title">Provider Collaboration</h3>
            <p>
              Seamlessly share information with therapists, coaches, and
              healthcare providers.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <h2 className="about-title">About BWH99 LLC</h2>
          <div className="about-content">
            <p>
              BWH99 LLC is a wellness app development company, founded by a
              licensed therapist. The first app developed by BWH99 is
              TherapyTrack - a revolutionary digital journal designed to empower
              individuals on their mental health journey.
            </p>
            <p>
              By consolidating all aspects of mental health care—symptom
              tracking, medication management, therapy goals, and session
              notes—into one intuitive, searchable app, TherapyTrack addresses
              the challenges of fragmented care.
            </p>
            <p>
              Users can seamlessly collaborate with multiple providers,
              including therapists, life coaches, spiritual guides, and
              psychiatrists, while gaining insights into their mental health
              patterns over time. With tools like built-in mood trackers and
              assessments, TherapyTrack helps users take control of their
              wellness, fostering long-term personal growth.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>© 2024 BWH99 LLC. All rights reserved.</p>
          <a href="mailto:contact@bwh99.com" className="footer-contact">
            <Send size={16} />
            contact@bwh99.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
