import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import Counter from '../Counter';

export const Team = () => {
  const mentors = [
    { name: 'Dr. Alex Mercer', role: 'Head of AI', expertise: 'Ex-Google AI Researcher', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { name: 'Sarah Connor', role: 'Lead Full Stack', expertise: 'Senior SDE at Amazon', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { name: 'David Lee', role: 'UI/UX Director', expertise: 'Award-winning Designer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { name: 'Priya Sharma', role: 'Data Science Lead', expertise: 'Ex-Microsoft Data Scientist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Learn from Industry <span className="gradient-text">Experts</span></h2>
          <p className="section-subtitle">Our mentors are industry veterans with years of experience at top tech companies, ready to guide your career.</p>
        </div>

        <div className="team-grid">
          {mentors.map((mentor, index) => (
            <motion.div 
              key={index} 
              className="mentor-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mentor-img">
                <img src={mentor.img} alt={mentor.name} />
                <div className="mentor-social">
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaGithub /></a>
                </div>
              </div>
              <div className="mentor-info">
                <h4>{mentor.name}</h4>
                <div className="role">{mentor.role}</div>
                <div className="expertise">{mentor.expertise}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Achievements = () => {
  const stats = [
    { value: 50000, suffix: '+', label: 'Students Trained' },
    { value: 10000, suffix: '+', label: 'Successful Placements' },
    { value: 500, suffix: '+', label: 'Internships Provided' },
    { value: 200, suffix: '+', label: 'Workshops Conducted' },
  ];

  return (
    <section className="achievements-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>Our Impact in <span className="gradient-text">Numbers</span></h2>
        </div>
        <div className="achievements-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3><Counter value={stat.value} suffix={stat.suffix} /></h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
