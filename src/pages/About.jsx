// src/pages/About.jsx
import React, { useState } from 'react';
import { cofounders, teamMembers } from '../data/team';
import { Mail } from 'lucide-react';

const TeamCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      style={styles.cardContainer}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div style={{
        ...styles.cardInner,
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}>
        <div style={styles.cardFront}>
          <div style={styles.memberAvatar}>
            <span style={styles.avatarIcon}>👤</span>
          </div>
          <h3 style={styles.memberName}>{member.name}</h3>
          <p style={styles.memberRole}>{member.role}</p>
        </div>

        <div style={styles.cardBack}>
          <h3 style={styles.memberNameBack}>{member.name}</h3>
          <p style={styles.memberRoleBack}>{member.role}</p>
          <p style={styles.memberBio}>{member.bio}</p>
          <a href={`mailto:${member.email}`} style={styles.emailLink}>
            <Mail size={16} /> {member.email}
          </a>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div style={styles.container}>
      {/* Refined Compact Hero Section */}
      <section style={styles.editorialHeader}>
        <div style={styles.heroLayout}>
          {/* Left side - Label and Title */}
          <div style={styles.heroLeft}>
            <div style={styles.labelBox}>ABOUT GROWTOPIA</div>
            <h1 style={styles.mainHeadline}>
              WHERE<br/>
              <span style={styles.headlineItalic}>INNOVATION</span><br/>
              MEETS<br/>
              <span style={styles.headlineAccent}>AGRICULTURE</span>
            </h1>
          </div>
          
          {/* Right side - Quote */}
          <div style={styles.heroRight}>
            <div style={styles.quoteContainer}>
              <p style={styles.headerQuote}>
                We don't just farm the land, we cultivate the future of sustainable agriculture 
                through technology, passion, and unwavering commitment to our farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Story Section */}
      <section style={styles.storySection}>
        <div style={styles.storyContainer}>
          <div style={styles.storyImagePlaceholder}>
            <div style={styles.imageOverlay}>EST. 2020</div>
          </div>
          
          <div style={styles.storyContent}>
            <div style={styles.sectionLabel}>— OUR STORY</div>
            <h2 style={styles.storyHeading}>
              Born from Vision,<br/>
              <span style={styles.storyHeadingAccent}>Driven by Purpose</span>
            </h2>
            
            <div style={styles.storyColumns}>
              <div style={styles.storyColumn}>
                <p style={styles.storyText}>
                  GROWTOPIA was founded with a vision to revolutionize agriculture through 
                  technology and innovation. We believe that sustainable farming practices 
                  combined with cutting-edge IoT solutions can address global food security 
                  challenges while protecting our environment.
                </p>
              </div>
              
              <div style={styles.storyColumn}>
                <p style={styles.storyText}>
                  Our journey began when three passionate individuals – Dipak Raval, Jenil 
                  Sanchaniya, and Rahul Khara – came together with a shared vision of 
                  transforming Indian agriculture. With backgrounds in technology, business, 
                  and operations, they assembled a talented team dedicated to making farming 
                  smarter, more efficient, and sustainable.
                </p>
              </div>
            </div>

            <div style={styles.pullQuote}>
              <div style={styles.pullQuoteText}>
                Today, GROWTOPIA serves farmers across India, providing innovative solutions 
                that increase yields, reduce costs, and promote environmentally friendly practices.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Mission Vision Cards */}
      <section style={styles.missionVisionSection}>
        <div style={styles.mvGrid}>
          <div style={styles.mvCard1}>
            <div style={styles.mvNumber}>01</div>
            <div style={styles.mvLabel}>MISSION</div>
            <h3 style={styles.mvTitle}>Empowering Farmers Through Innovation</h3>
            <p style={styles.mvText}>
              To empower farmers with innovative, affordable, and sustainable agricultural 
              technology that increases productivity while preserving the environment for 
              future generations.
            </p>
            <div style={styles.mvCorner}></div>
          </div>

          <div style={styles.mvCard2}>
            <div style={styles.mvNumber}>02</div>
            <div style={styles.mvLabel}>VISION</div>
            <h3 style={styles.mvTitle}>Leading India's Agritech Revolution</h3>
            <p style={styles.mvText}>
              To become India's leading agritech company, transforming farming through 
              technology and making sustainable agriculture accessible to every farmer.
            </p>
            <div style={styles.mvCorner}></div>
          </div>

          <div style={styles.mvCard3}>
            <div style={styles.mvNumber}>03</div>
            <div style={styles.mvLabel}>VALUES</div>
            <h3 style={styles.mvTitle}>Principles That Guide Us</h3>
            <p style={styles.mvText}>
              Innovation, Sustainability, Farmer-First Approach, Quality Excellence, and 
              Environmental Responsibility guide everything we do.
            </p>
            <div style={styles.mvCorner}></div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section style={styles.foundersSection}>
        <div style={styles.foundersHeader}>
          <div style={styles.foundersLabelContainer}>
            <div style={styles.foundersLabel}>THE VISIONARIES</div>
            <div style={styles.foundersLabelLine}></div>
          </div>
          <h2 style={styles.foundersTitle}>
            Meet Our Co-Founders
          </h2>
        </div>
        
        <div style={styles.teamGrid}>
          {cofounders.map((member, index) => (
            <div key={index} style={{
              ...styles.founderCardWrapper,
              animationDelay: `${index * 0.1}s`
            }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* Core Team Section */}
      <section style={styles.coreTeamSection}>
        <div style={styles.coreTeamHeader}>
          <div style={styles.coreTeamLabelContainer}>
            <div style={styles.coreTeamLabel}>THE TEAM</div>
            <div style={styles.coreTeamLabelLine}></div>
          </div>
          <h2 style={styles.coreTeamTitle}>Our Core Team</h2>
          <p style={styles.coreTeamSubtitle}>
            Dedicated individuals working tirelessly to bring innovation to agriculture
          </p>
        </div>
        
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{
              ...styles.teamCardWrapper,
              animationDelay: `${index * 0.1}s`
            }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Footer Element */}
      <section style={styles.footerDecor}>
        <div style={styles.footerPattern}></div>
        <div style={styles.footerText}>GROWTOPIA — Cultivating Tomorrow</div>
      </section>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .founder-card-wrapper, .team-card-wrapper {
            animation: slideUp 0.6s ease-out both;
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
    background: '#fafaf8'
  },
  // Compact Hero Section with Split Layout
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
    color: '#f4a220',
    position: 'relative'
  },
  heroRight: {
    position: 'relative',
    paddingLeft: '3rem',
    borderLeft: '3px solid #f4a220'
  },
  quoteContainer: {
    position: 'relative'
  },
  headerQuote: {
    fontSize: '1.15rem',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,0.95)',
    fontStyle: 'italic',
    fontWeight: '300'
  },
  // Story Section
  storySection: {
    padding: '8rem 3rem',
    background: 'white'
  },
  storyContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    gap: '5rem',
    alignItems: 'start'
  },
  storyImagePlaceholder: {
    height: '600px',
    background: 'linear-gradient(135deg, #2d5016, #6b9e3e)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '20px 20px 0 #f4a220'
  },
  imageOverlay: {
    fontSize: '3rem',
    fontFamily: "'Playfair Display', serif",
    color: 'white',
    fontWeight: '700',
    transform: 'rotate(-90deg)'
  },
  storyContent: {
    paddingTop: '2rem'
  },
  sectionLabel: {
    fontSize: '0.75rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220',
    marginBottom: '1.5rem'
  },
  storyHeading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3.5rem',
    fontWeight: '700',
    lineHeight: '1.1',
    color: '#1a2f0d',
    marginBottom: '3rem'
  },
  storyHeadingAccent: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#6b9e3e'
  },
  storyColumns: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    marginBottom: '3rem'
  },
  storyColumn: {
    position: 'relative'
  },
  storyText: {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#333'
  },
  pullQuote: {
    background: '#f4a220',
    padding: '2.5rem',
    marginTop: '3rem',
    position: 'relative',
    transform: 'translateX(-3rem)'
  },
  pullQuoteText: {
    fontSize: '1.3rem',
    lineHeight: '1.6',
    color: 'white',
    fontWeight: '600',
    fontFamily: "'Playfair Display', serif"
  },
  // Mission Vision Section
  missionVisionSection: {
    padding: '6rem 3rem',
    background: '#fafaf8'
  },
  mvGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem'
  },
  mvCard1: {
    background: '#1a2f0d',
    color: 'white',
    padding: '3rem',
    position: 'relative',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  mvCard2: {
    background: '#6b9e3e',
    color: 'white',
    padding: '3rem',
    position: 'relative',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  mvCard3: {
    background: '#f4a220',
    color: 'white',
    padding: '3rem',
    position: 'relative',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  mvNumber: {
    fontSize: '8rem',
    fontFamily: "'Playfair Display', serif",
    fontWeight: '900',
    position: 'absolute',
    top: '-2rem',
    right: '2rem',
    opacity: '0.1',
    lineHeight: '1'
  },
  mvLabel: {
    fontSize: '0.7rem',
    letterSpacing: '3px',
    fontWeight: '700',
    marginBottom: '1.5rem',
    opacity: '0.8'
  },
  mvTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    fontWeight: '700',
    lineHeight: '1.3',
    marginBottom: '1.5rem'
  },
  mvText: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    opacity: '0.9',
    flex: 1
  },
  mvCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '60px',
    height: '60px',
    background: 'rgba(255,255,255,0.2)',
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
  },
  // Founders Section
  foundersSection: {
    padding: '8rem 3rem',
    background: 'white'
  },
  foundersHeader: {
    maxWidth: '1400px',
    margin: '0 auto 5rem',
    textAlign: 'center'
  },
  foundersLabelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  },
  foundersLabel: {
    fontSize: '0.75rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220'
  },
  foundersLabelLine: {
    width: '60px',
    height: '2px',
    background: '#f4a220'
  },
  foundersTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4rem',
    fontWeight: '700',
    lineHeight: '1.1',
    color: '#1a2f0d'
  },
  founderCardWrapper: {
    className: 'founder-card-wrapper'
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  // Core Team Section
  coreTeamSection: {
    padding: '8rem 3rem',
    background: '#fafaf8'
  },
  coreTeamHeader: {
    maxWidth: '1400px',
    margin: '0 auto 5rem',
    textAlign: 'center'
  },
  coreTeamLabelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  },
  coreTeamLabel: {
    fontSize: '0.75rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220'
  },
  coreTeamLabelLine: {
    width: '60px',
    height: '2px',
    background: '#f4a220'
  },
  coreTeamTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4rem',
    fontWeight: '700',
    color: '#1a2f0d',
    marginBottom: '1rem'
  },
  coreTeamSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    fontStyle: 'italic'
  },
  teamCardWrapper: {
    className: 'team-card-wrapper'
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
  },
  // Flip card styles (1s transition preserved)
  cardContainer: {
    perspective: '1000px',
    height: '400px',
    cursor: 'pointer'
  },
  cardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 1s',
    transformStyle: 'preserve-3d'
  },
  cardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    background: 'white',
    padding: '2rem',
    border: '3px solid #1a2f0d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  },
  cardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    background: 'linear-gradient(135deg, #6b9e3e 0%, #2d5016 100%)',
    padding: '2rem',
    border: '3px solid #1a2f0d',
    transform: 'rotateY(180deg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  memberAvatar: {
    width: '120px',
    height: '120px',
    background: 'linear-gradient(135deg, #6b9e3e, #2d5016)',
    borderRadius: '50%',
    margin: '0 auto 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #f4a220'
  },
  avatarIcon: {
    fontSize: '4rem'
  },
  memberName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.6rem',
    color: '#1a2f0d',
    marginBottom: '0.5rem',
    fontWeight: '700'
  },
  memberRole: {
    fontSize: '1rem',
    color: '#6b9e3e',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.85rem'
  },
  memberNameBack: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.6rem',
    color: 'white',
    marginBottom: '0.5rem',
    fontWeight: '700'
  },
  memberRoleBack: {
    fontSize: '0.85rem',
    color: '#f4a220',
    fontWeight: '600',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  memberBio: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: 'white',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  emailLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f4a220',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: '600',
    background: 'rgba(255,255,255,0.1)',
    padding: '0.6rem 1.2rem',
    border: '1px solid #f4a220',
    transition: 'all 0.3s'
  }
};

export default About;