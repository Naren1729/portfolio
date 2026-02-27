import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../config/data';

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">Experience</div>
        <h2 className="section-title">Where I've Worked</h2>
      </motion.div>

      <div className="timeline">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div 
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="timeline-header">
              <div>
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">
                  <exp.icon size={18} /> {exp.company}
                </div>
              </div>
              <div className="timeline-date">{exp.date}</div>
            </div>
            
            <ul className="timeline-bullets">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
            
            <div className="tech-tags mt-4">
              {exp.tech.map((tech, tIdx) => (
                <span key={tIdx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
