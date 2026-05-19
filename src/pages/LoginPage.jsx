import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaGithub, FaGraduationCap, FaCode, FaRocket, FaStar } from 'react-icons/fa';

/* ─── Animated orbiting ring ─── */
const Ring = ({ size, duration, delay, color, opacity = 0.15 }) => (
  <motion.div
    style={{
      position: 'absolute', top: '50%', left: '50%',
      width: size, height: size,
      marginTop: -size / 2, marginLeft: -size / 2,
      borderRadius: '50%',
      border: `1.5px solid ${color}`,
      opacity,
    }}
    animate={{ rotate: 360, scale: [1, 1.06, 1] }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
  />
);

/* ─── Floating mini icon ─── */
const FloatIcon = ({ icon, x, y, delay, color }) => (
  <motion.div
    style={{ position: 'absolute', top: y, left: x, color, fontSize: '1.5rem', zIndex: 1 }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.7, 0], y: [0, -80, -160], scale: [0.5, 1.2, 0.5] }}
    transition={{ duration: 5, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    {icon}
  </motion.div>
);

/* ─── Beam of light ─── */
const Beam = ({ x, delay }) => (
  <motion.div
    style={{
      position: 'absolute',
      top: 0, left: x,
      width: '2px', height: '100%',
      background: 'linear-gradient(to bottom, transparent, rgba(153,204,0,0.4), transparent)',
      zIndex: 0,
    }}
    animate={{ opacity: [0, 1, 0], scaleY: [0.5, 1, 0.5] }}
    transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [focused, setFocused] = useState('');

  const inputBase = {
    width: '100%',
    padding: '0.875rem 1rem 0.875rem 2.75rem',
    borderRadius: '0.6rem',
    border: '1.5px solid #E2E8F0',
    outline: 'none',
    background: '#F8FAFC',
    fontFamily: 'inherit',
    fontSize: '0.9rem',
    color: '#1E293B',
    transition: 'all 0.25s ease',
  };

  const focusedStyle = (name) => ({
    ...inputBase,
    borderColor: focused === name ? '#003399' : '#E2E8F0',
    boxShadow: focused === name ? '0 0 0 3px rgba(0,51,153,0.1)' : 'none',
  });

  const fields = isLogin
    ? [
        { name: 'email', type: 'email', placeholder: 'Email Address', icon: <FaEnvelope /> },
        { name: 'password', type: 'password', placeholder: 'Password', icon: <FaLock /> },
      ]
    : [
        { name: 'name', type: 'text', placeholder: 'Full Name', icon: <FaUser /> },
        { name: 'email', type: 'email', placeholder: 'Email Address', icon: <FaEnvelope /> },
        { name: 'password', type: 'password', placeholder: 'Password', icon: <FaLock /> },
      ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 20% 50%, #001a5c 0%, #0A1628 40%, #001022 100%)',
      padding: '2rem',
    }}>

      {/* ── Orbiting rings centred on viewport ── */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 0, pointerEvents: 'none' }}>
        <Ring size={700} duration={30} delay={0}   color="#99CC00" opacity={0.08} />
        <Ring size={900} duration={45} delay={5}   color="#003399" opacity={0.1}  />
        <Ring size={500} duration={20} delay={2}   color="#99CC00" opacity={0.12} />
      </div>

      {/* ── Light beams ── */}
      <Beam x="15%"  delay={0}   />
      <Beam x="35%"  delay={1.5} />
      <Beam x="65%"  delay={0.8} />
      <Beam x="85%"  delay={2.2} />

      {/* ── Floating tech icons ── */}
      <FloatIcon icon={<FaGraduationCap />} x="8%"  y="70%" delay={0}   color="#99CC00" />
      <FloatIcon icon={<FaCode />}          x="88%" y="65%" delay={1.5} color="#6699FF" />
      <FloatIcon icon={<FaRocket />}        x="20%" y="80%" delay={3}   color="#99CC00" />
      <FloatIcon icon={<FaStar />}          x="75%" y="75%" delay={2}   color="#FFD700" />

      {/* ── Glowing bg blobs ── */}
      {[
        { c:'rgba(153,204,0,0.18)',  w:500, x:'-10%', y:'-15%', dur:14 },
        { c:'rgba(0,51,153,0.35)',   w:400, x:'65%',  y:'50%',  dur:18 },
        { c:'rgba(153,204,0,0.10)',  w:300, x:'30%',  y:'70%',  dur:11 },
      ].map((b, i) => (
        <motion.div key={i}
          style={{ position:'absolute', width:b.w, height:b.w, borderRadius:'50%', background:b.c, filter:'blur(80px)', top:b.y, left:b.x, zIndex:0 }}
          animate={{ scale:[1,1.25,1], x:[0,40,0], opacity:[0.6,1,0.6] }}
          transition={{ duration:b.dur, repeat:Infinity, ease:'easeInOut', delay: i*2 }}
        />
      ))}

      {/* ── Subtle dot grid ── */}
      <div style={{
        position:'absolute', inset:0, zIndex:0, opacity:0.06,
        backgroundImage:'radial-gradient(circle, #99CC00 1px, transparent 1px)',
        backgroundSize:'35px 35px',
      }} />

      {/* ── Card ── */}
      <motion.div
        key={isLogin ? 'login' : 'signup'}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.95 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position:'relative', zIndex:2,
          background:'rgba(255,255,255,0.97)',
          backdropFilter:'blur(24px)',
          padding:'2.5rem',
          borderRadius:'1.25rem',
          boxShadow:'0 30px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(153,204,0,0.25), inset 0 1px 0 rgba(255,255,255,0.8)',
          width:'100%', maxWidth:'430px',
        }}
      >
        {/* Top accent line */}
        <div style={{ position:'absolute', top:0, left:'15%', width:'70%', height:'3px', background:'linear-gradient(90deg, transparent, #003399, #99CC00, transparent)', borderRadius:'0 0 3px 3px' }} />

        {/* Logo */}
        <motion.div
          initial={{ scale:0.8, opacity:0 }}
          animate={{ scale:1, opacity:1 }}
          transition={{ delay:0.2, duration:0.5 }}
          style={{ textAlign:'center', marginBottom:'1.75rem' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="KeeZ Campus"
            style={{ height:'52px', objectFit:'contain', marginBottom:'1rem' }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login-text' : 'signup-text'}
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-10 }}
              transition={{ duration:0.3 }}
            >
              <h2 style={{ fontSize:'1.55rem', color:'#002D8B', margin:'0 0 0.3rem', fontFamily:'Outfit, sans-serif' }}>
                {isLogin ? 'Welcome Back!' : 'Get Started'}
              </h2>
              <p style={{ color:'#64748B', fontSize:'0.8rem', margin:0 }}>
                {isLogin ? 'Continue your learning journey' : 'Create your free KeeZ Campus account'}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Fields */}
        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? 'form-login' : 'form-signup'}
            initial={{ opacity:0, x: isLogin ? -30 : 30 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0, x: isLogin ? 30 : -30 }}
            transition={{ duration:0.35 }}
            style={{ display:'flex', flexDirection:'column', gap:'1rem' }}
          >
            {fields.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity:0, y:15 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay: i * 0.07, duration:0.35 }}
                style={{ position:'relative' }}
              >
                <span style={{ position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color: focused===f.name ? '#003399' : '#94A3B8', fontSize:'0.875rem', transition:'color 0.2s', zIndex:1 }}>
                  {f.icon}
                </span>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  style={focusedStyle(f.name)}
                  onFocus={() => setFocused(f.name)}
                  onBlur={() => setFocused('')}
                />
              </motion.div>
            ))}

            {isLogin && (
              <div style={{ textAlign:'right', marginTop:'-0.25rem' }}>
                <a href="#" style={{ fontSize:'0.78rem', color:'#003399', fontWeight:600 }}>Forgot password?</a>
              </div>
            )}

            <motion.button
              type="button"
              whileHover={{ scale:1.03, boxShadow:'0 12px 30px rgba(0,45,139,0.45)' }}
              whileTap={{ scale:0.97 }}
              style={{
                padding:'0.9rem', marginTop:'0.25rem',
                background:'linear-gradient(90deg, #003399, #001a66)',
                color:'white', borderRadius:'0.6rem',
                fontWeight:700, border:'none', cursor:'pointer',
                fontSize:'1rem', fontFamily:'inherit',
                position:'relative', overflow:'hidden',
              }}
            >
              <motion.span
                style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)' }}
                animate={{ x:['-100%','100%'] }}
                transition={{ duration:2, repeat:Infinity, ease:'linear' }}
              />
              {isLogin ? 'Sign In' : 'Create Account'}
            </motion.button>
          </motion.form>
        </AnimatePresence>

        {/* Divider */}
        <div style={{ position:'relative', margin:'1.5rem 0', textAlign:'center' }}>
          <div style={{ position:'absolute', top:'50%', left:0, width:'100%', height:'1px', background:'#E2E8F0' }} />
          <span style={{ position:'relative', background:'white', padding:'0 12px', fontSize:'0.73rem', color:'#94A3B8', fontWeight:500 }}>
            Or continue with
          </span>
        </div>

        {/* Social */}
        <div style={{ display:'flex', gap:'0.75rem' }}>
          {[{ icon:<FaGoogle color="#EA4335"/>, label:'Google'}, { icon:<FaGithub color="#181717"/>, label:'GitHub'}].map(b => (
            <motion.button key={b.label}
              whileHover={{ y:-3, boxShadow:'0 8px 20px rgba(0,0,0,0.1)', borderColor:'#CBD5E1' }}
              style={{ flex:1, padding:'0.7rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', background:'white', border:'1.5px solid #E2E8F0', borderRadius:'0.6rem', cursor:'pointer', fontWeight:600, color:'#475569', fontSize:'0.85rem', fontFamily:'inherit', transition:'border-color 0.2s' }}
            >
              {b.icon} {b.label}
            </motion.button>
          ))}
        </div>

        {/* Toggle */}
        <p style={{ marginTop:'1.5rem', textAlign:'center', fontSize:'0.85rem', color:'#64748B' }}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <motion.span
            onClick={() => setIsLogin(!isLogin)}
            whileHover={{ color:'#001a66' }}
            style={{ color:'#003399', fontWeight:700, cursor:'pointer' }}
          >
            {isLogin ? 'Sign Up Free' : 'Sign In'}
          </motion.span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
