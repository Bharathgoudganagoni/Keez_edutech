import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaTimes, FaMagic, FaRobot } from 'react-icons/fa';

const ResumeBuilder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWIP, setShowWIP] = useState(false);
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', skills: '',
    education: '', experience: '', certifications: '',
    projects: '', linkedin: '', github: '', objective: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleGenerate = () => {
    setShowWIP(true);
  };

  const inputStyle = {
    width: '100%', padding: '0.65rem 0.875rem',
    borderRadius: '0.375rem', border: '1px solid #E2E8F0',
    outline: 'none', fontSize: '0.875rem', fontFamily: 'inherit',
    background: '#F8FAFC', color: '#1E293B', transition: 'border-color 0.2s'
  };

  const labelStyle = {
    display: 'block', marginBottom: '0.35rem',
    fontSize: '0.8rem', fontWeight: 600, color: '#374151'
  };

  const fields = [
    { name: 'fullName', label: 'Full Name', placeholder: 'Bharath Goud', type: 'input' },
    { name: 'email', label: 'Email Address', placeholder: 'your@email.com', type: 'input' },
    { name: 'phone', label: 'Phone Number', placeholder: '+91 9XXXXXXXXX', type: 'input' },
    { name: 'linkedin', label: 'LinkedIn Profile URL', placeholder: 'linkedin.com/in/yourname', type: 'input' },
    { name: 'github', label: 'GitHub Profile URL', placeholder: 'github.com/yourname', type: 'input' },
    { name: 'objective', label: 'Career Objective', placeholder: 'Aspiring Full Stack Developer...', type: 'textarea' },
    { name: 'skills', label: 'Skills (comma-separated)', placeholder: 'React, Node.js, Python, MongoDB...', type: 'textarea' },
    { name: 'education', label: 'Education', placeholder: 'B.Tech in CSE, XYZ University, 2024', type: 'textarea' },
    { name: 'experience', label: 'Experience', placeholder: 'Software Intern @ Company, 2023-2024...', type: 'textarea' },
    { name: 'certifications', label: 'Certifications', placeholder: 'AWS Cloud Practitioner, Google Analytics...', type: 'textarea' },
    { name: 'projects', label: 'Projects', placeholder: 'E-Commerce App: Built using React & Node...', type: 'textarea' },
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1, boxShadow: '0 10px 30px rgba(0, 51, 153, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 999,
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.875rem 1.5rem',
          background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
          color: 'white', border: 'none', borderRadius: '3rem', cursor: 'pointer',
          fontWeight: 600, fontSize: '0.9rem', fontFamily: 'inherit',
          boxShadow: '0 8px 20px rgba(0, 51, 153, 0.3)'
        }}
      >
        <FaFileAlt /> AI Resume Builder
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
            }}
          >
            <motion.div
              key="modal-box"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              style={{
                background: 'white', borderRadius: '1rem',
                width: '100%', maxWidth: '620px',
                maxHeight: '85vh', overflowY: 'auto',
                boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                position: 'relative'
              }}
            >
              {/* Modal Header */}
              <div style={{
                padding: '1.5rem 2rem', borderBottom: '1px solid #E2E8F0',
                background: 'linear-gradient(135deg, var(--color-primary), #003399)',
                borderRadius: '1rem 1rem 0 0',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FaFileAlt size={22} color="var(--color-accent)" />
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'white' }}>AI Resume Builder</h3>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Fill your details and generate a professional resume</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {/* Modal Form Body */}
              <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {fields.slice(0, 2).map(field => (
                    <div key={field.name}>
                      <label style={labelStyle}>{field.label}</label>
                      <input name={field.name} placeholder={field.placeholder} value={form[field.name]} onChange={handleChange} style={inputStyle} />
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {fields.slice(2, 4).map(field => (
                    <div key={field.name}>
                      <label style={labelStyle}>{field.label}</label>
                      <input name={field.name} placeholder={field.placeholder} value={form[field.name]} onChange={handleChange} style={inputStyle} />
                    </div>
                  ))}
                </div>

                {fields.slice(4).map(field => (
                  <div key={field.name}>
                    <label style={labelStyle}>{field.label}</label>
                    {field.type === 'textarea' ? (
                      <textarea name={field.name} placeholder={field.placeholder} value={form[field.name]} onChange={handleChange} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
                    ) : (
                      <input name={field.name} placeholder={field.placeholder} value={form[field.name]} onChange={handleChange} style={inputStyle} />
                    )}
                  </div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(0,51,153,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGenerate}
                  style={{
                    width: '100%', padding: '1rem',
                    background: 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))',
                    color: 'white', border: 'none', borderRadius: '0.5rem',
                    fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                    fontFamily: 'inherit', marginTop: '0.5rem'
                  }}
                >
                  <FaMagic /> Generate Resume
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WIP Popup */}
      <AnimatePresence>
        {showWIP && (
          <motion.div
            key="wip-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 1100,
              background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 18, stiffness: 200 }}
              style={{
                background: 'linear-gradient(135deg, #0F172A, #003399)',
                borderRadius: '1.5rem', padding: '3rem 2.5rem',
                textAlign: 'center', maxWidth: '450px', width: '100%',
                border: '1px solid rgba(153,204,0,0.3)',
                boxShadow: '0 0 60px rgba(153,204,0,0.15)'
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'inline-block', marginBottom: '1.5rem' }}
              >
                <FaRobot size={60} color="#99CC00" />
              </motion.div>

              <h2 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '1rem' }}>AI Resume Generator</h2>

              <div style={{
                background: 'rgba(153,204,0,0.15)', border: '1px solid rgba(153,204,0,0.4)',
                borderRadius: '0.75rem', padding: '1rem', marginBottom: '2rem'
              }}>
                <p style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>⚙️ Work In Progress</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  Our AI-powered resume generator is currently being built. Coming very soon with smart formatting and ATS optimization!
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(153,204,0,0.3)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowWIP(false)}
                style={{
                  padding: '0.875rem 2.5rem', background: 'var(--color-accent)',
                  color: 'var(--color-primary)', border: 'none', borderRadius: '0.5rem',
                  fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit'
                }}
              >
                Got it! 👍
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeBuilder;
