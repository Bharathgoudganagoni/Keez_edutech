import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="nav-logo" style={{ display: 'inline-block', background: 'white', padding: '10px 20px', borderRadius: '8px', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="KeeZ-Edutech Logo" style={{ height: '60px', objectFit: 'contain', display: 'block' }} />
            </Link>
            <p>Empowering the next generation of tech leaders with industry-ready skills and professional mentorship.</p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/internships">Internships</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Top Programs</h4>
            <div className="footer-links">
              <Link to="/courses">Full Stack Web Dev</Link>
              <Link to="/courses">AI & Prompt Engineering</Link>
              <Link to="/courses">Data Science Pro</Link>
              <Link to="/courses">UI/UX Design</Link>
              <Link to="/courses">Cyber Security</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="icon" />
                <span>123 Innovation Drive, Tech Park, San Jose, CA 95134</span>
              </li>
              <li>
                <FaPhoneAlt className="icon" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li>
                <FaEnvelope className="icon" />
                <span>hello@keezcampus.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KeeZ Campus By Keezenix Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
