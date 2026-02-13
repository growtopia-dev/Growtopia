// src/pages/BlogPost.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((b) => b.id === parseInt(id));

  if (!post) {
    return (
      <div style={styles.notFound}>
        <div style={styles.notFoundContent}>
          <h2 style={styles.notFoundTitle}>Blog Post Not Found</h2>
          <p style={styles.notFoundText}>The article you're looking for doesn't exist.</p>
          <Link to='/blog'>
            <button style={styles.backButton}>BACK TO BLOG</button>
          </Link>
        </div>
      </div>
    );
  }

  // Get other blog posts for recommendations
  const relatedPosts = blogs.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <div style={styles.container}>
      {/* Back Button */}
      <button onClick={() => navigate("/blog")} style={styles.backBtn}>
        <ArrowLeft size={20} /> BACK TO BLOG
      </button>

      {/* Article */}
      <article style={styles.article}>
        {/* Header Section */}
        <header style={styles.header}>
          <div style={styles.headerTop}>
            <div style={styles.categoryBadge}>{post.category}</div>
            <div style={styles.metaInfo}>
              <div style={styles.metaItem}>
                <Calendar size={18} color="#f4a220" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          <h1 style={styles.title}>{post.title}</h1>

          <div style={styles.authorSection}>
            <div style={styles.authorInfo}>
              <User size={20} color="#f4a220" />
              <div>
                <div style={styles.authorName}>{post.author}</div>
                <div style={styles.authorRole}>{post.role}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div style={styles.featuredImageSection}>
          <div style={styles.blogImage}>{post.image}</div>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {(Array.isArray(post.content) ? post.content : [post.content]).map(
            (paragraph, index) => (
              <p key={index} style={styles.paragraph}>
                {paragraph.trim()}
              </p>
            )
          )}
        </div>

        {/* Footer with Tags */}
        <footer style={styles.footer}>
          <div style={styles.tagsContainer}>
            <Tag size={18} color="#f4a220" />
            <div style={styles.tagsList}>
              <span style={styles.tag}>{post.category}</span>
              <span style={styles.tag}>Agriculture</span>
              <span style={styles.tag}>Technology</span>
              <span style={styles.tag}>Farming</span>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section style={styles.relatedSection}>
          <div style={styles.relatedHeader}>
            <div style={styles.relatedLabelContainer}>
              <div style={styles.relatedLabel}>MORE ARTICLES</div>
              <div style={styles.relatedLabelLine}></div>
            </div>
            <h2 style={styles.relatedTitle}>Related Articles</h2>
          </div>

          <div style={styles.relatedGrid}>
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                style={styles.relatedCard}
              >
                <div style={styles.relatedImageContainer}>
                  <div style={styles.relatedImage}>{relatedPost.image}</div>
                </div>
                <div style={styles.relatedContent}>
                  <h3 style={styles.relatedPostTitle}>{relatedPost.title}</h3>
                  <p style={styles.relatedExcerpt}>{relatedPost.excerpt}</p>
                  <span style={styles.readMore}>READ MORE →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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

          .related-card:hover {
            transform: translateY(-5px);
          }

          .back-btn:hover {
            gap: 0.75rem !important;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '3rem 2rem',
    fontFamily: "'Work Sans', sans-serif",
    background: '#fafaf8'
  },
  backBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'transparent',
    border: 'none',
    color: '#1a2f0d',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '1px',
    cursor: 'pointer',
    marginBottom: '2rem',
    padding: '0.5rem 0',
    transition: 'gap 0.3s',
    className: 'back-btn'
  },
  article: {
    background: 'white',
    border: '3px solid #1a2f0d',
    overflow: 'hidden',
    marginBottom: '4rem'
  },
  header: {
    padding: '3rem',
    borderBottom: '3px solid #f4a220'
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  categoryBadge: {
    background: '#1a2f0d',
    color: '#f4a220',
    padding: '0.5rem 1.5rem',
    fontSize: '0.7rem',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  },
  metaInfo: {
    display: 'flex',
    gap: '1rem'
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#666',
    fontSize: '0.9rem'
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    color: '#1a2f0d',
    marginBottom: '2rem',
    lineHeight: '1.2',
    fontWeight: '700'
  },
  authorSection: {
    paddingTop: '1.5rem',
    borderTop: '2px solid #f0f0f0'
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  authorName: {
    fontWeight: '700',
    color: '#1a2f0d',
    fontSize: '1rem'
  },
  authorRole: {
    fontSize: '0.85rem',
    color: '#999',
    marginTop: '0.25rem'
  },
  featuredImageSection: {
    background: '#f8f9fa',
    borderBottom: '3px solid #f4a220'
  },
  blogImage: {
    fontSize: 'clamp(5rem, 10vw, 7rem)',
    textAlign: 'center',
    padding: '4rem 2rem',
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    padding: '3rem'
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.9',
    color: '#333',
    marginBottom: '1.5rem',
    fontFamily: "'Work Sans', sans-serif"
  },
  footer: {
    padding: '2rem 3rem',
    borderTop: '3px solid #f0f0f0',
    background: '#fafaf8'
  },
  tagsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  tagsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem'
  },
  tag: {
    display: 'inline-block',
    background: '#1a2f0d',
    color: 'white',
    padding: '0.4rem 1rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '1px'
  },
  // Related Section
  relatedSection: {
    marginTop: '4rem',
    paddingTop: '3rem',
    borderTop: '3px solid #e0e0e0'
  },
  relatedHeader: {
    maxWidth: '1000px',
    margin: '0 auto 3rem',
    textAlign: 'center'
  },
  relatedLabelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1rem'
  },
  relatedLabel: {
    fontSize: '0.7rem',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#f4a220'
  },
  relatedLabelLine: {
    width: '60px',
    height: '2px',
    background: '#f4a220'
  },
  relatedTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    color: '#1a2f0d'
  },
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  },
  relatedCard: {
    background: 'white',
    border: '3px solid #1a2f0d',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.3s',
    display: 'flex',
    flexDirection: 'column',
    className: 'related-card'
  },
  relatedImageContainer: {
    background: '#f8f9fa',
    borderBottom: '3px solid #f4a220'
  },
  relatedImage: {
    fontSize: '3.5rem',
    textAlign: 'center',
    padding: '2rem',
    minHeight: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  relatedContent: {
    padding: '1.5rem'
  },
  relatedPostTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.2rem',
    color: '#1a2f0d',
    marginBottom: '0.75rem',
    fontWeight: '700',
    lineHeight: '1.3'
  },
  relatedExcerpt: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '1rem',
    lineHeight: '1.6'
  },
  readMore: {
    color: '#1a2f0d',
    fontWeight: '700',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    borderBottom: '2px solid #f4a220',
    paddingBottom: '0.25rem',
    display: 'inline-block'
  },
  // Not Found
  notFound: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fafaf8',
    padding: '3rem'
  },
  notFoundContent: {
    textAlign: 'center',
    maxWidth: '600px'
  },
  notFoundTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    color: '#1a2f0d',
    marginBottom: '1rem',
    fontWeight: '700'
  },
  notFoundText: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem'
  },
  backButton: {
    padding: '1rem 2.5rem',
    background: '#f4a220',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  }
};

export default BlogPost;