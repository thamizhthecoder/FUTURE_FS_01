import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-secondary">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Thamizh Selvan .P. Built with React & Express.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
