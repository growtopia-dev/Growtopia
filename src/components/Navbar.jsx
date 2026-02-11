// src/components/Navbar.jsx - FULLY MOBILE RESPONSIVE
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.container}>
          {/* Logo - Child 1 (Left Side) */}
          <Link to='/' style={styles.logo}>
            <img
              src={process.env.PUBLIC_URL + "/growtopia_logo.webp"}
              alt='logo'
              style={styles.logoImg}
            />
            GROWTOPIA
          </Link>

          {/* Right Section Group - Child 2 (Right Side) */}
          <div style={styles.rightSection}>
            {/* Desktop Navigation Links - Now inside the right section */}
            <ul style={styles.navLinksDesktop}>
              <li><Link to='/' style={styles.link}>Home</Link></li>
              <li><Link to='/products' style={styles.link}>Products</Link></li>
              <li><Link to='/about' style={styles.link}>About</Link></li>
              <li><Link to='/blog' style={styles.link}>Blog</Link></li>
              <li><Link to='/contact' style={styles.link}>Contact</Link></li>
            </ul>

            <div style={styles.navActions}>
              <Link to='/cart' style={styles.cartBtn}>
                <ShoppingCart size={20} />
                {cartCount > 0 && <span style={styles.cartCount}>{cartCount}</span>}
              </Link>

              <button
                style={styles.menuBtn}
                onClick={toggleMenu}
                aria-label='Toggle menu'
                className="menu-toggle-btn"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div style={styles.overlay} onClick={toggleMenu}>
          <div style={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <Link to='/' style={styles.mobileLink} onClick={toggleMenu}>Home</Link>
            <Link to='/products' style={styles.mobileLink} onClick={toggleMenu}>Products</Link>
            <Link to='/about' style={styles.mobileLink} onClick={toggleMenu}>About</Link>
            <Link to='/blog' style={styles.mobileLink} onClick={toggleMenu}>Blog</Link>
            <Link to='/contact' style={styles.mobileLink} onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  nav: {
    background: "rgba(45, 80, 22, 0.76)",
    backdropFilter: "blur(6px)",
    padding: "1rem 1.5rem",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "2rem", // Spacing between the link list and the cart/menu
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoImg: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2.5px solid #2d5016",
  },
  navLinksDesktop: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    alignItems: "center",
    margin: 0,
  },
  navActions: {
    display: "flex",
    alignItems: "center",
    // gap: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
  },
  cartBtn: {
    // background: "#f4a220",
    color: "white",
    padding: "0.6rem 0.75rem",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    position: "relative",
    transition: "all 0.3s",
    whiteSpace: "nowrap",
  },
  cartCount: {
    position: "absolute",
    top: "2px",
    right: "-2px",
    background: "#e63946",
    color: "white",
    borderRadius: "50%",
    width: "16px",
    height: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
  menuBtn: {
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "0.5rem",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.7)",
    zIndex: 999,
  },
  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "80%",
    maxWidth: "300px",
    height: "100vh",
    background: "#2d5016",
    padding: "5rem 2rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    overflowY: "auto",
  },
  mobileLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "500",
    padding: "0.75rem",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.3s",
  },
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

  @media (max-width: 768px) {

    nav a[href="/cart"] {
      padding: 0.6rem !important;
      border-radius: 50% !important;
      gap: 0 !important;
    }

    /* Hide desktop list on mobile */
    nav ul {
      display: none !important;
    }

    .menu-toggle-btn {
      display: block !important;
    }
  }

  @media (min-width: 769px) {
    .menu-toggle-btn {
      display: none !important;
    }
  }

  nav a:hover {
    opacity: 0.8;
  }
`;

if (typeof document !== "undefined" && !document.getElementById("navbar-styles")) {
  styleSheet.id = "navbar-styles";
  document.head.appendChild(styleSheet);
}

export default Navbar;