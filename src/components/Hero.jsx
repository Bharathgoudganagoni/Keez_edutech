import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCheckCircle, FaStar, FaChartLine, FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="trust-badge">
            <FaStar className="icon" />
            <span>Trusted by 10,000+ Students Worldwide</span>
          </div>
          <h1>Build Your Future with <span className="gradient-text">Industry-Ready</span> Tech Skills</h1>
          <p>Master in-demand skills with our expert-led programs. From AI to Full Stack Development, start your tech career journey today.</p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Courses</button>
            <button className="btn btn-outline"><FaPlay style={{ marginRight: '8px' }} /> How it works</button>
          </div>

          <div style={{ display: 'flex', gap: '1rem', color: '#475569', fontSize: '0.875rem', fontWeight: 500 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FaCheckCircle color="#10B981" /> 100% Placement Support</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FaCheckCircle color="#10B981" /> Live Projects</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="dashboard-mockup">
            <div className="dashboard-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="dashboard-body">
              <motion.div
                className="floating-card"
                style={{ top: '10%', left: '-10%' }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="card-icon"><FaCode /></div>
                <div>
                  <h4 style={{ fontSize: '0.875rem' }}>Learn to Code</h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748B' }}>Interactive lessons</p>
                </div>
              </motion.div>

              <motion.div
                className="floating-card"
                style={{ bottom: '15%', right: '-5%' }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="card-icon"><FaChartLine /></div>
                <div>
                  <h4 style={{ fontSize: '0.875rem' }}>Career Growth</h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748B' }}>500+ Placements</p>
                </div>
              </motion.div>

              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
