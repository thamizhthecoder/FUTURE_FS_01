import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../utils/data.jsx';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span> <br/>
            {personalInfo.role}
          </h1>
          <p className="hero-subtitle">
            {personalInfo.tagline}
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
