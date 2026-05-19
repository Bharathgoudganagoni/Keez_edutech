import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'linear-gradient(135deg, var(--color-primary) 0%, #003399 50%, #002D8B 100%)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      color: 'var(--color-white)'
    }}>
      {/* Animated gradient orbs */}
      <motion.div
        style={{
          position: 'absolute', width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(153, 204, 0, 0.2) 0%, transparent 70%)',
          top: '-100px', left: '-80px', borderRadius: '50%', filter: 'blur(50px)'
        }}
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute', width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(0, 100, 255, 0.25) 0%, transparent 70%)',
          bottom: '-80px', right: '-60px', borderRadius: '50%', filter: 'blur(50px)'
        }}
        animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '1rem' }}
        >
          🚀 Limited Seats Available
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem', color: 'white' }}
        >
          Start Your Tech Career Journey Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: 1.6 }}
        >
          Join thousands of successful alumni who have transformed their careers with KeeZ Campus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.875rem 2rem', background: 'var(--color-accent)',
              color: 'var(--color-primary)', borderRadius: '0.5rem', fontWeight: 700,
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem'
            }}
          >
            Join Now <FaArrowRight />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.875rem 2rem', background: 'rgba(255,255,255,0.08)',
              color: 'white', borderRadius: '0.5rem', fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem'
            }}
          >
            <FaWhatsapp size={18} /> Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
