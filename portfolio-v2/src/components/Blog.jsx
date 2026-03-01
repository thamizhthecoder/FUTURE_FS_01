import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    fetch(`${API_URL}/api/blogs`)
      .then(res => res.json())
      .then(data => { setBlogs(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  return (
    <section id="blog" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Latest Thinking</h2>
        {loading ? <p>Loading articles...</p> : (
          <div className="blogs-grid">
            {blogs.map((blog, index) => (
              <motion.article 
                key={blog.id} className="blog-card glass"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="blog-header">
                  <h3>{blog.title}</h3>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <div className="blog-body">
                  <p>{blog.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Blog;
