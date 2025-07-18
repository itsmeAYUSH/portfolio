import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

import { 
  FaPython, FaJava, FaJs, FaReact, 
  FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt,
  FaGithub, FaDocker, FaAws, FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTypescript, SiGraphql, SiMongodb, 
  SiMysql, SiPostgresql, SiRedis, SiVscodium,
  SiSublimetext, SiIntellijidea, SiVim, SiAdobexd,
  SiFigma, SiFirebase, SiSupabase, SiExpress,
  SiFastapi, SiBootstrap, SiTailwindcss, SiMui,
  SiSass, SiKubernetes, SiGitlab, SiAngular,
  SiDigitalocean, SiHeroku, SiVercel, SiNetlify
} from 'react-icons/si';


const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython size={24} />, color: '#3776AB' },
        { name: 'Java', icon: <FaJava size={24} />, color: '#ED8B00' },
        { name: 'JavaScript', icon: <FaJs size={24} />, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript size={24} />, color: '#3178C6' },
      ]
    },
    {
      title: 'Markup & Data Languages',
      skills: [
        { name: 'HTML', icon: <FaHtml5 size={24} />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt size={24} />, color: '#1572B6' },
        { name: 'XML', icon: <div className="xml-icon">XML</div>, color: '#0060AC' },
        { name: 'JSON', icon: <div className="json-icon">{`{}`}</div>, color: '#292929' },
        { name: 'SQL', icon: <div className="sql-icon">SQL</div>, color: '#336791' },
        { name: 'GraphQL', icon: <SiGraphql size={24} />, color: '#E10098' },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: <FaDocker size={24} />, color: '#2496ED' },
        { name: 'Kubernetes', icon: <SiKubernetes size={24} />, color: '#326CE5' },
        { name: 'GitLab CI', icon: <SiGitlab size={24} />, color: '#FC6D26' },
        { name: 'Git', icon: <FaGitAlt size={24} />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub size={24} />, color: '#181717' },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact size={24} />, color: '#61DAFB' },
        { name: 'Redux', icon: <div className="redux-icon">Redux</div>, color: '#764ABC' },
        { name: 'Angular', icon: <SiAngular size={24} />, color: '#DD0031' },
        { name: 'Bootstrap', icon: <SiBootstrap size={24} />, color: '#7952B3' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, color: '#06B6D4' },
        { name: 'Material UI', icon: <SiMui size={24} />, color: '#0081CB' },
        { name: 'Sass', icon: <SiSass size={24} />, color: '#CC6699' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs size={24} />, color: '#339933' },
        { name: 'Express', icon: <SiExpress size={24} />, color: '#000000' },
        { name: 'FastAPI', icon: <SiFastapi size={24} />, color: '#009688' },
        { name: 'GraphQL', icon: <SiGraphql size={24} />, color: '#E10098' },
        { name: 'REST API', icon: <div className="rest-icon">REST</div>, color: '#FF6B6B' },
        { name: 'Firebase', icon: <SiFirebase size={24} />, color: '#FFCA28' },
        { name: 'Supabase', icon: <SiSupabase size={24} />, color: '#3ECF8E' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb size={24} />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql size={24} />, color: '#4479A1' },
        { name: 'PostgreSQL', icon: <SiPostgresql size={24} />, color: '#336791' },
        { name: 'Redis', icon: <SiRedis size={24} />, color: '#DC382D' },
      ]
    },
    {
      title: 'IDE',
      skills: [
        { name: 'VS Code', icon: <SiVscodium size={24} />, color: '#007ACC' },
        { name: 'Sublime Text', icon: <SiSublimetext size={24} />, color: '#FF9800' },
        { name: 'Cursor', icon: <div className="cursor-icon">Cursor</div>, color: '#4F8CFF' },
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea size={24} />, color: '#000000' },
        { name: 'Vim', icon: <SiVim size={24} />, color: '#019733' },
        { name: 'Atom', icon: <div className="atom-icon">Atom</div>, color: '#66595C' },
      ]
    },
    {
      title: 'Design',
      skills: [
        { name: 'Adobe XD', icon: <SiAdobexd size={24} />, color: '#FF61F6' },
        { name: 'Figma', icon: <SiFigma size={24} />, color: '#F24E1E' },
      ]
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'AWS', icon: <FaAws size={24} />, color: '#FF9900' },
        { name: 'Azure', icon: <FaMicrosoft size={24} />, color: '#0078D4' },
        { name: 'DigitalOcean', icon: <SiDigitalocean size={24} />, color: '#0080FF' },
        { name: 'Heroku', icon: <SiHeroku size={24} />, color: '#430098' },
        { name: 'Vercel', icon: <SiVercel size={24} />, color: '#000000' },
        { name: 'Netlify', icon: <SiNetlify size={24} />, color: '#00C7B7' },
        { name: 'Firebase', icon: <SiFirebase size={24} />, color: '#FFCA28' },
      ]
    },
  ];
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-cube"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      z: 50
                    }}
                    style={{
                      '--skill-color': skill.color
                    }}
                  >
                    <div className="cube-face front">
                      <div className="skill-logo-circle">
                        <span className="skill-icon">{skill.icon}</span>
                      </div>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                    <div className="cube-face back"></div>
                    <div className="cube-face right"></div>
                    <div className="cube-face left"></div>
                    <div className="cube-face top"></div>
                    <div className="cube-face bottom"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="coding-profiles-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>Coding Profiles</h3>
          <p className="profiles-subtitle">
            Check out my problem-solving journey on competitive programming platforms
          </p>
          <motion.div
            className="achievement-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="achievement-icon">🏆</span>
            <span className="achievement-text">Solved 200+ Questions</span>
          </motion.div>
          <div className="profiles-grid">
            <motion.a
              href="https://leetcode.com/u/AyushSagar69/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card leetcode"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="profile-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.227 1.653 1.653 0 0 0 2.227 0l3.854-4.126 5.406 5.788a1.374 1.374 0 0 0 1.922 0 1.374 1.374 0 0 0 0-1.922L10.5 7.226l3.854-4.126a1.653 1.653 0 0 0 0-2.227 1.653 1.653 0 0 0-2.227 0L8.961 5.226 1.438.438A1.374 1.374 0 0 0 .477 0H13.483z"/>
                </svg>
              </div>
              <div className="profile-content">
                <h4>LeetCode</h4>
                <p>Competitive Programming & Algorithm Practice</p>
                <span className="profile-username">@AyushSagar69</span>
              </div>
              <div className="profile-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.a>

            <motion.a
              href="https://www.geeksforgeeks.org/user/ayushksagar14/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card gfg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="profile-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="profile-content">
                <h4>GeeksforGeeks</h4>
                <p>Data Structures & Algorithms Learning</p>
                <span className="profile-username">@ayushksagar14</span>
              </div>
              <div className="profile-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills; 