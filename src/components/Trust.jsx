import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const Trust = () => {
  const stats = [
    { value: 10000, suffix: '+', label: 'Students Enrolled' },
    { value: 500, suffix: '+', label: 'Placements' },
    { value: 100, suffix: '+', label: 'Expert Mentors' },
    { value: 50, suffix: '+', label: 'Hiring Partners' },
  ];

  return (
    <section className="trust-section" style={{ background: 'linear-gradient(to bottom, #ffffff, #F8FAFC)', padding: '5rem 0' }}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 25px -5px rgba(0, 51, 153, 0.1), 0 8px 10px -6px rgba(0, 51, 153, 0.1)',
                background: '#ffffff'
              }}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.03)',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
              }}
            >
              <div className="stat-number" style={{ background: 'linear-gradient(90deg, var(--color-secondary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label" style={{ color: '#64748B', fontWeight: 600 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
