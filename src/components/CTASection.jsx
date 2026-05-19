import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">Start Your Tech Career Journey Today</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>
            Join thousands of successful alumni who have transformed their careers with KeeZ-Edutech.
          </p>
          <div className="cta-buttons">
            <button className="btn" style={{ background: 'var(--color-white)', color: 'var(--color-primary)' }}>
              Join Now <FaArrowRight style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--color-white)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Contact Us
            </button>
          </div>
        </motion.div>
        
        {/* Animated Background Elements */}
        <motion.div 
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            top: '-100px',
            left: '-100px',
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: 1
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
            bottom: '-150px',
            right: '-100px',
            borderRadius: '50%',
            filter: 'blur(50px)',
            zIndex: 1
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};

export default CTASection;
