import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaGithub, FaGraduationCap, FaCode, FaRocket, FaStar, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

/* ─── Animated bubble ─── */
const Bubble = ({ size, x, y, delay, duration, color }) => (
  <motion.div style={{ position:'absolute', width:size, height:size, background:color, borderRadius:'50%', filter:'blur(60px)', top:y, left:x, zIndex:0, pointerEvents:'none' }}
    animate={{ y:[0,-40,0], x:[0,20,0], scale:[1,1.15,1], opacity:[0.5,0.8,0.5] }}
    transition={{ duration, repeat:Infinity, delay, ease:'easeInOut' }} />
);

const Beam = ({ x, delay }) => (
  <motion.div style={{ position:'absolute', top:0, left:x, width:'2px', height:'100%', background:'linear-gradient(to bottom, transparent, rgba(153,204,0,0.4), transparent)', zIndex:0 }}
    animate={{ opacity:[0,1,0], scaleY:[0.5,1,0.5] }}
    transition={{ duration:3, repeat:Infinity, delay, ease:'easeInOut' }} />
);

const FloatIcon = ({ icon, x, y, delay, color }) => (
  <motion.div style={{ position:'absolute', top:y, left:x, color, fontSize:'1.5rem', zIndex:1 }}
    initial={{ opacity:0, scale:0 }}
    animate={{ opacity:[0,0.7,0], y:[0,-80,-160], scale:[0.5,1.2,0.5] }}
    transition={{ duration:5, repeat:Infinity, delay, ease:'easeInOut' }}>
    {icon}
  </motion.div>
);

