// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { Sprout, Target, Users, TrendingUp } from "lucide-react";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div style={styles.container}>
      {/* Editorial Hero Section - Compact & Bright */}
      <section style={styles.editorialHero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroHeadline}>
            REVOLUTIONIZING<br/>
            <span style={styles.heroItalic}>AGRICULTURE</span>
          </h1>
          <p style={styles.heroDescription}>
            Pioneering sustainable farming solutions with cutting-edge technology
          </p>
          <Link to='/products'>
            <button style={styles.heroButton}>EXPLORE PRODUCTS</button>
          </Link>
        </div>
      </section>

      {/* Mission Section with Editorial Layout */}
      <section style={styles.missionSection}>
        <div style={styles.missionContainer}>
          <div style={styles.missionLeft}>
            <div style={styles.missionImageBox}>
              <div style={styles.missionImageOverlay}>OUR MISSION</div>
            </div>
          </div>
          <div style={styles.missionRight}>
            <div style={styles.sectionLabel}>— WHAT DRIVES US</div>
            <h2 style={styles.missionTitle}>
              Transforming Agriculture<br/>
              <span style={styles.missionTitleAccent}>Through Innovation</span>
            </h2>
            <p style={styles.missionText}>
              At GROWTOPIA, we're committed to transforming agriculture through innovative 
              technology and sustainable practices. Our team combines expertise in agritech, 
              IoT, and environmental science to create solutions that empower farmers and 
              promote food security worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>5K+</div>
            <div style={styles.statLabel}>Farmers Empowered</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>85%</div>
            <div style={styles.statLabel}>Yield Increase</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>40%</div>
            <div style={styles.statLabel}>Water Saved</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>95%</div>
            <div style={styles.statLabel}>Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* Features Section - Editorial Cards */}
      <section style={styles.featuresSection}>
        <div style={styles.featuresHeader}>
          <div style={styles.sectionLabel}>— WHY CHOOSE US</div>
          <h2 style={styles.featuresTitle}>What Makes Us Different</h2>
        </div>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard1}>
            <div style={styles.featureIconContainer}>
              <Sprout size={36} color="white" />
            </div>
            <h3 style={styles.featureCardTitle}>Sustainable Solutions</h3>
            <p style={styles.featureCardText}>
              Eco-friendly products that protect the environment while boosting productivity
            </p>
            <div style={styles.featureCorner}></div>
          </div>

          <div style={styles.featureCard2}>
            <div style={styles.featureIconContainer}>
              <Target size={36} color="white" />
            </div>
            <h3 style={styles.featureCardTitle}>Precision Technology</h3>
            <p style={styles.featureCardText}>
              IoT-powered tools for data-driven farming decisions
            </p>
            <div style={styles.featureCorner}></div>
          </div>

          <div style={styles.featureCard3}>
            <div style={styles.featureIconContainer}>
              <Users size={36} color="white" />
            </div>
            <h3 style={styles.featureCardTitle}>Expert Support</h3>
            <p style={styles.featureCardText}>
              Dedicated team to help you succeed at every step
            </p>
            <div style={styles.featureCorner}></div>
          </div>

          <div style={styles.featureCard4}>
            <div style={styles.featureIconContainer}>
              <TrendingUp size={36} color="white" />
            </div>
            <h3 style={styles.featureCardTitle}>Proven Results</h3>
            <p style={styles.featureCardText}>
              Increased yields and reduced costs for farmers nationwide
            </p>
            <div style={styles.featureCorner}></div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={styles.productsSection}>
        <div style={styles.productsHeader}>
          <div style={styles.productsLabelContainer}>
            <div style={styles.productsLabel}>FEATURED PRODUCTS</div>
            <div style={styles.productsLabelLine}></div>
          </div>
          <h2 style={styles.productsTitle}>Our Solutions</h2>
        </div>
        
        <div style={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={styles.productCard}
            >
              <div style={styles.productImageWrapper}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
                />
              </div>
              <div style={styles.productContent}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
                <div style={styles.productFooter}>
                  <p style={styles.productPrice}>₹{product.price.toLocaleString()}</p>
                  <button style={styles.viewButton}>VIEW DETAILS</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div style={styles.viewAllContainer}>
          <Link to='/products'>
            <button style={styles.viewAllButton}>VIEW ALL PRODUCTS</button>
          </Link>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>
            Ready to Transform <span style={styles.ctaTitleAccent}>Your Farm?</span>
          </h2>
          <p style={styles.ctaText}>
            Join thousands of farmers who are already using GROWTOPIA solutions
          </p>
          <Link to='/contact'>
            <button style={styles.ctaButton}>GET STARTED TODAY</button>
          </Link>
        </div>
      </section>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          a {
            text-decoration: none;
          }

          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
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
    overflow: 'hidden'
  },
  // Editorial Hero - Compact & Bright - No Label
  editorialHero: {
    backgroundImage: "linear-gradient(to bottom, rgba(26, 47, 13, 0.3), rgba(26, 47, 13, 0.5)), url('/img2.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '60vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'transparent'
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '800px'
  },
  heroHeadline: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    letterSpacing: '-2px',
    color: 'white',
    textTransform: 'uppercase',
    marginBottom: '1.2rem'
  },
  heroItalic: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#8fbc5e'
  },
  heroDescription: {
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    lineHeight: '1.6',
    color: 'rgba(255,255,255,0.95)',
    marginBottom: '2rem',
    fontWeight: '300'
  },
  heroButton: {
    background: '#f4a220',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  // Mission Section
  missionSection: {
    padding: '6rem 3rem',
    background: 'white'
  },
  missionContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '380px 1fr',
    gap: '4rem',
    alignItems: 'center'
  },
  missionLeft: {
    position: 'relative'
  },
  missionImageBox: {
    height: '450px',
    background: 'linear-gradient(135deg, #2d5016, #6b9e3e)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '20px 20px 0 #f4a220'
  },
  missionImageOverlay: {
    fontSize: '2.2rem',
    fontFamily: "'Playfair Display', serif",
    color: 'white',
    fontWeight: '700',
    transform: 'rotate(-90deg)',
    whiteSpace: 'nowrap'
  },
  missionRight: {
    position: 'relative'
  },
  sectionLabel: {
    fontSize: '0.7rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220',
    marginBottom: '1.2rem'
  },
  missionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: '700',
    lineHeight: '1.2',
    color: '#1a2f0d',
    marginBottom: '1.5rem'
  },
  missionTitleAccent: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#6b9e3e'
  },
  missionText: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#333'
  },
  // Stats Section
  statsSection: {
    padding: '5rem 3rem',
    background: '#1a2f0d'
  },
  statsGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2.5rem'
  },
  statCard: {
    textAlign: 'center',
    padding: '1.5rem',
    borderLeft: '3px solid #f4a220'
  },
  statNumber: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '900',
    color: 'white',
    lineHeight: '1',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.7)',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  // Features Section
  featuresSection: {
    padding: '6rem 3rem',
    background: '#fafaf8'
  },
  featuresHeader: {
    maxWidth: '1400px',
    margin: '0 auto 3.5rem',
    textAlign: 'center'
  },
  featuresTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: '700',
    color: '#1a2f0d'
  },
  featuresGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem'
  },
  featureCard1: {
    background: '#1a2f0d',
    color: 'white',
    padding: '2.5rem',
    position: 'relative',
    minHeight: '240px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  featureCard2: {
    background: '#6b9e3e',
    color: 'white',
    padding: '2.5rem',
    position: 'relative',
    minHeight: '240px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  featureCard3: {
    background: '#f4a220',
    color: 'white',
    padding: '2.5rem',
    position: 'relative',
    minHeight: '240px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  featureCard4: {
    background: '#2d5016',
    color: 'white',
    padding: '2.5rem',
    position: 'relative',
    minHeight: '240px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  featureIconContainer: {
    width: '64px',
    height: '64px',
    background: 'rgba(255,255,255,0.15)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem'
  },
  featureCardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: '0.8rem',
    color: 'white'
  },
  featureCardText: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    color: 'rgba(255,255,255,0.9)'
  },
  featureCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '50px',
    height: '50px',
    background: 'rgba(255,255,255,0.2)',
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
  },
  // Products Section
  productsSection: {
    padding: '6rem 3rem',
    background: 'white'
  },
  productsHeader: {
    maxWidth: '1400px',
    margin: '0 auto 4rem',
    textAlign: 'center'
  },
  productsLabelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1.2rem'
  },
  productsLabel: {
    fontSize: '0.7rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220'
  },
  productsLabelLine: {
    width: '60px',
    height: '2px',
    background: '#f4a220'
  },
  productsTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    color: '#1a2f0d'
  },
  productsGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem'
  },
  productCard: {
    background: 'white',
    border: '3px solid #1a2f0d',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    display: 'flex',
    flexDirection: 'column'
  },
  productImageWrapper: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
    background: '#f0f0f0'
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  productContent: {
    padding: '1.8rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  productName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1a2f0d',
    marginBottom: '0.8rem'
  },
  productDescription: {
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '1.2rem',
    flex: 1
  },
  productFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem'
  },
  productPrice: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#f4a220'
  },
  viewButton: {
    background: '#6b9e3e',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.4rem',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '1px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  viewAllContainer: {
    textAlign: 'center',
    marginTop: '3.5rem'
  },
  viewAllButton: {
    background: '#1a2f0d',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '0',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  // CTA Section - Compact
  ctaSection: {
    background: 'linear-gradient(135deg, #6b9e3e 0%, #2d5016 100%)',
    padding: '4rem 3rem',
    textAlign: 'center'
  },
  ctaContent: {
    maxWidth: '700px',
    margin: '0 auto'
  },
  ctaTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    color: 'white',
    lineHeight: '1.3',
    marginBottom: '1rem'
  },
  ctaTitleAccent: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#f4a220'
  },
  ctaText: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '1.8rem',
    fontWeight: '300'
  },
  ctaButton: {
    background: '#f4a220',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  }
};

export default Home;