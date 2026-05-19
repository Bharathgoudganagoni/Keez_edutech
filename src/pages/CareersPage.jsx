import React from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';

const CareersPage = () => {
  const jobs = [
    { title: 'Full Stack Developer (React/Node.js)', type: 'Full-time', location: 'Hyderabad, India / Remote', experience: '2-4 Years' },
    { title: 'Senior Digital Marketing Executive', type: 'Full-time', location: 'Hyderabad, India', experience: '3-5 Years' },
    { title: 'Educational Counselor', type: 'Full-time', location: 'Remote', experience: '1-3 Years' },
    { title: 'UI/UX Designer', type: 'Full-time', location: 'Remote', experience: '2+ Years' }
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div style={{ background: 'var(--color-primary)', color: 'var(--color-white)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Join Our <span style={{ color: 'var(--color-accent)' }}>Team</span></h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>Help us shape the future of tech education and empower millions of students globally.</p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>Open Positions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            {jobs.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ 
                  background: 'var(--color-white)', 
                  padding: '2rem', 
                  borderRadius: 'var(--radius-lg)', 
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderLeft: '4px solid var(--color-accent)'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                  <div style={{ color: '#64748B', display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>Exp: {job.experience}</span>
                  </div>
                </div>
                <button className="btn btn-outline">Apply</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default CareersPage;
