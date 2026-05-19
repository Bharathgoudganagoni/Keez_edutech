import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaGithub, FaLinkedin, FaCertificate, FaComments, FaCheckDouble } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    { title: 'Resume Building', desc: 'Craft ATS-friendly resumes that highlight your strengths and projects.', icon: <FaFileAlt size={28}/> },
    { title: 'GitHub Portfolio', desc: 'Build a strong GitHub profile with a streak of quality contributions.', icon: <FaGithub size={28}/> },
    { title: 'LinkedIn Optimization', desc: 'Stand out to recruiters with an optimized and professional LinkedIn profile.', icon: <FaLinkedin size={28}/> },
    { title: 'Industry Certification', desc: 'Receive verifiable certificates upon successful completion of your program.', icon: <FaCertificate size={28}/> },
    { title: 'Career Mentorship', desc: 'Get personalized advice and career mapping from experienced mentors.', icon: <FaComments size={28}/> },
    { title: 'Interview Preparation', desc: 'Access exclusive interview questions and practice with AI-based tools.', icon: <FaCheckDouble size={28}/> },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Exclusive Student <span className="gradient-text">Benefits</span></h2>
          <p className="section-subtitle">Beyond just teaching, we provide the tools you need to build a compelling professional brand.</p>
        </div>

        <div className="features-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ borderTopColor: 'var(--color-accent)' }}
            >
              <div className="feature-icon" style={{ background: 'rgba(6, 182, 212, 0.1)', color: 'var(--color-accent)' }}>
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
