import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Coffee, Music, Gamepad2, BookOpen, Globe } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { number: '23', label: 'Age', icon: '🎂' },
    { number: '3+', label: 'Months Experience', icon: '💼' },
    { number: '8.55', label: 'MCA CGPA', icon: '🎓' },
    { number: '200+', label: 'Questions Solved', icon: '🏆' },
  ];

  const interests = [
    { icon: Coffee, label: 'Coffee Lover', description: 'Can\'t code without it!' },
    { icon: Music, label: 'Music Enthusiast', description: 'Lo-fi beats to code to' },
    { icon: Gamepad2, label: 'Gaming', description: 'When I\'m not coding' },
    { icon: BookOpen, label: 'Learning', description: 'Always exploring new tech' },
    { icon: Globe, label: 'Software Development', description: 'Building amazing applications' },
    { icon: Heart, label: 'Problem Solving', description: 'Love tackling challenges' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Software Engineer from Kalyan, Mumbai, India, with a strong foundation in 
              both front-end and back-end development. I specialize in building end-to-end web applications 
              using React, Angular, Node.js, and Express. I'm experienced in creating dynamic and interactive 
              user interfaces that are both visually appealing and functional.
            </p>
            
            <p>
              Currently pursuing my Masters in Computer Application at Vellore Institute of Technology 
              with a CGPA of 8.55, I'm quick to adapt and eager to solve real-world problems in a 
              fast-paced product environment. I believe in writing clean, maintainable code and creating 
              applications that not only look great but also perform exceptionally well.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Problem Solver</h4>
                  <p>I love tackling complex challenges and finding elegant solutions</p>
                </div>
              </div>
              
              <div className="highlight">
                <span className="highlight-icon">🎨</span>
                <div>
                  <h4>Creative Thinker</h4>
                  <p>Combining technical skills with creative design thinking</p>
                </div>
              </div>
              
              <div className="highlight">
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Fast Learner</h4>
                  <p>Always excited to learn new technologies and frameworks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <h3>Quick Stats</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="stat-card"
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="interests-section">
          <h3>When I'm Not Coding</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div
                key={interest.label}
                className="interest-card"
              >
                <div className="interest-icon">
                  <interest.icon size={32} />
                </div>
                <h4>{interest.label}</h4>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-cta">
          <p>
            Interested in working together? Let's create something amazing! 
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 