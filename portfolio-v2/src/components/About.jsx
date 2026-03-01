import React from 'react';
import { motion } from 'framer-motion';
import { skills, personalInfo, education, certifications } from '../utils/data.jsx';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <motion.div 
            className="about-text glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gradient">The Developer Journey</h3>
            <p>{personalInfo.bio}</p>

            <div className="education-section">
              <h4 className="subsection-title">Education</h4>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h5>{edu.degree}</h5>
                  <p className="institution">{edu.institution}</p>
                  <span className="duration">{edu.duration}</span>
                </div>
              ))}
            </div>

            <div className="certifications-section">
              <h4 className="subsection-title">Certifications & Additional Info</h4>
              <ul className="certifications-list">
                {certifications.map((cert, index) => (
                  <li key={index}><span>•</span> {cert}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-skills"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <div className="skill-header">
                  <span className="skill-icon">{skillGroup.icon}</span>
                  <h4>{skillGroup.category}</h4>
                </div>
                <div className="skill-tags">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
