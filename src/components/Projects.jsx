import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../config/data';

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">Projects</div>
        <h2 className="section-title">Featured Work</h2>
      </motion.div>

      <div className="projects-grid">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div 
              className="project-img-wrapper" 
              style={{ background: `linear-gradient(45deg, ${project.colorFrom}, ${project.colorTo})` }}
            >
              <project.icon className="project-img-icon" />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="tech-tags mb-4">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.sourceUrl} className="project-link" target="_blank" rel="noreferrer">
                  <Github size={18} /> Source
                </a>
                <a href={project.demoUrl} className="project-link" target="_blank" rel="noreferrer">
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
