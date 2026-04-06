// src/pages/ProductDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 3;

  // Find the specific product based on the URL parameter
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  // Handle Add to Cart for the single product
  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`, {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#fff",
        color: "#000000",
      },
    });
  };

  if (!product) {
    return (
      <div style={styles.noProducts}>
        <div style={styles.noProductsIcon}>∅</div>
        <p style={styles.noProductsText}>Product not found.</p>
        <Link to="/products" style={styles.resetButton}>
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Toaster reverseOrder={true} />

      {/* Editorial Hero Section - Specific to this product */}
      <section style={styles.editorialHeader} className="products-hero">
        <div style={styles.heroLayout} className="hero-layout">
          <div style={styles.heroLeft}>
            <div style={styles.labelBox}>{product.category}</div>
            <h1 style={styles.mainHeadline}>
              {product.name.split(" ").slice(0, -1).join(" ")}
              <br />
              <span style={styles.headlineItalic}>{product.name.split(" ").pop()}</span>
            </h1>
          </div>

          <div style={styles.heroRight}>
            <p style={styles.headerQuote}>{product.description}</p>
          </div>
        </div>
      </section>

      {/* Main Product Details Section */}
      <section style={styles.detailSection}>
        <div style={styles.detailGrid} className="detail-grid">
          {/* Left: Product Image */}
          <div style={styles.imageColumn}>
            <div style={styles.imageWrapper}>
              <img src={product.image} alt={product.name} style={styles.mainImage} />
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div style={styles.infoColumn}>
            <div style={styles.sectionLabel}>— PRODUCT OVERVIEW</div>
            <h2 style={styles.infoTitle}>Why Choose {product.name}</h2>
            <p style={styles.infoText}>{product.description}</p>
            
            {/* Displaying Features from products.js */}
            <div style={styles.featuresBox}>
              <h3 style={styles.featureTitle}>Key Features:</h3>
              <ul style={styles.featureList}>
                {product.features?.map((feature, i) => (
                  <li key={i} style={styles.featureItem}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div style={styles.purchaseBox}>
              <div style={styles.productPrice}>₹{product.price.toLocaleString()}</div>
              <button onClick={handleAddToCart} style={styles.cartButtonLarge}>
                ADD TO CART
              </button>
            </div>
            
            <Link to="/products" style={styles.backLink}>
              ← Back to All Products
            </Link>
          </div>
        </div>
      </section>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');

          * { margin: 0; padding: 0; box-sizing: border-box; }

          @media (max-width: 992px) {
            .detail-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            .hero-layout { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }

          @media (max-width: 768px) {
            .hero-headline { font-size: 2.5rem !important; }
            .products-hero { padding: 3rem 1.5rem !important; }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "100%",
    width: "100%",
    fontFamily: "'Work Sans', sans-serif",
    background: "#fafaf8",
    overflowX: "hidden",
  },
  editorialHeader: {
    padding: "6rem 3rem 4rem",
    background: "#1a2f0d",
    color: "white",
    position: "relative",
  },
  heroLayout: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },
  heroLeft: { position: "relative" },
  labelBox: {
    display: "inline-block",
    padding: "0.5rem 1.5rem",
    border: "2px solid #f4a220",
    fontSize: "0.7rem",
    letterSpacing: "4px",
    fontWeight: "700",
    marginBottom: "2rem",
    color: "#f4a220",
  },
  mainHeadline: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "4rem",
    fontWeight: "900",
    lineHeight: "1",
    color: "white",
    textTransform: "uppercase",
  },
  headlineItalic: { fontStyle: "italic", fontWeight: "400", color: "#8fbc5e" },
  heroRight: { paddingLeft: "2rem", borderLeft: "2px solid #f4a220" },
  headerQuote: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    color: "rgba(255,255,255,0.9)",
    fontStyle: "italic",
  },
  detailSection: { padding: "6rem 3rem", background: "white" },
  detailGrid: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "6rem",
  },
  imageWrapper: {
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },
  mainImage: { width: "100%", display: "block", objectFit: "cover" },
  sectionLabel: {
    fontSize: "0.75rem",
    letterSpacing: "3px",
    fontWeight: "700",
    color: "#f4a220",
    marginBottom: "1rem",
  },
  infoTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.5rem",
    color: "#1a2f0d",
    marginBottom: "1.5rem",
  },
  infoText: { fontSize: "1.05rem", lineHeight: "1.8", color: "#444", marginBottom: "2rem" },
  featuresBox: { marginBottom: "2.5rem" },
  featureTitle: { fontSize: "1.1rem", fontWeight: "700", marginBottom: "1rem", color: "#1a2f0d" },
  featureList: { listStyle: "none" },
  featureItem: { marginBottom: "0.5rem", color: "#555", fontSize: "0.95rem" },
  purchaseBox: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    paddingTop: "2rem",
    borderTop: "1px solid #eee",
    marginBottom: "2rem",
  },
  productPrice: { fontSize: "2.5rem", fontWeight: "700", color: "#f4a220" },
  cartButtonLarge: {
    padding: "1.2rem 3rem",
    background: "#6b9e3e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  backLink: { color: "#666", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600" },
  noProducts: { textAlign: "center", padding: "10rem 2rem" },
  noProductsIcon: { fontSize: "5rem", color: "#f4a220", marginBottom: "1rem" },
  noProductsText: { fontSize: "1.2rem", color: "#666", marginBottom: "2rem" },
  resetButton: {
    padding: "1rem 2rem",
    background: "#1a2f0d",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
  },
};

export default ProductDetails;