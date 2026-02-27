import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../config/data';

const Footer = () => {
  return (
    <footer id="contact" className="footer container">
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a href="#" className="footer-brand">
          naren<span>.dev</span>
        </a>
        
        <div className="social-links" style={{ marginBottom: 0 }}>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="social-link" title="Email">
            <Mail size={18}/>
          </a>
          <a href={PERSONAL_INFO.linkedin} className="social-link" title="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin size={18}/>
          </a>
          <a href={PERSONAL_INFO.github} className="social-link" title="GitHub" target="_blank" rel="noreferrer">
            <Github size={18}/>
          </a>
        </div>
        
        <p className="footer-copy">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed with passion.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
