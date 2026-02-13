 // src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div style={styles.container}>
      {/* Editorial Hero Section */}
      <section style={styles.editorialHeader}>
        <div style={styles.heroLayout}>
          {/* Left side - Label and Title */}
          <div style={styles.heroLeft}>
            <div style={styles.labelBox}>GROWTOPIA BLOG</div>
            <h1 style={styles.mainHeadline}>
              INSIGHTS &<br/>
              <span style={styles.headlineItalic}>INNOVATIONS</span><br/>
              IN <span style={styles.headlineAccent}>AGRITECH</span>
            </h1>
          </div>
          
          {/* Right side - Description */}
          <div style={styles.heroRight}>
            <div style={styles.descContainer}>
              <p style={styles.headerDesc}>
                Explore our latest articles on agriculture technology, sustainable farming practices, 
                and expert tips to help you grow smarter and more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section style={styles.blogSection}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionLabelContainer}>
            <div style={styles.sectionLabel}>LATEST ARTICLES</div>
            <div style={styles.sectionLabelLine}></div>
          </div>
          <h2 style={styles.sectionTitle}>Recent Posts</h2>
        </div>

        <div style={styles.blogsGrid}>
          {blogs.map((post, index) => (
            <article key={post.id} style={styles.blogCard}>
              <div style={styles.blogImageContainer}>
                <div style={styles.blogImage}>{post.image}</div>
                <div style={styles.categoryBadge}>{post.category}</div>
              </div>

              <div style={styles.blogContent}>
                <h2 style={styles.blogTitle}>
                  <Link to={`/blog/${post.id}`} style={styles.titleLink}>
                    {post.title}
                  </Link>
                </h2>

                <p style={styles.blogExcerpt}>{post.excerpt}</p>

                <div style={styles.blogMeta}>
                  <div style={styles.metaItem}>
                    <User size={16} color="#f4a220" />
                    <span>{post.author}</span>
                  </div>
                  <div style={styles.metaItem}>
                    <Calendar size={16} color="#f4a220" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <Link to={`/blog/${post.id}`} style={styles.readMoreLink}>
                  READ ARTICLE <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
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

          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          }

          .title-link:hover {
            color: #6b9e3e !important;
          }

          .read-more:hover {
            gap: 1rem !important;
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
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
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
  // Blog Section
  blogSection: {
    padding: '6rem 3rem',
    background: 'white'
  },
  sectionHeader: {
    maxWidth: '1400px',
    margin: '0 auto 4rem',
    textAlign: 'center'
  },
  sectionLabelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1.2rem'
  },
  sectionLabel: {
    fontSize: '0.7rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220'
  },
  sectionLabelLine: {
    width: '60px',
    height: '2px',
    background: '#f4a220'
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    color: '#1a2f0d'
  },
  blogsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  blogCard: {
    background: 'white',
    border: '3px solid #1a2f0d',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s',
    className: 'blog-card'
  },
  blogImageContainer: {
    position: 'relative',
    width: '100%',
    background: '#f8f9fa',
    borderBottom: '3px solid #f4a220'
  },
  blogImage: {
    fontSize: 'clamp(4rem, 8vw, 5rem)',
    padding: '3rem 2rem',
    textAlign: 'center',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryBadge: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: '#1a2f0d',
    color: '#f4a220',
    padding: '0.5rem 1.2rem',
    fontSize: '0.7rem',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  },
  blogContent: {
    padding: '2rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  blogTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
    marginBottom: '1rem',
    lineHeight: '1.3',
    fontWeight: '700'
  },
  titleLink: {
    color: '#1a2f0d',
    textDecoration: 'none',
    transition: 'color 0.3s',
    className: 'title-link'
  },
  blogExcerpt: {
    color: '#666',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
    flex: 1,
    fontSize: '0.95rem'
  },
  blogMeta: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '2px solid #f0f0f0',
    flexWrap: 'wrap'
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#666',
    fontSize: '0.85rem',
    fontWeight: '500'
  },
  readMoreLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#1a2f0d',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    transition: 'gap 0.3s',
    alignSelf: 'flex-start',
    padding: '0.75rem 0',
    borderBottom: '2px solid #f4a220',
    className: 'read-more'
  }
};

export default Blog;