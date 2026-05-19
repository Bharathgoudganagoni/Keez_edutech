import React from 'react';
import { motion } from 'framer-motion';

const CareerGrowth = () => {
  const steps = [
    { title: 'Learn Skills', desc: 'Master in-demand technologies through expert-led sessions.' },
    { title: 'Build Projects', desc: 'Develop real-world applications to showcase your abilities.' },
    { title: 'Internship Experience', desc: 'Gain practical experience working with industry partners.' },
    { title: 'Mock Interviews', desc: 'Prepare for technical and HR rounds with industry experts.' },
    { title: 'Placement Preparation', desc: 'Optimize your resume and LinkedIn profile for recruiters.' },
    { title: 'Career Success', desc: 'Land your dream job and accelerate your career growth.' }
  ];

  return (
    <section className="timeline-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Your Path to <span className="gradient-text" style={{ filter: 'brightness(1.5)' }}>Success</span></h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Our structured approach ensures you are industry-ready from day one.</p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }}>{index + 1}. {step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerGrowth;
