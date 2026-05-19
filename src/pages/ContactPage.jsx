import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '80px', background: '#F8FAFC', minHeight: '100vh' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Get In <span style={{ color: 'var(--color-accent)' }}>Touch</span></h1>
          <p style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>Have questions about our programs or career opportunities? Our team is here to help.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ background: 'var(--color-primary)', color: 'var(--color-white)', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Contact Information</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <FaMapMarkerAlt size={24} style={{ color: 'var(--color-accent)' }} />
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Our Location</h4>
                  <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>Hyderabad,Telangana</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <FaPhoneAlt size={24} style={{ color: 'var(--color-accent)' }} />
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Phone Number</h4>
                  <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>+91 97043 99488</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <FaEnvelope size={24} style={{ color: 'var(--color-accent)' }} />
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Email Address</h4>
                  <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>Srikanth@Keezenix.com</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ background: 'var(--color-white)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="firstName" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>First Name</label>
                  <input type="text" id="firstName" placeholder="John" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #CBD5E1', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="lastName" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>Last Name</label>
                  <input type="text" id="lastName" placeholder="Doe" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #CBD5E1', outline: 'none' }} />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #CBD5E1', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #CBD5E1', outline: 'none', resize: 'vertical' }}></textarea>
              </div>

              <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={(e) => { e.preventDefault(); alert('Message sent successfully! We will get back to you soon.'); }}>Send Message</button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '4rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', height: '400px' }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6392906210703!2d-122.08624618469247!3d37.422065579825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425def45%3A0x8c82cb08f44d9f64!2sTech%20Park!5e0!3m2!1sen!2sus!4v1625550000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Office Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
