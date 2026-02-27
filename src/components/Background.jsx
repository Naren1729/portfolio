import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, overflow: 'hidden' }}>
      {/* Base glow 1 */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 1.5 }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(3, 7, 18, 0) 70%)',
          filter: 'blur(100px)',
        }}
      />
      {/* Base glow 2 */}
      <motion.div
        animate={{
          x: mousePosition.x * -0.05,
          y: mousePosition.y * -0.05,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(3, 7, 18, 0) 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Interactive cursor follower */}
      <motion.div
        animate={{
          x: mousePosition.x - 200, // offset half width
          y: mousePosition.y - 200, // offset half height
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, rgba(0,0,0,0) 60%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
