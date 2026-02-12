// src/pages/Contact.jsx
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={styles.container}>
      {/* Editorial Hero Section */}
      <section style={styles.editorialHeader}>
        <div style={styles.heroLayout}>
          {/* Left side - Label and Title */}
          <div style={styles.heroLeft}>
            <div style={styles.labelBox}>CONTACT GROWTOPIA</div>
            <h1 style={styles.mainHeadline}>
              LET'S<br/>
              <span style={styles.headlineItalic}>START A</span><br/>
              <span style={styles.headlineAccent}>CONVERSATION</span>
            </h1>
          </div>
          
          {/* Right side - Description */}
          <div style={styles.heroRight}>
            <div style={styles.descContainer}>
              <p style={styles.headerDesc}>
                We'd love to hear from you. Whether you have questions about our products, 
                need support, or want to explore partnership opportunities, our team is ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section style={styles.infoCardsSection}>
        <div style={styles.infoCardsGrid}>
          <div style={styles.infoCard1}>
            <div style={styles.infoIconContainer}>
              <Mail size={32} color="white" />
            </div>
            <h3 style={styles.infoCardTitle}>Email Us</h3>
            <a href="mailto:info@growtopia.com" style={styles.infoCardLink}>
              info@growtopia.com
            </a>
            <a href="mailto:support@growtopia.com" style={styles.infoCardLink}>
              support@growtopia.com
            </a>
            <p style={styles.infoCardText}>We respond within 24 hours</p>
            <div style={styles.cardCorner}></div>
          </div>

          <div style={styles.infoCard2}>
            <div style={styles.infoIconContainer}>
              <Phone size={32} color="white" />
            </div>
            <h3 style={styles.infoCardTitle}>Call Us</h3>
            <a href="tel:+919876543210" style={styles.infoCardLink}>
              +91 98765 43210
            </a>
            <p style={styles.infoCardText}>Mon-Sat: 9:00 AM - 6:00 PM</p>
            <div style={styles.cardCorner}></div>
          </div>

          <div style={styles.infoCard3}>
            <div style={styles.infoIconContainer}>
              <Clock size={32} color="white" />
            </div>
            <h3 style={styles.infoCardTitle}>Quick Response</h3>
            <p style={styles.infoCardText}>
              Our dedicated support team ensures prompt responses to all inquiries. 
              Reach out anytime and we'll get back to you as soon as possible.
            </p>
            <div style={styles.cardCorner}></div>
          </div>
        </div>
      </section>

      {/* Form Section with Editorial Layout */}
      <section style={styles.formSection}>
        <div style={styles.formLayout}>
          {/* Left - Form */}
          <div style={styles.formContainer}>
            <div style={styles.formHeader}>
              <div style={styles.sectionLabel}>— GET IN TOUCH</div>
              <h2 style={styles.formTitle}>Send us a Message</h2>
              <p style={styles.formSubtitle}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>YOUR NAME *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your full name"
                />
              </div>

              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    placeholder="your@email.com"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>SUBJECT *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="What is this regarding?"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>MESSAGE *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                />
              </div>

              <button type="submit" style={styles.submitBtn}>
                <Send size={20} />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right - Additional Info */}
          <div style={styles.sideContent}>
            <div style={styles.whyContactBox}>
              <h3 style={styles.whyContactTitle}>Why Contact Us?</h3>
              <div style={styles.whyContactList}>
                <div style={styles.whyContactItem}>
                  <div style={styles.whyContactNumber}>01</div>
                  <div>
                    <h4 style={styles.whyContactItemTitle}>Product Inquiries</h4>
                    <p style={styles.whyContactItemText}>
                      Learn about our IoT solutions, pricing, and features
                    </p>
                  </div>
                </div>

                <div style={styles.whyContactItem}>
                  <div style={styles.whyContactNumber}>02</div>
                  <div>
                    <h4 style={styles.whyContactItemTitle}>Technical Support</h4>
                    <p style={styles.whyContactItemText}>
                      Get help with installation, troubleshooting, or maintenance
                    </p>
                  </div>
                </div>

                <div style={styles.whyContactItem}>
                  <div style={styles.whyContactNumber}>03</div>
                  <div>
                    <h4 style={styles.whyContactItemTitle}>Partnership</h4>
                    <p style={styles.whyContactItemText}>
                      Explore collaboration and business opportunities
                    </p>
                  </div>
                </div>

                <div style={styles.whyContactItem}>
                  <div style={styles.whyContactNumber}>04</div>
                  <div>
                    <h4 style={styles.whyContactItemTitle}>Feedback</h4>
                    <p style={styles.whyContactItemText}>
                      Share your experience and suggestions for improvement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.additionalInfo}>
              <h3 style={styles.additionalTitle}>Office Hours</h3>
              <div style={styles.hoursGrid}>
                <div style={styles.hourItem}>
                  <span style={styles.dayLabel}>Monday - Friday</span>
                  <span style={styles.timeLabel}>9:00 AM - 6:00 PM</span>
                </div>
                <div style={styles.hourItem}>
                  <span style={styles.dayLabel}>Saturday</span>
                  <span style={styles.timeLabel}>9:00 AM - 2:00 PM</span>
                </div>
                <div style={styles.hourItem}>
                  <span style={styles.dayLabel}>Sunday</span>
                  <span style={styles.timeLabel}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Footer Element */}
      <section style={styles.footerDecor}>
        <div style={styles.footerPattern}></div>
        <div style={styles.footerText}>GROWTOPIA — Always Here to Help</div>
      </section>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          input:focus, textarea:focus {
            border-color: #f4a220 !important;
          }

          button:hover {
            background: #5a8734 !important;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(107, 158, 62, 0.3);
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    width: '100%',
    fontFamily: "'Work Sans', sans-serif",
    background: '#fafaf8',
    overflowX: 'hidden'
  },
  // Editorial Header
  editorialHeader: {
    padding: '4rem 3rem 3rem',
    background: '#1a2f0d',
    color: 'white',
    position: 'relative',
    overflow: 'hidden'
  },
  heroLayout: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: '6rem',
    alignItems: 'center'
  },
  heroLeft: {
    position: 'relative'
  },
  labelBox: {
    display: 'inline-block',
    padding: '0.5rem 1.5rem',
    border: '2px solid #f4a220',
    fontSize: '0.7rem',
    letterSpacing: '4px',
    fontWeight: '700',
    marginBottom: '2.5rem',
    color: '#f4a220',
    background: 'rgba(244, 162, 32, 0.05)'
  },
  mainHeadline: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4.5rem',
    fontWeight: '900',
    lineHeight: '0.95',
    letterSpacing: '-2px',
    color: 'white',
    textTransform: 'uppercase'
  },
  headlineItalic: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#8fbc5e'
  },
  headlineAccent: {
    color: '#f4a220'
  },
  heroRight: {
    position: 'relative',
    paddingLeft: '3rem',
    borderLeft: '3px solid #f4a220'
  },
  descContainer: {
    position: 'relative'
  },
  headerDesc: {
    fontSize: '1.15rem',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,0.95)',
    fontWeight: '300'
  },
  // Info Cards Section
  infoCardsSection: {
    padding: '6rem 3rem',
    background: '#fafaf8'
  },
  infoCardsGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem'
  },
  infoCard1: {
    background: '#1a2f0d',
    color: 'white',
    padding: '3rem',
    position: 'relative',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  infoCard2: {
    background: '#6b9e3e',
    color: 'white',
    padding: '3rem',
    position: 'relative',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  infoCard3: {
    background: '#f4a220',
    color: 'white',
    padding: '3rem',
    position: 'relative',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  infoIconContainer: {
    width: '70px',
    height: '70px',
    background: 'rgba(255,255,255,0.15)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem'
  },
  infoCardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: 'white'
  },
  infoCardLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '400',
    marginBottom: '0.5rem',
    opacity: '0.9',
    display: 'block',
    transition: 'opacity 0.3s'
  },
  infoCardText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    marginTop: '0.5rem'
  },
  cardCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '60px',
    height: '60px',
    background: 'rgba(255,255,255,0.2)',
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
  },
  // Form Section
  formSection: {
    padding: '8rem 3rem',
    background: 'white'
  },
  formLayout: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.3fr 1fr',
    gap: '5rem',
    alignItems: 'start'
  },
  formContainer: {
    position: 'relative'
  },
  formHeader: {
    marginBottom: '3rem'
  },
  sectionLabel: {
    fontSize: '0.75rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220',
    marginBottom: '1.5rem'
  },
  formTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3rem',
    fontWeight: '700',
    lineHeight: '1.1',
    color: '#1a2f0d',
    marginBottom: '1rem'
  },
  formSubtitle: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#1a2f0d',
    letterSpacing: '2px'
  },
  input: {
    padding: '1rem 1.5rem',
    border: '2px solid #e0e0e0',
    borderRadius: '0',
    fontSize: '1rem',
    fontFamily: "'Work Sans', sans-serif",
    width: '100%',
    transition: 'border-color 0.3s',
    outline: 'none',
    background: 'white'
  },
  textarea: {
    padding: '1rem 1.5rem',
    border: '2px solid #e0e0e0',
    borderRadius: '0',
    fontSize: '1rem',
    fontFamily: "'Work Sans', sans-serif",
    resize: 'vertical',
    transition: 'border-color 0.3s',
    outline: 'none',
    background: 'white'
  },
  submitBtn: {
    background: '#6b9e3e',
    color: 'white',
    border: 'none',
    padding: '1.2rem 2.5rem',
    borderRadius: '0',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '2px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    transition: 'all 0.3s',
    width: 'fit-content',
    alignSelf: 'flex-start'
  },
  // Side Content
  sideContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  },
  whyContactBox: {
    background: 'linear-gradient(135deg, #2d5016, #6b9e3e)',
    padding: '3rem',
    color: 'white',
    boxShadow: '20px 20px 0 #f4a220'
  },
  whyContactTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '2.5rem'
  },
  whyContactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  whyContactItem: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start'
  },
  whyContactNumber: {
    fontSize: '1.5rem',
    fontFamily: "'Playfair Display', serif",
    fontWeight: '700',
    color: '#f4a220',
    flexShrink: 0,
    width: '40px'
  },
  whyContactItemTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '0.5rem'
  },
  whyContactItemText: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.85)',
    lineHeight: '1.6'
  },
  additionalInfo: {
    background: '#fafaf8',
    padding: '2.5rem',
    border: '3px solid #1a2f0d'
  },
  additionalTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a2f0d',
    marginBottom: '2rem'
  },
  hoursGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  hourItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '1rem',
    borderBottom: '1px solid #e0e0e0'
  },
  dayLabel: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#333'
  },
  timeLabel: {
    fontSize: '0.9rem',
    color: '#666',
    fontStyle: 'italic'
  },
  // Footer Decor
  footerDecor: {
    padding: '4rem 3rem',
    background: '#1a2f0d',
    position: 'relative',
    overflow: 'hidden'
  },
  footerPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: '0.03',
    background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)'
  },
  footerText: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontFamily: "'Playfair Display', serif",
    color: '#f4a220',
    position: 'relative',
    letterSpacing: '2px'
  }
};

export default Contact;