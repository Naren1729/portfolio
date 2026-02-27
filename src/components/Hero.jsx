import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../config/data';

// Lazy load the globe since it's a heavy 3D asset
const EarthGlobe = React.lazy(() => import('./EarthGlobe'));

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <header className="hero relative">
      <div className="container hero-layout">
        <div className="hero-content text-left">
          <motion.div 
            className="badge inline-flex mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-dot"></span>
            Open to opportunities
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-left m-0 pb-4" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', whiteSpace: 'nowrap' }}>
              Ghanta Naren <span className="text-gradient">Sri Sai</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="hero-role text-left mb-6">
              {PERSONAL_INFO.role} · {PERSONAL_INFO.company} · {PERSONAL_INFO.location}
            </motion.p>
            
            <motion.p variants={itemVariants} className="hero-desc text-left m-0 pb-8 max-w-[600px]">
              {PERSONAL_INFO.summary}
            </motion.p>
            
            <motion.div variants={itemVariants} className="social-links justify-start mb-8">
              <a href={PERSONAL_INFO.github} className="social-link" title="GitHub" target="_blank" rel="noreferrer">
                <Github size={20}/>
              </a>
              <a href={PERSONAL_INFO.linkedin} className="social-link" title="LinkedIn" target="_blank" rel="noreferrer">
                <Linkedin size={20}/>
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="social-link" title="Email">
                <Mail size={20}/>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="social-link" title="Phone">
                <Phone size={20}/>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-actions justify-start">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="btn btn-primary">
                <Mail size={18} /> Let's Connect
              </a>
              <a href="#projects" className="btn btn-outline">
                View Work <Activity size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Globe Backend Stream Simulation */}
        <motion.div 
          className="hero-globe-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="globe-label">Live WebSocket Stream (Simulation)</div>
          <Suspense fallback={<div className="globe-placeholder">Initializing 3D Environment...</div>}>
            <EarthGlobe />
          </Suspense>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