const Ring = ({ size, duration, delay, color, opacity=0.12 }) => (
  <motion.div style={{ position:'absolute', top:'50%', left:'50%', width:size, height:size, marginTop:-size/2, marginLeft:-size/2, borderRadius:'50%', border:`1.5px solid ${color}`, opacity }}
    animate={{ rotate:360, scale:[1,1.06,1] }}
    transition={{ duration, repeat:Infinity, ease:'linear', delay }} />
);

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [focused, setFocused] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [localError, setLocalError] = useState('');

  const { loginWithGoogle, loginWithGithub, signUpWithEmail, loginWithEmail, error } = useAuth();
  const navigate = useNavigate();

  const inputBase = {
    width:'100%', padding:'0.875rem 1rem 0.875rem 2.75rem',
    borderRadius:'0.6rem', border:'1.5px solid #E2E8F0',
    outline:'none', background:'#F8FAFC', fontFamily:'inherit',
    fontSize:'0.9rem', color:'#1E293B', transition:'all 0.25s ease', boxSizing:'border-box'
  };
  const fStyle = (name) => ({
    ...inputBase,
    borderColor: focused === name ? '#003399' : '#E2E8F0',
    boxShadow: focused === name ? '0 0 0 3px rgba(0,51,153,0.1)' : 'none'
  });

  const handleSocial = async (fn, label) => {
    setSubmitting(true); setLocalError('');
    try {
      await fn();
      setSuccess(`Signed in with ${label}!`);
      setTimeout(() => navigate('/'), 1200);
    } catch {
      setLocalError(`${label} sign-in failed. Check Firebase config.`);
    }
    setSubmitting(false);
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    setSubmitting(true); setLocalError('');
    try {
      if (isLogin) {
        await loginWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password);
      }
      setSuccess(isLogin ? 'Signed in successfully!' : 'Account created!');
      setTimeout(() => navigate('/'), 1200);
    } catch (err) {
      setLocalError(err.message.replace('Firebase: ', '').replace(/\(.*\)\.?/, '').trim());
    }
    setSubmitting(false);
  };

  const displayError = localError || error;

  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden', background:'radial-gradient(ellipse at 20% 50%, #001a5c 0%, #0A1628 40%, #001022 100%)', padding:'2rem' }}>

      {/* Background */}
      <div style={{ position:'absolute', top:'50%', left:'50%', zIndex:0, pointerEvents:'none' }}>
        <Ring size={700} duration={30} delay={0}   color="#99CC00" />
        <Ring size={900} duration={45} delay={5}   color="#003399" />
        <Ring size={500} duration={20} delay={2}   color="#99CC00" />
      </div>
      <Beam x="15%" delay={0} /><Beam x="35%" delay={1.5} /><Beam x="65%" delay={0.8} /><Beam x="85%" delay={2.2} />
      <FloatIcon icon={<FaGraduationCap/>} x="8%"  y="70%" delay={0}   color="#99CC00" />
      <FloatIcon icon={<FaCode/>}          x="88%" y="65%" delay={1.5} color="#6699FF" />
      <FloatIcon icon={<FaRocket/>}        x="20%" y="80%" delay={3}   color="#99CC00" />
      <FloatIcon icon={<FaStar/>}          x="75%" y="75%" delay={2}   color="#FFD700" />
      {[{c:'rgba(153,204,0,0.18)',w:500,x:'-10%',y:'-15%',dur:14},{c:'rgba(0,51,153,0.35)',w:400,x:'65%',y:'50%',dur:18},{c:'rgba(153,204,0,0.10)',w:300,x:'30%',y:'70%',dur:11}].map((b,i)=>(
        <Bubble key={i} size={b.w} x={b.x} y={b.y} delay={i*2} duration={b.dur} color={b.c} />
      ))}
      <div style={{ position:'absolute', inset:0, zIndex:0, opacity:0.06, backgroundImage:'radial-gradient(circle, #99CC00 1px, transparent 1px)', backgroundSize:'35px 35px' }} />

      {/* Card */}
      <motion.div
        initial={{ opacity:0, y:40, scale:0.96 }} animate={{ opacity:1, y:0, scale:1 }} transition={{ duration:0.6, ease:'easeOut' }}
        style={{ position:'relative', zIndex:2, background:'rgba(255,255,255,0.97)', backdropFilter:'blur(24px)', padding:'2.5rem', borderRadius:'1.25rem', boxShadow:'0 30px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(153,204,0,0.25)', width:'100%', maxWidth:'440px' }}
      >
        {/* Top accent */}
        <div style={{ position:'absolute', top:0, left:'15%', width:'70%', height:'3px', background:'linear-gradient(90deg, transparent, #003399, #99CC00, transparent)', borderRadius:'0 0 3px 3px' }} />

        {/* Logo */}
        <div style={{ textAlign:'center', marginBottom:'1.75rem' }}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="KeeZ Campus" style={{ height:'52px', objectFit:'contain', marginBottom:'1rem' }} />
          <AnimatePresence mode="wait">
            <motion.div key={isLogin?'l':'s'} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.25 }}>
              <h2 style={{ fontSize:'1.55rem', color:'#002D8B', margin:'0 0 0.3rem', fontFamily:'Outfit,sans-serif' }}>{isLogin ? 'Welcome Back!' : 'Get Started'}</h2>
              <p style={{ color:'#64748B', fontSize:'0.8rem', margin:0 }}>{isLogin ? 'Continue your learning journey' : 'Create your free KeeZ Campus account'}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Success / Error banners */}
        <AnimatePresence>
          {success && (
            <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} style={{ background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.3)', borderRadius:'0.5rem', padding:'0.75rem 1rem', marginBottom:'1rem', color:'#065f46', fontSize:'0.85rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
              <FaCheckCircle /> {success}
            </motion.div>
          )}
          {displayError && (
            <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} style={{ background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.3)', borderRadius:'0.5rem', padding:'0.75rem 1rem', marginBottom:'1rem', color:'#991b1b', fontSize:'0.85rem' }}>
              ⚠ {displayError}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Buttons */}
        <div style={{ display:'flex', gap:'0.75rem', marginBottom:'1.25rem' }}>
          <motion.button whileHover={{ y:-3, boxShadow:'0 8px 20px rgba(234,67,53,0.25)' }} whileTap={{ scale:0.97 }}
            onClick={() => handleSocial(loginWithGoogle, 'Google')} disabled={submitting}
            style={{ flex:1, padding:'0.75rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', background:'white', border:'1.5px solid #E2E8F0', borderRadius:'0.6rem', cursor:'pointer', fontWeight:700, color:'#475569', fontSize:'0.85rem', fontFamily:'inherit', transition:'all 0.2s' }}>
            <FaGoogle color="#EA4335" /> Google
          </motion.button>
          <motion.button whileHover={{ y:-3, boxShadow:'0 8px 20px rgba(0,0,0,0.2)' }} whileTap={{ scale:0.97 }}
            onClick={() => handleSocial(loginWithGithub, 'GitHub')} disabled={submitting}
            style={{ flex:1, padding:'0.75rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', background:'white', border:'1.5px solid #E2E8F0', borderRadius:'0.6rem', cursor:'pointer', fontWeight:700, color:'#475569', fontSize:'0.85rem', fontFamily:'inherit', transition:'all 0.2s' }}>
            <FaGithub color="#181717" /> GitHub
          </motion.button>
        </div>

        {/* Divider */}
        <div style={{ position:'relative', margin:'0 0 1.25rem', textAlign:'center' }}>
          <div style={{ position:'absolute', top:'50%', left:0, width:'100%', height:'1px', background:'#E2E8F0' }} />
          <span style={{ position:'relative', background:'white', padding:'0 12px', fontSize:'0.73rem', color:'#94A3B8', fontWeight:500 }}>Or with Email</span>
        </div>

        {/* Email Form */}
        <AnimatePresence mode="wait">
          <motion.form key={isLogin?'fl':'fs'} initial={{ opacity:0, x:isLogin?-20:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:isLogin?20:-20 }} transition={{ duration:0.3 }} onSubmit={handleEmail}
            style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>

            {!isLogin && (
              <div style={{ position:'relative' }}>
                <FaUser style={{ position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color: focused==='name'?'#003399':'#94A3B8', fontSize:'0.875rem', transition:'color 0.2s', zIndex:1 }} />
                <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} style={fStyle('name')} onFocus={()=>setFocused('name')} onBlur={()=>setFocused('')} required />
              </div>
            )}

            <div style={{ position:'relative' }}>
              <FaEnvelope style={{ position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color: focused==='email'?'#003399':'#94A3B8', fontSize:'0.875rem', transition:'color 0.2s', zIndex:1 }} />
              <input type="email" placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)} style={fStyle('email')} onFocus={()=>setFocused('email')} onBlur={()=>setFocused('')} required />
            </div>

            <div style={{ position:'relative' }}>
              <FaLock style={{ position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color: focused==='pw'?'#003399':'#94A3B8', fontSize:'0.875rem', transition:'color 0.2s', zIndex:1 }} />
              <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} style={fStyle('pw')} onFocus={()=>setFocused('pw')} onBlur={()=>setFocused('')} required minLength={6} />
            </div>

            {isLogin && <div style={{ textAlign:'right', marginTop:'-0.5rem' }}><a href="#" style={{ fontSize:'0.78rem', color:'#003399', fontWeight:600 }}>Forgot password?</a></div>}

            <motion.button type="submit" disabled={submitting}
              whileHover={{ scale:1.03, boxShadow:'0 12px 30px rgba(0,45,139,0.4)' }} whileTap={{ scale:0.97 }}
              style={{ padding:'0.9rem', background:'linear-gradient(90deg, #003399, #001a66)', color:'white', borderRadius:'0.6rem', fontWeight:700, border:'none', cursor:'pointer', fontSize:'1rem', fontFamily:'inherit', position:'relative', overflow:'hidden' }}>
              <motion.span style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} animate={{ x:['-100%','100%'] }} transition={{ duration:2, repeat:Infinity, ease:'linear' }} />
              {submitting ? '⏳ Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
            </motion.button>
          </motion.form>
        </AnimatePresence>

        {/* Toggle */}
        <p style={{ marginTop:'1.5rem', textAlign:'center', fontSize:'0.85rem', color:'#64748B' }}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <motion.span onClick={() => { setIsLogin(!isLogin); setLocalError(''); setSuccess(''); }} whileHover={{ color:'#001a66' }} style={{ color:'#003399', fontWeight:700, cursor:'pointer' }}>
            {isLogin ? 'Sign Up Free' : 'Sign In'}
          </motion.span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
