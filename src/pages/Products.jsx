// src/pages/Products.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/products";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

const Products = ({ onAddToCart }) => {
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 3;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
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

  return (
    <div style={styles.container}>
      <Toaster reverseOrder={true} />
      
      {/* Editorial Hero Section */}
      <section style={styles.editorialHeader}>
        <div style={styles.heroLayout}>
          <div style={styles.heroLeft}>
            <div style={styles.labelBox}>OUR SOLUTIONS</div>
            <h1 style={styles.mainHeadline}>
              INNOVATIVE<br/>
              <span style={styles.headlineItalic}>AGRICULTURAL</span><br/>
              <span style={styles.headlineAccent}>TECHNOLOGY</span>
            </h1>
          </div>
          
          <div style={styles.heroRight}>
            <div style={styles.quoteContainer}>
              <p style={styles.headerQuote}>
                Discover cutting-edge solutions designed to revolutionize farming,
                increase yields, and promote sustainable agriculture across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section style={styles.filterSection}>
        <div style={styles.filterContainer}>
          <div style={styles.filterHeader}>
            <div style={styles.sectionLabel}>— EXPLORE BY CATEGORY</div>
          </div>
          <div style={styles.categoryGrid}>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  ...styles.categoryCard,
                  ...(selectedCategory === category ? styles.categoryCardActive : {}),
                  animationDelay: `${index * 0.1}s`
                }}
                className="category-card"
              >
                <div style={styles.categoryNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div style={styles.categoryName}>{category}</div>
                <div style={styles.categoryCorner}></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section style={styles.productsSection}>
        <div style={styles.productsSectionHeader}>
          <div style={styles.productsLabelContainer}>
            <div style={styles.productsLabel}>
              {selectedCategory === "All" 
                ? "ALL PRODUCTS" 
                : selectedCategory.toUpperCase()}
            </div>
            <div style={styles.productsLabelLine}></div>
          </div>
          <div style={styles.productsCount}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
          </div>
        </div>

        <div style={styles.productsGrid}>
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={styles.productCard}>
            <Link to={`/product/${product.id}`} style={styles.productLink}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.productImage}
              />
              <span style={styles.categoryBadge}>{product.category}</span>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productDescription}>{product.description}</p>
              <p style={styles.productPrice}>
                ₹{product.price.toLocaleString()}
              </p>
            </Link>
            <div style={styles.buttonGroup}>
              <Link to={`/product/${product.id}`} style={styles.detailsButton}>
                View Details
              </Link>
              <button
                onClick={(e) => handleAddToCart(e, product)}
                style={styles.cartButton}
              >
                Add to Cart
              </button>
            </div>
          </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={styles.noProducts}>
            <div style={styles.noProductsIcon}>∅</div>
            <p style={styles.noProductsText}>No products found in this category.</p>
            <button 
              onClick={() => setSelectedCategory("All")}
              style={styles.resetButton}
            >
              View All Products
            </button>
          </div>
        )}
      </section>

      {/* Decorative Footer Element */}
      <section style={styles.footerDecor}>
        <div style={styles.footerPattern}></div>
        <div style={styles.footerText}>GROWTOPIA — Premium Agricultural Solutions</div>
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

          .product-card-wrapper, .category-card {
            animation: slideUp 0.6s ease-out both;
          }

          .product-card-wrapper:hover {
            transform: translateY(-5px);
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

  // Editorial Hero Section
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

  // Filter Section
  filterSection: {
    padding: '6rem 3rem',
    background: 'white'
  },
  filterContainer: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  filterHeader: {
    marginBottom: '3rem'
  },
  sectionLabel: {
    fontSize: '0.75rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220'
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem'
  },
  categoryCard: {
    background: 'white',
    border: '3px solid #1a2f0d',
    padding: '2rem 1.5rem',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    minHeight: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryCardActive: {
    background: '#1a2f0d',
    color: 'white'
  },
  categoryNumber: {
    fontSize: '2.5rem',
    fontFamily: "'Playfair Display', serif",
    fontWeight: '900',
    opacity: '0.15',
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    lineHeight: '1'
  },
  categoryName: {
    fontSize: '1rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textAlign: 'center',
    zIndex: 1
  },
  categoryCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '40px',
    height: '40px',
    background: '#f4a220',
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
    transition: 'all 0.3s ease'
  },

  // Products Section
  productsSection: {
    padding: '6rem 3rem',
    background: '#fafaf8'
  },
  productsSectionHeader: {
    maxWidth: '1400px',
    margin: '0 auto 4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productsLabelContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  },
  productsLabel: {
    fontSize: '0.75rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220'
  },
  productsLabelLine: {
    width: '80px',
    height: '2px',
    background: '#f4a220'
  },
  productsCount: {
    fontSize: '1rem',
    color: '#666',
    fontWeight: '600'
  },

  // Products Grid
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "2rem",
  },
  productCard: {
    background: 'white',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column'
  },
  productLink: {
    textDecoration: 'none',
    color: 'inherit',
    padding: '1.5rem',
    flex: 1,
    display: 'block'
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '1rem',
    borderRadius: '10px'
  },
  categoryBadge: {
    display: 'inline-block',
    background: '#e8f5e9',
    color: '#2d5016',
    padding: '0.3rem 1rem',
    borderRadius: '15px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  productName: {
    fontSize: '1.3rem',
    color: '#2d5016',
    marginBottom: '0.5rem'
  },
  productDescription: {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '1rem'
  },
  productPrice: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#f4a220',
    marginBottom: '1rem'
  },
  buttonGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
    padding: '0 1.5rem 1.5rem'
  },
  detailsButton: {
    padding: '0.75rem',
    background: '#6b9e3e',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background 0.3s'
  },
  cartButton: {
    padding: '0.75rem',
    background: '#f4a220',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s'
  },

  // No Products
  noProducts: {
    textAlign: 'center',
    padding: '5rem 2rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  noProductsIcon: {
    fontSize: '5rem',
    color: '#f4a220',
    marginBottom: '1.5rem',
    fontFamily: "'Playfair Display', serif"
  },
  noProductsText: {
    fontSize: '1.3rem',
    color: '#666',
    marginBottom: '2rem',
    fontStyle: 'italic'
  },
  resetButton: {
    padding: '1rem 2.5rem',
    background: '#1a2f0d',
    color: 'white',
    border: 'none',
    fontSize: '0.9rem',
    fontWeight: '700',
    cursor: 'pointer',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'all 0.3s'
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

export default Products;