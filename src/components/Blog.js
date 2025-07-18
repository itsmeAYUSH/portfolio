import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';
import './Blog.css';

const blogs = [
  {
    title: 'React Hooks',
    platform: 'HashNode',
    date: 'Dec 26, 2022',
    description: 'Wrote a blog on HashNode about React Hooks and tried explaining it in simple terms with examples of useState, useEffect and useContext hooks.',
    link: 'https://itsmeayush.hashnode.dev/react-hooks-1',
    tags: ['React', 'JavaScript', 'Web Development']
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">
            Sharing knowledge and insights through technical writing
          </p>
        </motion.div>

        <motion.div
          className="blog-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {blogs.map((blog, idx) => (
            <motion.article
              className="blog-card"
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="blog-header">
                <div className="blog-icon">
                  <BookOpen size={24} />
                </div>
                <div className="blog-meta">
                  <span className="blog-platform">{blog.platform}</span>
                  <div className="blog-date">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>

              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                
                <div className="blog-tags">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={blog.link}
                  className="blog-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article <ExternalLink size={16} style={{ marginLeft: 4 }} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 