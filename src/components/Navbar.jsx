// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          🌱 GROWTOPIA
        </Link>

        <button 
          style={styles.menuBtn} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul style={{...styles.navLinks, ...(isOpen ? styles.navLinksMobile : {})}}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/products" style={styles.link}>Products</Link></li>
          <li><Link to="/about" style={styles.link}>About</Link></li>
          <li><Link to="/blog" style={styles.link}>Blog</Link></li>
          <li><Link to="/contact" style={styles.link}>Contact</Link></li>
          <li>
            <Link to="/cart" style={styles.cartBtn}>
              <ShoppingCart size={20} />
              Cart
              {cartCount > 0 && (
                <span style={styles.cartCount}>{cartCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#2d5016',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    alignItems: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s'
  },
  cartBtn: {
    background: '#f4a220',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'relative'
  },
  cartCount: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    background: '#e63946',
    color: 'white',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 'bold'
  },
  menuBtn: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer'
  },
  navLinksMobile: {
    display: 'flex'
  }
};

export default Navbar;