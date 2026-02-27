import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../config/data';

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">Skills</div>
        <h2 className="section-title">Technical Expertise</h2>
      </motion.div>

      <div className="skills-grid">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="skill-header">
              <div 
                className="skill-icon" 
                style={{ background: skillGroup.iconBg, color: skillGroup.iconColor }}
              >
                <skillGroup.icon size={24} />
              </div>
              <h3 className="skill-title">{skillGroup.category}</h3>
            </div>
            
            <div className="tech-tags">
              {skillGroup.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tech-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
