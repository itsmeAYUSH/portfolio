import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Eye, Code, Palette, Smartphone, Globe } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'design', label: 'Design', icon: Palette },
  ];

  const projects = [
    {
      id: 1,
      title: 'Furniflexx - E-Commerce Website',
      description: 'Full-stack e-commerce platform built to understand end-to-end development workflows. Implemented user authentication using Firebase (Google Sign-In) and MongoDB, with secure session handling via JWT. Developed RESTful APIs using Node.js & Express, and managed global state using Redux for seamless cart and user flow.',
      image: '🛒',
      category: 'web',
      technologies: ['MERN Stack', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'JWT'],
      liveUrl: 'https://furniflexx.netlify.app/',
      githubUrl: 'https://github.com/itsmeAYUSH/e-commerce-app'
    },
    {
      id: 2,
      title: 'Expense Tracker',
      description: 'Interactive financial tracker designed to deepen understanding of React state logic and conditional rendering. Used Redux for managing authentication, expenses, and theme state; implemented premium features like dark mode and CSV download. Enabled dynamic UI updates and CSV exports when expenses exceeded thresholds, simulating real-world fintech behavior.',
      image: '💰',
      category: 'web',
      technologies: ['React', 'Redux', 'JavaScript', 'CSS3', 'Local Storage', 'CSV Export'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'QR Code Attendance System',
      description: 'A MERN stack application designed to streamline attendance tracking in educational institutions using QR codes. The system provides separate interfaces for faculty and students, ensuring efficient and accurate attendance management.',
      image: '📋',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'QR Code API'],
      liveUrl: 'https://qrcodeattendanceapp.netlify.app/',
      githubUrl: 'https://github.com/itsmeAYUSH/QRCodeAttendance',
    },
    {
      id: 4,
      title: 'Quick Vacancy - Job Portal',
      description: 'QuickVacancy is a fast and modern job search platform that connects job seekers with real-time opportunities. With smart filters, easy applications, and a responsive design, finding your next career move has never been simpler!',
      image: '💼',
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Local Storage'],
      liveUrl: 'http://quickvacancy.netlify.app/',
      githubUrl: 'https://github.com/itsmeAYUSH/quickVacancy',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Responsive weather application built with HTML, CSS, and JavaScript that utilizes the OpenWeatherMap API to provide real-time weather data for locations worldwide.',
      image: '🌤️',
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API', 'Responsive Design'],
      liveUrl: 'https://itsmeayush.github.io/weather-app/',
      githubUrl: 'https://github.com/itsmeAYUSH/weather-app',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion. Features include dark/light theme, smooth animations, and interactive elements showcasing my skills and projects.',
      image: '🎨',
      category: 'web',
      technologies: ['React', 'JavaScript', 'CSS3', 'Framer Motion', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

                <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <filter.icon size={20} />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

                <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
                
                <div className="project-image">
                  <div className="project-emoji">{project.image}</div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={18} />
                      Live Demo
                    </motion.a>
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </section>
  );
};

export default Projects; 