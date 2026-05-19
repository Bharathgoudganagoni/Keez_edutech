import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaGithub } from 'react-icons/fa';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-wrapper" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-primary)',
      padding: '2rem'
    }}>
      {/* Animated Background */}
      <motion.div 
        style={{
          position: 'absolute', width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(153, 204, 0, 0.15) 0%, transparent 70%)',
          top: '-10%', left: '-10%', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        style={{
          position: 'absolute', width: '40vw', height: '40vw',
          background: 'radial-gradient(circle, rgba(0, 51, 153, 0.4) 0%, transparent 70%)',
          bottom: '-10%', right: '-10%', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0
        }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div 
        className="login-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          padding: '3rem',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          width: '100%',
          maxWidth: '450px',
          zIndex: 1,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src="/logo.png" alt="Logo" style={{ height: '40px', marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
            {isLogin ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p style={{ color: '#64748B', fontSize: '0.875rem' }}>
            {isLogin ? 'Enter your credentials to access your account' : 'Join KeeZ Campus and start learning today'}
          </p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {!isLogin && (
            <div className="input-group" style={{ position: 'relative' }}>
              <FaUser style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
              <input type="text" placeholder="Full Name" style={{
                width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', 
                borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0', 
                outline: 'none', transition: 'var(--transition)', background: '#F8FAFC'
              }} onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'} onBlur={(e) => e.target.style.borderColor = '#E2E8F0'} />
            </div>
          )}

          <div className="input-group" style={{ position: 'relative' }}>
            <FaEnvelope style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input type="email" placeholder="Email Address" style={{
              width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', 
              borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0', 
              outline: 'none', transition: 'var(--transition)', background: '#F8FAFC'
            }} onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'} onBlur={(e) => e.target.style.borderColor = '#E2E8F0'} />
          </div>

          <div className="input-group" style={{ position: 'relative' }}>
            <FaLock style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input type="password" placeholder="Password" style={{
              width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', 
              borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0', 
              outline: 'none', transition: 'var(--transition)', background: '#F8FAFC'
            }} onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'} onBlur={(e) => e.target.style.borderColor = '#E2E8F0'} />
          </div>

          {isLogin && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="#" style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Forgot Password?</a>
            </div>
          )}

          <motion.button 
            type="button" 
            whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 51, 153, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '0.875rem', background: 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))',
              color: 'var(--color-white)', borderRadius: 'var(--radius-md)', fontWeight: 600, border: 'none', cursor: 'pointer',
              marginTop: '0.5rem'
            }}
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </motion.button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: '#E2E8F0', zIndex: 0 }}></div>
          <span style={{ position: 'relative', zIndex: 1, background: 'var(--color-white)', padding: '0 10px', fontSize: '0.75rem', color: '#94A3B8' }}>Or continue with</span>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <motion.button whileHover={{ y: -3, boxShadow: 'var(--shadow-md)' }} style={{ flex: 1, padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'var(--color-white)', border: '1px solid #E2E8F0', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: 600, color: '#475569' }}>
            <FaGoogle color="#EA4335" /> Google
          </motion.button>
          <motion.button whileHover={{ y: -3, boxShadow: 'var(--shadow-md)' }} style={{ flex: 1, padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'var(--color-white)', border: '1px solid #E2E8F0', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: 600, color: '#475569' }}>
            <FaGithub color="#181717" /> GitHub
          </motion.button>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: '#475569' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            onClick={() => setIsLogin(!isLogin)} 
            style={{ color: 'var(--color-secondary)', fontWeight: 600, cursor: 'pointer' }}
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
