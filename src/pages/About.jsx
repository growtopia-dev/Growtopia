// src/pages/About.jsx
import React, { useState } from 'react';
import { cofounders, teamMembers } from '../data/team';
import { Mail } from 'lucide-react';

const TeamCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="ga-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="ga-card-inner"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <div className="ga-card-front">
          <div className="ga-member-avatar">
            <span className="ga-avatar-icon">👤</span>
          </div>
          <h3 className="ga-member-name">{member.name}</h3>
          <p className="ga-member-role">{member.role}</p>
        </div>

        <div className="ga-card-back">
          <h3 className="ga-member-name-back">{member.name}</h3>
          <p className="ga-member-role-back">{member.role}</p>
          <p className="ga-member-bio">{member.bio}</p>
          <a href={`mailto:${member.email}`} className="ga-email-link">
            <Mail size={16} /> {member.email}
          </a>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="ga-container">

      {/* Hero Section */}
      <section className="ga-editorial-header">
        <div className="ga-hero-layout">
          <div className="ga-hero-left">
            <div className="ga-label-box">ABOUT GROWTOPIA</div>
            <h1 className="ga-main-headline">
              WHERE<br />
              <span className="ga-headline-italic">INNOVATION</span><br />
              MEETS<br />
              <span className="ga-headline-accent">AGRICULTURE</span>
            </h1>
          </div>
          <div className="ga-hero-right">
            <p className="ga-header-quote">
              We don't just farm the land, we cultivate the future of sustainable agriculture
              through technology, passion, and unwavering commitment to our farmers.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="ga-story-section">
        <div className="ga-story-container">
          <div className="ga-story-image-placeholder">
            <div className="ga-image-overlay">EST. 2019</div>
          </div>

          <div className="ga-story-content">
            <div className="ga-section-label">— OUR STORY</div>
            <h2 className="ga-story-heading">
              Born from Vision,<br />
              <span className="ga-story-heading-accent">Driven by Purpose</span>
            </h2>

            <div className="ga-story-columns">
              <div className="ga-story-column">
                <p className="ga-story-text">
                  GROWTOPIA was founded with a vision to revolutionize agriculture through
                  technology and innovation. We believe that sustainable farming practices
                  combined with cutting-edge IoT solutions can address global food security
                  challenges while protecting our environment.
                </p>
              </div>
              <div className="ga-story-column">
                <p className="ga-story-text">
                  Our journey began when three passionate individuals – Dipak Raval, Jenil
                  Sanchaniya, and Rahul Khara – came together with a shared vision of
                  transforming Indian agriculture. With backgrounds in technology, business,
                  and operations, they assembled a talented team dedicated to making farming
                  smarter, more efficient, and sustainable.
                </p>
              </div>
            </div>

            <div className="ga-pull-quote">
              <div className="ga-pull-quote-text">
                Today, GROWTOPIA serves farmers across India, providing innovative solutions
                that increase yields, reduce costs, and promote environmentally friendly practices.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Cards */}
      <section className="ga-mission-vision-section">
        <div className="ga-mv-grid">
          <div className="ga-mv-card ga-mv-card--dark">
            <div className="ga-mv-number">01</div>
            <div className="ga-mv-label">MISSION</div>
            <h3 className="ga-mv-title">Empowering Farmers Through Innovation</h3>
            <p className="ga-mv-text">
              To empower farmers with innovative, affordable, and sustainable agricultural
              technology that increases productivity while preserving the environment for
              future generations.
            </p>
            <div className="ga-mv-corner" />
          </div>
          <div className="ga-mv-card ga-mv-card--green">
            <div className="ga-mv-number">02</div>
            <div className="ga-mv-label">VISION</div>
            <h3 className="ga-mv-title">Leading India's Agritech Revolution</h3>
            <p className="ga-mv-text">
              To become India's leading agritech company, transforming farming through
              technology and making sustainable agriculture accessible to every farmer.
            </p>
            <div className="ga-mv-corner" />
          </div>
          <div className="ga-mv-card ga-mv-card--amber">
            <div className="ga-mv-number">03</div>
            <div className="ga-mv-label">VALUES</div>
            <h3 className="ga-mv-title">Principles That Guide Us</h3>
            <p className="ga-mv-text">
              Innovation, Sustainability, Farmer-First Approach, Quality Excellence, and
              Environmental Responsibility guide everything we do.
            </p>
            <div className="ga-mv-corner" />
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="ga-founders-section">
        <div className="ga-founders-header">
          <div className="ga-founders-label-container">
            <div className="ga-founders-label">THE VISIONARIES</div>
            <div className="ga-founders-label-line" />
          </div>
          <h2 className="ga-founders-title">Meet Our Co-Founders</h2>
        </div>
        <div className="ga-team-grid">
          {cofounders.map((member, index) => (
            <div key={index} className="ga-card-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* Core Team Section */}
      <section className="ga-core-team-section">
        <div className="ga-core-team-header">
          <div className="ga-core-team-label-container">
            <div className="ga-core-team-label">THE TEAM</div>
            <div className="ga-core-team-label-line" />
          </div>
          <h2 className="ga-core-team-title">Our Core Team</h2>
          <p className="ga-core-team-subtitle">
            Dedicated individuals working tirelessly to bring innovation to agriculture
          </p>
        </div>
        <div className="ga-team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="ga-card-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Base / Desktop ─────────────────────────────── */

        .ga-container {
          max-width: 100%;
          width: 100%;
          font-family: 'Work Sans', sans-serif;
          background: #fafaf8;
          overflow-x: hidden;
        }

        /* Hero */
        .ga-editorial-header {
          padding: clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem);
          background: #1a2f0d;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .ga-hero-layout {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 6rem;
          align-items: center;
        }
        .ga-hero-left { position: relative; }
        .ga-label-box {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 2px solid #f4a220;
          font-size: 0.7rem;
          letter-spacing: 4px;
          font-weight: 700;
          margin-bottom: 2.5rem;
          color: #f4a220;
          background: rgba(244, 162, 32, 0.05);
        }
        .ga-main-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5.5vw, 4.5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: clamp(-0.5px, -0.04em, -2px);
          color: white;
          text-transform: uppercase;
        }
        .ga-headline-italic { font-style: italic; font-weight: 400; color: #8fbc5e; }
        .ga-headline-accent { color: #f4a220; }
        .ga-hero-right {
          position: relative;
          padding-left: 3rem;
          border-left: 3px solid #f4a220;
        }
        .ga-header-quote {
          font-size: clamp(0.85rem, 2vw, 1.15rem);
          line-height: 1.8;
          color: rgba(255,255,255,0.95);
          font-style: italic;
          font-weight: 300;
        }

        /* Story */
        .ga-story-section { padding: 8rem 3rem; background: white; }
        .ga-story-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 5rem;
          align-items: start;
        }
        .ga-story-image-placeholder {
          height: 600px;
          background: linear-gradient(135deg, #2d5016, #6b9e3e);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 20px 20px 0 #f4a220;
          flex-shrink: 0;
        }
        .ga-image-overlay {
          font-size: 3rem;
          font-family: 'Playfair Display', serif;
          color: white;
          font-weight: 700;
          transform: rotate(-90deg);
          white-space: nowrap;
        }
        .ga-story-content { padding-top: 2rem; }
        .ga-section-label {
          font-size: 0.75rem;
          letter-spacing: 3px;
          font-weight: 700;
          color: #f4a220;
          margin-bottom: 1.5rem;
        }
        .ga-story-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          color: #1a2f0d;
          margin-bottom: 3rem;
        }
        .ga-story-heading-accent { font-style: italic; font-weight: 400; color: #6b9e3e; }
        .ga-story-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .ga-story-text { font-size: 1rem; line-height: 1.8; color: #333; }
        .ga-pull-quote {
          background: #f4a220;
          padding: 2.5rem;
          margin-top: 3rem;
          position: relative;
          transform: translateX(-3rem);
        }
        .ga-pull-quote-text {
          font-size: 1.3rem;
          line-height: 1.6;
          color: white;
          font-weight: 600;
          font-family: 'Playfair Display', serif;
        }

        /* Mission / Vision */
        .ga-mission-vision-section { padding: 6rem 3rem; background: #fafaf8; }
        .ga-mv-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .ga-mv-card {
          color: white;
          padding: 3rem;
          position: relative;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .ga-mv-card--dark   { background: #1a2f0d; }
        .ga-mv-card--green  { background: #6b9e3e; }
        .ga-mv-card--amber  { background: #f4a220; }
        .ga-mv-number {
          font-size: 8rem;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          position: absolute;
          top: -2rem; right: 2rem;
          opacity: 0.1;
          line-height: 1;
        }
        .ga-mv-label { font-size: 0.7rem; letter-spacing: 3px; font-weight: 700; margin-bottom: 1.5rem; opacity: 0.8; }
        .ga-mv-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 1.5rem;
        }
        .ga-mv-text { font-size: 0.95rem; line-height: 1.7; opacity: 0.9; flex: 1; }
        .ga-mv-corner {
          position: absolute;
          bottom: 0; right: 0;
          width: 60px; height: 60px;
          background: rgba(255,255,255,0.2);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        /* Founders */
        .ga-founders-section { padding: 8rem 3rem; background: white; }
        .ga-founders-header { max-width: 1400px; margin: 0 auto 5rem; text-align: center; }
        .ga-founders-label-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .ga-founders-label { font-size: 0.75rem; letter-spacing: 3px; font-weight: 700; color: #f4a220; }
        .ga-founders-label-line { width: 60px; height: 2px; background: #f4a220; }
        .ga-founders-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          color: #1a2f0d;
        }

        /* Core Team */
        .ga-core-team-section { padding: 8rem 3rem; background: #fafaf8; }
        .ga-core-team-header { max-width: 1400px; margin: 0 auto 5rem; text-align: center; }
        .ga-core-team-label-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .ga-core-team-label { font-size: 0.75rem; letter-spacing: 3px; font-weight: 700; color: #f4a220; }
        .ga-core-team-label-line { width: 60px; height: 2px; background: #f4a220; }
        .ga-core-team-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          color: #1a2f0d;
          margin-bottom: 1rem;
        }
        .ga-core-team-subtitle { font-size: 1.1rem; color: #666; font-style: italic; }

        /* Team Grid */
        .ga-team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .ga-card-wrapper { animation: ga-slideUp 0.6s ease-out both; }

        /* Flip Card */
        .ga-card-container {
          perspective: 1000px;
          height: 400px;
          cursor: pointer;
        }
        .ga-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 1s;
          transform-style: preserve-3d;
        }
        .ga-card-front, .ga-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          padding: 2rem;
          border: 3px solid #1a2f0d;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .ga-card-front { background: white; }
        .ga-card-back {
          background: linear-gradient(135deg, #6b9e3e 0%, #2d5016 100%);
          transform: rotateY(180deg);
          color: white;
        }
        .ga-member-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #6b9e3e, #2d5016);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #f4a220;
        }
        .ga-avatar-icon { font-size: 4rem; }
        .ga-member-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          color: #1a2f0d;
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-align: center;
        }
        .ga-member-role {
          color: #6b9e3e;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
          text-align: center;
        }
        .ga-member-name-back {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          color: white;
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-align: center;
        }
        .ga-member-role-back {
          font-size: 0.85rem;
          color: #f4a220;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
        }
        .ga-member-bio {
          font-size: 0.9rem;
          line-height: 1.6;
          color: white;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .ga-email-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #f4a220;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 600;
          background: rgba(255,255,255,0.1);
          padding: 0.6rem 1.2rem;
          border: 1px solid #f4a220;
          transition: all 0.3s;
          word-break: break-all;
          text-align: center;
        }
        .ga-email-link:hover { background: rgba(255,255,255,0.2); }

        /* Animations */
        @keyframes ga-slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Tablet (≤ 1024px) ──────────────────────────── */
        @media (max-width: 1024px) {
          .ga-hero-layout { gap: 3.5rem; }
          .ga-story-container {
            grid-template-columns: 320px 1fr;
            gap: 3rem;
          }
          .ga-story-image-placeholder { height: 480px; }
          .ga-mv-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .ga-mv-card { min-height: auto; padding: 2.5rem; }
          .ga-team-grid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
          .ga-pull-quote { transform: translateX(0); }
        }

        /* ── Mobile (≤ 768px) ───────────────────────────── */
        @media (max-width: 768px) {
          /* Hero */
          .ga-hero-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .ga-main-headline {
            font-size: clamp(1.8rem, 8vw, 3rem);
            text-align: center;
            letter-spacing: -0.5px;
          }
          .ga-hero-left { text-align: center; }
          .ga-label-box { margin-bottom: 1.5rem; }
          .ga-hero-right {
            padding-left: 0;
            border-left: none;
            border-top: 3px solid #f4a220;
            padding-top: 2rem;
          }
          .ga-header-quote { text-align: center; }

          /* Story */
          .ga-story-section { padding: 4rem 1.5rem; }
          .ga-story-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .ga-story-image-placeholder {
            height: 300px;
            box-shadow: 12px 12px 0 #f4a220;
          }
          .ga-image-overlay { font-size: 2rem; }
          .ga-story-heading {
            font-size: clamp(1.75rem, 6vw, 2.5rem);
            text-align: center;
          }
          .ga-story-heading br { display: none; }
          .ga-story-columns { grid-template-columns: 1fr; gap: 1.5rem; }
          .ga-pull-quote { transform: translateX(0); }
          .ga-pull-quote-text { font-size: 1.1rem; }

          /* Mission Vision */
          .ga-mission-vision-section { padding: 4rem 1.5rem; }
          .ga-mv-grid { grid-template-columns: 1fr; }
          .ga-mv-card { min-height: auto; padding: 2rem; }
          .ga-mv-number { font-size: 5rem; }
          .ga-mv-title { font-size: 1.5rem; }

          /* Founders & Team */
          .ga-founders-section { padding: 4rem 1.5rem; }
          .ga-founders-header { margin-bottom: 3rem; }
          .ga-core-team-section { padding: 4rem 1.5rem; }
          .ga-core-team-header { margin-bottom: 3rem; }
          .ga-team-grid { grid-template-columns: 1fr; }
          .ga-card-container { height: 360px; }
          .ga-member-avatar { width: 100px; height: 100px; }
          .ga-avatar-icon { font-size: 3rem; }
          .ga-member-name, .ga-member-name-back { font-size: 1.3rem; }
        }

        /* ── Small Mobile (≤ 480px) ─────────────────────── */
        @media (max-width: 480px) {
          .ga-main-headline { font-size: clamp(1.6rem, 8vw, 2.4rem); }
          .ga-story-image-placeholder {
            height: 220px;
            box-shadow: 8px 8px 0 #f4a220;
          }
          .ga-image-overlay { font-size: 1.5rem; }
          .ga-pull-quote { padding: 1.75rem; }
          .ga-pull-quote-text { font-size: 1rem; }
          .ga-mv-card { padding: 1.75rem; }
          .ga-card-container { height: 320px; }
          .ga-card-front, .ga-card-back { padding: 1.5rem; }
          .ga-member-avatar { width: 80px; height: 80px; margin-bottom: 1rem; }
          .ga-avatar-icon { font-size: 2.5rem; }
          .ga-member-bio { font-size: 0.82rem; }
          .ga-email-link { font-size: 0.75rem; padding: 0.5rem 0.9rem; }
          .ga-core-team-subtitle { font-size: 0.95rem; }
        }

        /* ── Extra-small (≤ 380px) ──────────────────────── */
        @media (max-width: 380px) {
          .ga-main-headline { font-size: 7.5vw; letter-spacing: 0; }
          .ga-team-grid { grid-template-columns: 1fr; }
          .ga-card-container { height: 300px; }
          .ga-mv-number { font-size: 4rem; }
        }
      `}</style>
    </div>
  );
};

export default About;