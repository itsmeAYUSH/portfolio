import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const [ref] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 1,
      title: 'Jr. Software Engineer',
      company: 'UtopiaTech Private Limited',
      duration: 'March 2023 - May 2023',
      location: 'Remote',
      description: 'Developed full-stack web applications and collaborated in agile teams to deliver high-quality software solutions.',
      achievements: [
        'Developed a full-stack web application using the MEAN stack, delivering seamless end-to-end functionality',
        'Designed and integrated dynamic UI using Angular and Material UI, enhancing user experience with clean, responsive design',
        'Engineered multiple RESTful CRUD APIs using Express and MongoDB, implementing appropriate HTTP status codes and robust error handling',
        'Ensured modular code structure with reusable components, resulting in 30% faster feature implementation',
        'Collaborated in an agile team, contributing to code reviews, debugging, and optimization, reducing load time by 20%'
      ],
      technologies: ['MEAN Stack', 'Angular', 'Material UI', 'Express.js', 'MongoDB', 'REST APIs', 'Agile']
    }
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey in software development and professional growth
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-icon">
                    <Briefcase size={24} />
                  </div>
                  <div className="experience-title">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                </div>

                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 + 0.3, duration: 0.5 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.05 + 0.5, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 