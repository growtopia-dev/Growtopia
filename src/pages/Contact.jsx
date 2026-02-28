// src/pages/Contact.jsx — fully responsive, class-based CSS (mirrors About.jsx pattern)
import React, { useState } from 'react';
import { Mail, Phone, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="ct-container">

      {/* ── Editorial Hero ── */}
      <section className="ct-editorial-header">
        <div className="ct-hero-layout">
          <div className="ct-hero-left">
            <div className="ct-label-box">CONTACT GROWTOPIA</div>
            <h1 className="ct-main-headline">
              LET'S<br />
              <span className="ct-headline-italic">START A</span><br />
              <span className="ct-headline-accent">CONVERSATION</span>
            </h1>
          </div>

          <div className="ct-hero-right">
            <p className="ct-header-desc">
              We'd love to hear from you. Whether you have questions about our products,
              need support, or want to explore partnership opportunities, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="ct-info-section">
        <div className="ct-info-grid">
          <div className="ct-info-card ct-info-card--dark">
            <div className="ct-info-icon"><Mail size={32} color="white" /></div>
            <h3 className="ct-info-title">Email Us</h3>
            <a href="mailto:info@growtopia.com" className="ct-info-link">info@growtopia.com</a>
            <a href="mailto:support@growtopia.com" className="ct-info-link">support@growtopia.com</a>
            <p className="ct-info-text">We respond within 24 hours</p>
            <div className="ct-card-corner" />
          </div>

          <div className="ct-info-card ct-info-card--green">
            <div className="ct-info-icon"><Phone size={32} color="white" /></div>
            <h3 className="ct-info-title">Call Us</h3>
            <a href="tel:+919876543210" className="ct-info-link">+91 98765 43210</a>
            <p className="ct-info-text">Mon–Sat: 9:00 AM – 6:00 PM</p>
            <div className="ct-card-corner" />
          </div>

          <div className="ct-info-card ct-info-card--amber">
            <div className="ct-info-icon"><Clock size={32} color="white" /></div>
            <h3 className="ct-info-title">Quick Response</h3>
            <p className="ct-info-text">
              Our dedicated support team ensures prompt responses to all inquiries.
              Reach out anytime and we'll get back to you as soon as possible.
            </p>
            <div className="ct-card-corner" />
          </div>
        </div>
      </section>

      {/* ── Form + Side Content ── */}
      <section className="ct-form-section">
        <div className="ct-form-layout">

          {/* Left – Form */}
          <div className="ct-form-container">
            <div className="ct-form-header">
              <div className="ct-section-label">— GET IN TOUCH</div>
              <h2 className="ct-form-title">Send us a Message</h2>
              <p className="ct-form-subtitle">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-form-group">
                <label className="ct-label">YOUR NAME *</label>
                <input
                  type="text" name="name" value={formData.name}
                  onChange={handleChange} required
                  className="ct-input" placeholder="Enter your full name"
                />
              </div>

              <div className="ct-form-row">
                <div className="ct-form-group">
                  <label className="ct-label">EMAIL ADDRESS *</label>
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleChange} required
                    className="ct-input" placeholder="your@email.com"
                  />
                </div>
                <div className="ct-form-group">
                  <label className="ct-label">PHONE NUMBER</label>
                  <input
                    type="tel" name="phone" value={formData.phone}
                    onChange={handleChange}
                    className="ct-input" placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="ct-form-group">
                <label className="ct-label">SUBJECT *</label>
                <input
                  type="text" name="subject" value={formData.subject}
                  onChange={handleChange} required
                  className="ct-input" placeholder="What is this regarding?"
                />
              </div>

              <div className="ct-form-group">
                <label className="ct-label">MESSAGE *</label>
                <textarea
                  name="message" value={formData.message}
                  onChange={handleChange} required
                  className="ct-textarea" placeholder="Tell us more about your inquiry..."
                  rows="6"
                />
              </div>

              <button type="submit" className="ct-submit-btn">
                <Send size={20} /> SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right – Side info */}
          <div className="ct-side-content">
            <div className="ct-why-box">
              <h3 className="ct-why-title">Why Contact Us?</h3>
              <div className="ct-why-list">
                {[
                  ['01', 'Product Inquiries', 'Learn about our IoT solutions, pricing, and features'],
                  ['02', 'Technical Support', 'Get help with installation, troubleshooting, or maintenance'],
                  ['03', 'Partnership', 'Explore collaboration and business opportunities'],
                  ['04', 'Feedback', 'Share your experience and suggestions for improvement'],
                ].map(([num, title, text]) => (
                  <div key={num} className="ct-why-item">
                    <div className="ct-why-number">{num}</div>
                    <div>
                      <h4 className="ct-why-item-title">{title}</h4>
                      <p className="ct-why-item-text">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ct-hours-box">
              <h3 className="ct-hours-title">Office Hours</h3>
              <div className="ct-hours-grid">
                {[
                  ['Monday – Friday', '9:00 AM – 6:00 PM'],
                  ['Saturday', '9:00 AM – 2:00 PM'],
                  ['Sunday', 'Closed'],
                ].map(([day, time]) => (
                  <div key={day} className="ct-hour-item">
                    <span className="ct-day-label">{day}</span>
                    <span className="ct-time-label">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; }

        /* ── Base ────────────────────────────────────────── */
        .ct-container {
          max-width: 100%;
          width: 100%;
          font-family: 'Work Sans', sans-serif;
          background: #fafaf8;
          overflow-x: hidden;
        }

        /* Hero */
        .ct-editorial-header {
          padding: clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem);
          background: #1a2f0d;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .ct-hero-layout {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 6rem;
          align-items: center;
        }
        .ct-hero-left { position: relative; }
        .ct-label-box {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 2px solid #f4a220;
          font-size: 0.7rem;
          letter-spacing: 4px;
          font-weight: 700;
          margin-bottom: 2.5rem;
          color: #f4a220;
          background: rgba(244,162,32,0.05);
        }
        .ct-main-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5.5vw, 4.5rem);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: clamp(-0.5px, -0.04em, -2px);
          color: white;
          text-transform: uppercase;
        }
        .ct-headline-italic { font-style: italic; font-weight: 400; color: #8fbc5e; }
        .ct-headline-accent { color: #f4a220; }
        .ct-hero-right {
          padding-left: 3rem;
          border-left: 3px solid #f4a220;
        }
        .ct-header-desc {
          font-size: clamp(0.9rem, 2vw, 1.15rem);
          line-height: 1.8;
          color: rgba(255,255,255,0.95);
          font-weight: 300;
        }

        /* Info Cards */
        .ct-info-section {
          padding: clamp(3rem, 6vw, 6rem) clamp(1.25rem, 4vw, 3rem);
          background: #fafaf8;
        }
        .ct-info-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .ct-info-card {
          color: white;
          padding: 3rem;
          position: relative;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .ct-info-card--dark  { background: #1a2f0d; }
        .ct-info-card--green { background: #6b9e3e; }
        .ct-info-card--amber { background: #f4a220; }
        .ct-info-icon {
          width: 70px; height: 70px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 2rem;
        }
        .ct-info-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: white;
        }
        .ct-info-link {
          color: white; font-size: 1rem; font-weight: 400;
          margin-bottom: 0.5rem; opacity: 0.9;
          display: block; transition: opacity 0.3s;
        }
        .ct-info-link:hover { opacity: 1; }
        .ct-info-text {
          color: rgba(255,255,255,0.85);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-top: 0.5rem;
        }
        .ct-card-corner {
          position: absolute; bottom: 0; right: 0;
          width: 60px; height: 60px;
          background: rgba(255,255,255,0.2);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        /* Form Section */
        .ct-form-section {
          padding: clamp(4rem, 7vw, 8rem) clamp(1.25rem, 4vw, 3rem);
          background: white;
        }
        .ct-form-layout {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        .ct-form-header { margin-bottom: 3rem; }
        .ct-section-label {
          font-size: 0.75rem; letter-spacing: 3px;
          font-weight: 700; color: #f4a220; margin-bottom: 1.5rem;
        }
        .ct-form-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.75rem, 4vw, 3rem);
          font-weight: 700;
          line-height: 1.1;
          color: #1a2f0d;
          margin-bottom: 1rem;
        }
        .ct-form-subtitle { font-size: 1rem; color: #666; line-height: 1.6; }
        .ct-form { display: flex; flex-direction: column; gap: 2rem; }
        .ct-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .ct-form-group { display: flex; flex-direction: column; gap: 0.75rem; }
        .ct-label {
          font-size: 0.75rem; font-weight: 700;
          color: #1a2f0d; letter-spacing: 2px;
        }
        .ct-input, .ct-textarea {
          padding: 1rem 1.5rem;
          border: 2px solid #e0e0e0;
          border-radius: 0;
          font-size: 1rem;
          font-family: 'Work Sans', sans-serif;
          width: 100%;
          outline: none;
          background: white;
          transition: border-color 0.3s;
        }
        .ct-input:focus, .ct-textarea:focus { border-color: #f4a220; }
        .ct-textarea { resize: vertical; }
        .ct-submit-btn {
          background: #6b9e3e;
          color: white;
          border: none;
          padding: 1.2rem 2.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s;
          width: fit-content;
          align-self: flex-start;
        }
        .ct-submit-btn:hover {
          background: #5a8734;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(107,158,62,0.3);
        }

        /* Side Content */
        .ct-side-content { display: flex; flex-direction: column; gap: 3rem; }
        .ct-why-box {
          background: linear-gradient(135deg, #2d5016, #6b9e3e);
          padding: 3rem;
          color: white;
          box-shadow: 20px 20px 0 #f4a220;
        }
        .ct-why-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem; font-weight: 700;
          color: white; margin-bottom: 2.5rem;
        }
        .ct-why-list { display: flex; flex-direction: column; gap: 2rem; }
        .ct-why-item { display: flex; gap: 1.5rem; align-items: flex-start; }
        .ct-why-number {
          font-size: 1.5rem;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          color: #f4a220;
          flex-shrink: 0;
          width: 40px;
        }
        .ct-why-item-title { font-size: 1.1rem; font-weight: 700; color: white; margin-bottom: 0.5rem; }
        .ct-why-item-text { font-size: 0.9rem; color: rgba(255,255,255,0.85); line-height: 1.6; }

        .ct-hours-box {
          background: #fafaf8;
          padding: 2.5rem;
          border: 3px solid #1a2f0d;
        }
        .ct-hours-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem; font-weight: 700;
          color: #1a2f0d; margin-bottom: 2rem;
        }
        .ct-hours-grid { display: flex; flex-direction: column; gap: 1.5rem; }
        .ct-hour-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e0e0e0;
        }
        .ct-day-label { font-size: 0.95rem; font-weight: 600; color: #333; }
        .ct-time-label { font-size: 0.9rem; color: #666; font-style: italic; }

        /* ── Tablet (≤ 1024px) ──────────────────────────── */
        @media (max-width: 1024px) {
          .ct-hero-layout { gap: 3.5rem; }
          .ct-info-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .ct-info-card { min-height: auto; padding: 2.5rem; }
          .ct-form-layout { grid-template-columns: 1fr; gap: 3rem; }
          .ct-why-box { box-shadow: 15px 15px 0 #f4a220; }
        }

        /* ── Mobile (≤ 768px) ───────────────────────────── */
        @media (max-width: 768px) {
          /* Hero */
          .ct-hero-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .ct-hero-left { text-align: center; }
          .ct-label-box { margin-bottom: 1.5rem; }
          .ct-main-headline {
            font-size: clamp(2rem, 9vw, 3.2rem);
            text-align: center;
            letter-spacing: -0.5px;
          }
          .ct-hero-right {
            padding-left: 0;
            border-left: none;
            border-top: 3px solid #f4a220;
            padding-top: 2rem;
          }
          .ct-header-desc { text-align: center; }

          /* Info cards */
          .ct-info-grid { grid-template-columns: 1fr; }

          /* Form layout */
          .ct-form-layout { grid-template-columns: 1fr; gap: 3rem; }
          .ct-form-row { grid-template-columns: 1fr; gap: 1.5rem; }
          .ct-side-content { order: -1; }
          .ct-why-box { box-shadow: 10px 10px 0 #f4a220; }
          .ct-submit-btn { width: 100%; justify-content: center; }
        }

        /* ── Small Mobile (≤ 480px) ─────────────────────── */
        @media (max-width: 480px) {
          .ct-main-headline { font-size: clamp(1.75rem, 9vw, 2.5rem); }
          .ct-info-card { padding: 2rem; }
          .ct-why-box { padding: 2rem; box-shadow: 8px 8px 0 #f4a220; }
          .ct-why-title { font-size: 1.6rem; margin-bottom: 1.75rem; }
          .ct-hours-box { padding: 1.75rem; }
          .ct-form-title { font-size: 1.6rem; }
          .ct-hour-item { flex-direction: column; align-items: flex-start; gap: 0.25rem; }
        }

        /* ── Extra small (≤ 380px) ──────────────────────── */
        @media (max-width: 380px) {
          .ct-main-headline { font-size: 8vw; letter-spacing: 0; }
          .ct-info-card { padding: 1.5rem; }
          .ct-why-item { gap: 1rem; }
          .ct-why-number { font-size: 1.2rem; width: 30px; }
        }
      `}</style>
    </div>
  );
};

export default Contact;