import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaUserTie, FaRegHandshake, FaRobot, FaChalkboardTeacher, FaCodeBranch } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { title: 'Live Industry Projects', desc: 'Work on real-world projects that simulate actual industry environments and challenges.', icon: <FaLaptop size={28}/> },
    { title: 'Placement Support', desc: 'Dedicated placement cell with 50+ hiring partners and resume building workshops.', icon: <FaUserTie size={28}/> },
    { title: 'Internship Opportunities', desc: 'Guaranteed internship opportunities to build your experience and portfolio.', icon: <FaRegHandshake size={28}/> },
    { title: 'AI-Based Learning', desc: 'Personalized learning paths and code review powered by advanced AI algorithms.', icon: <FaRobot size={28}/> },
    { title: 'Expert Mentorship', desc: '1-on-1 guidance from industry veterans working in top tech companies.', icon: <FaChalkboardTeacher size={28}/> },
    { title: 'Real-Time Practice', desc: 'Interactive coding environments and labs available 24/7 for hands-on practice.', icon: <FaCodeBranch size={28}/> },
  ];

  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Why Learn With <span className="gradient-text">Us</span></h2>
          <p className="section-subtitle">We don't just teach theory; we prepare you for the tech industry with practical skills and career support.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
