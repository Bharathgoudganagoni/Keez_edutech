import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

        {/* LOGO */}
        <Link
          to="/"
          className="nav-logo"
          onClick={closeMobileMenu}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="KeeZ-Edutech Logo"
            style={{
              height: '80px',
              objectFit: 'contain'
            }}
          />
        </Link>

        {/* NAV LINKS */}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>

          <li>
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/courses"
              onClick={closeMobileMenu}
              className={location.pathname === '/courses' ? 'active' : ''}
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              to="/internships"
              onClick={closeMobileMenu}
              className={location.pathname === '/internships' ? 'active' : ''}
            >
              Internships
            </Link>
          </li>

          <li>
            <Link
              to="/careers"
              onClick={closeMobileMenu}
              className={location.pathname === '/careers' ? 'active' : ''}
            >
              Careers
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>

          {/* MOBILE BUTTONS */}
          {mobileMenuOpen && (
            <>
              <li>
                <Link
                  to="/login"
                  className="login-btn"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>

              <li>
                <button
                  className="btn btn-primary"
                  onClick={closeMobileMenu}
                >
                  Join Now
                </button>
              </li>
            </>
          )}
        </ul>

        {/* DESKTOP ACTIONS */}
        <div
          className={`nav-actions ${mobileMenuOpen ? 'mobile-hidden' : ''}`}
          style={{ display: mobileMenuOpen ? 'none' : 'flex' }}
        >
          {user ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                {user.photoURL
                  ? <img src={user.photoURL} alt="avatar" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
                  : <FaUserCircle size={28} />}
                <span style={{ fontSize: '0.875rem' }}>{user.displayName || user.email?.split('@')[0]}</span>
              </div>
              <button className="btn btn-outline" onClick={async () => { await logout(); navigate('/'); }}
                style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-btn" style={{ textDecoration: 'none' }}>Login</Link>
              <Link to="/login"><button className="btn btn-primary">Join Now</button></Link>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-toggle"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;