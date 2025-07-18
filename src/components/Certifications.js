import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    name: 'Front-End Developer',
    issuer: 'Meta Coursera',
    date: 'May 19, 2023',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/KTSSF89QLSUB',
  },
  {
    name: 'The Complete 2022 Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'October 17, 2022',
    link: 'https://www.udemy.com/certificate/UC-62499337-b6f4-4567-9521-8c1f61e9945e/',
  },
  {
    name: 'Introduction to Web Development',
    issuer: 'IBM-Coursera',
    date: 'July 10, 2022',
    link: 'https://www.coursera.org/account/accomplishments/certificate/GZGA4QKBT98V',
  },
  {
    name: 'Google UX Design',
    issuer: 'Coursera',
    date: 'Nov 10, 2021',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/X5PMWA5FYFY5',
  },
  {
    name: 'Postman API Fundamentals',
    issuer: 'Postman',
    date: '2023',
    link: 'https://badgr.com/public/assertions/Bz14Fd58Sa6qA9hk-5u1tw?identity__email=ayushksagar14@gmail.com',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Some of the certifications I have completed to enhance my skills
          </p>
        </motion.div>
        <motion.div
          className="certifications-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              className="cert-card"
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="cert-icon">
                <Award size={32} />
              </div>
              <div className="cert-content">
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    className="cert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate <ExternalLink size={16} style={{ marginLeft: 4 }} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 