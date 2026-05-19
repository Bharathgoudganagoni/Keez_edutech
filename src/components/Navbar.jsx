import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          {/* Use the provided logo image instead of text/icon */}
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
  <img
    src={`${import.meta.env.BASE_URL}logo.png`}
    alt="KeeZ-Edutech Logo"
    style={{
      height: '80px',
      objectFit: 'contain'
    }}
  />
</Link>
        </Link>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/courses" onClick={closeMobileMenu} className={location.pathname === '/courses' ? 'active' : ''}>Courses</Link></li>
          <li><Link to="/internships" onClick={closeMobileMenu} className={location.pathname === '/internships' ? 'active' : ''}>Internships</Link></li>
          <li><Link to="/careers" onClick={closeMobileMenu} className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          {mobileMenuOpen && (
            <>
              <li><Link to="/login" className="login-btn" onClick={closeMobileMenu}>Login</Link></li>
              <li><button className="btn btn-primary" onClick={closeMobileMenu}>Join Now</button></li>
            </>
          )}
        </ul>

        <div className={`nav-actions ${mobileMenuOpen ? 'mobile-hidden' : ''}`} style={{ display: mobileMenuOpen ? 'none' : 'flex' }}>
          <Link to="/login" className="login-btn" style={{ textDecoration: 'none' }}>Login</Link>
          <button className="btn btn-primary">Join Now</button>
        </div>

        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
