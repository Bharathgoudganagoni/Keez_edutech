import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-shapes">
        <motion.div className="shape shape-1" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className="shape shape-2" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="shape shape-3" animate={{ x: [0, 30, 0], y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Empowering Students with <span className="gradient-text">Future-Ready</span> Skills</h1>
          <p>We bridge the gap between academic education and industry requirements by providing hands-on training, expert mentorship, and career support.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
