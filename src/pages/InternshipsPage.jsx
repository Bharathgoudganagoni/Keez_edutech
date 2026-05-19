import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartLine, FaRobot } from 'react-icons/fa';
import CTASection from '../components/CTASection';

const InternshipsPage = () => {
  const internships = [
    { title: 'Frontend Developer Intern', dept: 'Engineering', duration: '3 Months', icon: <FaLaptopCode size={40} /> },
    { title: 'Data Analyst Intern', dept: 'Data Science', duration: '6 Months', icon: <FaChartLine size={40} /> },
    { title: 'AI Research Intern', dept: 'AI Labs', duration: '6 Months', icon: <FaRobot size={40} /> },
  ];

  const handleWIP = (e) => {
    e.preventDefault();
    alert("Work in Progress: Internship application is coming soon!");
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div style={{ background: 'var(--color-primary)', color: 'var(--color-white)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span style={{ color: 'var(--color-accent)' }}>Internships</span></h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>Kickstart your career with hands-on experience on real industry projects.</p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container">
          <div className="courses-grid">
            {internships.map((internship, index) => (
              <motion.div 
                key={index} 
                className="course-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ padding: '2rem', textAlign: 'center' }}
              >
                <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>{internship.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{internship.title}</h3>
                <p style={{ color: '#64748B', marginBottom: '1rem' }}>Department: {internship.dept}</p>
                <p style={{ color: '#64748B', marginBottom: '1.5rem' }}>Duration: {internship.duration}</p>
                <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleWIP}>Apply Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default InternshipsPage;
