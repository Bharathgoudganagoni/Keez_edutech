import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa';

export const Mission = () => (
  <section className="mission-vision-section" style={{ background: 'var(--color-white)' }}>
    <div className="container">
      <div className="mission-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Mission" style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }} />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--color-secondary)', borderRadius: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>
            <FaBullseye /> Our Mission
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Transforming Education into Career Success</h2>
          <p style={{ color: '#475569', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Our mission is to democratize tech education by providing affordable, high-quality, industry-relevant training. We focus on skill development and career transformation, ensuring every student is ready for the competitive job market.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#1E293B', fontWeight: 500 }}>
            <li>✓ Industry-Focused Curriculum</li>
            <li>✓ Practical Project-Based Learning</li>
            <li>✓ Comprehensive Placement Support</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export const Vision = () => (
  <section className="mission-vision-section" style={{ background: '#F8FAFC' }}>
    <div className="container">
      <div className="mission-grid" style={{ direction: 'rtl' }}>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ direction: 'ltr' }}
        >
          <div className="vision-card">
            <h3 style={{ color: 'var(--color-accent)' }}>Building the Next Tech Generation</h3>
            <p>Our vision is to become the leading EdTech platform globally, recognized for producing the most competent and innovative tech professionals.</p>
            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  <FaEye size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Global Impact</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>Empowering 1 Million+ Students by 2030</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ direction: 'ltr' }}
        >
           <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--color-accent)', borderRadius: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>
            <FaEye /> Our Vision
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Creating a World Where Skills Matter Most</h2>
          <p style={{ color: '#475569', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            We envision a world where a person's capability and skills are the true measure of their potential, irrespective of their background or formal education.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);
