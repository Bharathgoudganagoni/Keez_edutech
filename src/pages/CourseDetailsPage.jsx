import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaSignal, FaCertificate, FaCheckCircle, FaArrowRight, FaTimes } from 'react-icons/fa';
import { coursesData } from '../data/coursesData';
import '../styles/course-details.css';

const CourseDetailsPage = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mode: 'online'
  });

  useEffect(() => {
    // Scroll to top when course page changes
    window.scrollTo(0, 0);
    
    if (slug && coursesData[slug]) {
      setCourse(coursesData[slug]);
    } else {
      setCourse(null);
    }
  }, [slug]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API registration request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', mode: 'online' });
    }, 1500);
  };

  if (!course) {
    return (
      <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Program Not Found</h2>
          <p style={{ color: '#64748B', marginBottom: '2rem', fontSize: '1.1rem' }}>The course you are looking for might have been moved or renamed.</p>
          <Link to="/courses" className="btn btn-primary">
            Explore All Programs <FaArrowRight style={{ marginLeft: '0.5rem' }} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-wrapper">
      {/* HERO SECTION */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-grid">
            <div className="course-hero-content">
              <div className="course-hero-badges">
                <span className="hero-badge-pill accent">{course.duration}</span>
                <span className="hero-badge-pill">{course.level}</span>
              </div>
              <h1>{course.title}</h1>
              <p className="course-hero-tagline">{course.tagline}</p>
              <button className="btn btn-primary" onClick={handleOpenModal} style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}>
                Enroll Now <FaArrowRight style={{ marginLeft: '0.5rem' }} />
              </button>
            </div>
            <div className="course-hero-image-wrapper">
              <img src={course.image} alt={course.title} className="course-hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS ROW */}
      <section className="course-stats-container">
        <div className="container">
          <div className="course-stats-grid">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaClock />
              </div>
              <div>
                <div className="stat-info-title">Duration</div>
                <div className="stat-info-value">{course.duration}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaSignal />
              </div>
              <div>
                <div className="stat-info-title">Skill Level</div>
                <div className="stat-info-value">{course.level}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaCertificate />
              </div>
              <div>
                <div className="stat-info-title">Certification</div>
                <div className="stat-info-value">Verified Certificate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT */}
      <section className="course-sections-container">
        <div className="container">
          <div className="details-layout-grid">
            {/* Left Column: Overview and Details */}
            <div>
              <div className="overview-box">
                <h2 className="detail-section-title">Program Overview</h2>
                <p>{course.overview}</p>
                
                <h3 style={{ fontSize: '1.25rem', margin: '2rem 0 0.75rem 0', color: 'var(--color-primary)' }}>Industry Relevance</h3>
                <p>{course.industryRelevance}</p>
              </div>
            </div>

            {/* Right Column: Sticky Careers list */}
            <div>
              <div className="careers-sidebar-card">
                <h3>Career Opportunities</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1.25rem', lineHeight: '1.4' }}>
                  Mastering these modules qualifies you for multiple high-demand industry profiles:
                </p>
                <div className="career-roles-list">
                  {course.careers.map((career, idx) => (
                    <div key={idx} className="career-role-chip">
                      {career}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES COVERED */}
      <section className="technologies-section">
        <div className="container">
          <h2 className="detail-section-title">Technologies & Topics Covered</h2>
          <p style={{ color: '#475569', marginBottom: '1rem', maxWidth: '600px' }}>
            Get hands-on experience with modern industry-standard tools and methodologies.
          </p>
          <div className="technologies-grid">
            {course.technologies.map((tech, idx) => (
              <div key={idx} className="tech-badge-card">
                <div className="tech-bullet"></div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}
      <section className="curriculum-section">
        <div className="container">
          <h2 className="detail-section-title">Syllabus Curriculum</h2>
          <p style={{ color: '#475569', marginBottom: '1rem', maxWidth: '600px' }}>
            A meticulously structured learning plan split into comprehensive modules to take you from fundamentals to pro level.
          </p>
          <div className="modules-grid">
            {course.modules.map((mod, idx) => (
              <div key={idx} className="module-card">
                <div className="module-num">{idx + 1}</div>
                <div className="module-content">
                  <h3>{mod.title}</h3>
                  <p>{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & OUTCOMES SPLIT */}
      <section className="split-benefits-section">
        <div className="container">
          <div className="benefits-split-grid">
            {/* Skills Students Will Gain */}
            <div>
              <h2 className="detail-section-title">Skills You Will Gain</h2>
              <div className="benefit-bullet-list">
                {course.skills.map((skill, idx) => (
                  <div key={idx} className="benefit-bullet-item">
                    <FaCheckCircle className="benefit-icon-check" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div>
              <h2 className="detail-section-title">Learning Outcomes</h2>
              <div className="benefit-bullet-list">
                {course.outcomes.map((outcome, idx) => (
                  <div key={idx} className="benefit-bullet-item">
                    <FaCheckCircle className="benefit-icon-check" style={{ color: 'var(--color-secondary)' }} />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA FOOTER */}
      <section className="cta-footer-banner">
        <div className="container">
          <div className="cta-footer-content">
            <h2 className="cta-footer-title">Start Your Career Journey Today</h2>
            <p className="cta-footer-desc">
              Join thousands of successful professionals who have graduated from our programs and transformed their careers.
            </p>
            <button className="btn cta-footer-btn" onClick={handleOpenModal}>
              Secure Your Spot <FaArrowRight style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>
        </div>
      </section>

      {/* ENROLLMENT MODAL POPUP */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              <FaTimes />
            </button>
            
            {!isSubmitted ? (
              <>
                <h3 className="modal-title">Apply for {course.title}</h3>
                <p className="modal-subtitle">Provide your contact info below, and our career advisor will get in touch with you shortly.</p>
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mode">Preferred Learning Mode</label>
                    <select id="mode" name="mode" value={formData.mode} onChange={handleInputChange}>
                      <option value="online">Online Interactive Live Sessions</option>
                      <option value="hybrid">Hybrid Classroom Learning</option>
                      <option value="self-paced">Self-paced Recorded Track</option>
                    </select>
                  </div>
                  <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Processing Application..." : "Submit Application"}
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <FaCheckCircle size={56} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Application Submitted!</h3>
                <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '2rem' }}>
                  Thank you for applying to the <strong>{course.title}</strong> cohort. A representative will contact you at your email or phone within the next 24 working hours.
                </p>
                <button className="btn btn-primary" onClick={handleCloseModal}>
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;
