import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaClock, FaSignal, FaCertificate, FaCheckCircle, FaArrowRight, FaTimes,
  FaChalkboardTeacher, FaProjectDiagram, FaUserTie, FaBriefcase,
  FaLaptopCode, FaFileAlt, FaComments, FaUsers, FaChartLine
} from 'react-icons/fa';
import { coursesData } from '../data/coursesData';
import '../styles/course-details.css';

const CourseDetailsPage = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  // Modal State
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "30b5d002-0680-4430-a12a-7783133f3a3f",
          subject: `New Enrollment Application: ${course.title}`,
          from_name: "KeeZ Edutech Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: course.title,
          learning_mode: formData.mode,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', mode: 'online' });
      } else {
        console.error("Web3Forms Error:", result);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', mode: 'online' });
      }
    } catch (error) {
      console.error("Submission failed", error);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', mode: 'online' });
    } finally {
      setIsSubmitting(false);
    }
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

      {/* 1. HERO SECTION */}
      <section className="course-hero">
        <img src={course.image} alt="Background" className="course-hero-bg" />
        <div className="container">
          <div className="course-hero-grid">
            <div className="course-hero-badges">
              <span className="hero-badge-pill accent"><FaClock /> {course.duration}</span>
              <span className="hero-badge-pill"><FaSignal /> {course.level}</span>
              <span className="hero-badge-pill"><FaCertificate /> Verified Certificate</span>
            </div>
            <div className="course-hero-content">
              <h1>{course.title}</h1>
              <p className="course-hero-tagline">{course.tagline}</p>
              <div className="hero-cta-group">
                <button className="btn-premium" onClick={handleOpenModal}>
                  Enroll Now <FaArrowRight />
                </button>
                <a href="#curriculum" className="btn-secondary-outline">
                  Explore Curriculum
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="course-main-layout">

          {/* LEFT COLUMN: MAIN CONTENT */}
          <div className="content-column">

            {/* OVERVIEW */}
            <section id="overview">
              <h2 className="section-heading">Program Overview</h2>
              <p className="section-subheading">{course.overview}</p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Industry Relevance</h3>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6' }}>{course.industryRelevance}</p>
            </section>

            {/* WHY CHOOSE THIS COURSE */}
            <section id="why-choose">
              <h2 className="section-heading">Why Choose This Course</h2>
              <p className="section-subheading">We provide an end-to-end ecosystem to ensure you succeed.</p>

              <div className="why-choose-grid">
                <div className="why-card">
                  <div className="why-icon"><FaChalkboardTeacher /></div>
                  <div className="why-text">
                    <h4>Live Interactive Classes</h4>
                    <p>Learn directly from industry experts in live, interactive sessions.</p>
                  </div>
                </div>
                <div className="why-card">
                  <div className="why-icon"><FaProjectDiagram /></div>
                  <div className="why-text">
                    <h4>Industry-Level Projects</h4>
                    <p>Build real-world applications that stand out on your portfolio.</p>
                  </div>
                </div>
                <div className="why-card">
                  <div className="why-icon"><FaUserTie /></div>
                  <div className="why-text">
                    <h4>Mentorship Support</h4>
                    <p>1-on-1 guidance from senior professionals in the field.</p>
                  </div>
                </div>
                <div className="why-card">
                  <div className="why-icon"><FaBriefcase /></div>
                  <div className="why-text">
                    <h4>Placement Assistance</h4>
                    <p>Dedicated career support, mock interviews, and resume building.</p>
                  </div>
                </div>
                <div className="why-card">
                  <div className="why-icon"><FaCertificate /></div>
                  <div className="why-text">
                    <h4>Certification</h4>
                    <p>Earn an industry-recognized certificate upon completion.</p>
                  </div>
                </div>
                <div className="why-card">
                  <div className="why-icon"><FaLaptopCode /></div>
                  <div className="why-text">
                    <h4>Flexible Learning</h4>
                    <p>Access recorded sessions and learn at your own pace if you miss a class.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SKILLS YOU WILL LEARN */}
            <section id="skills">
              <h2 className="section-heading">Skills You Will Learn</h2>
              <p className="section-subheading">Master the tools and technologies required by top companies.</p>

              <div className="skills-container">
                {course.technologies.map((tech, idx) => (
                  <div key={idx} className="skill-badge">
                    <FaCheckCircle className="icon" /> {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects">
              <h2 className="section-heading">Projects You Will Build</h2>
              <p className="section-subheading">Hands-on experience building scalable applications.</p>

              <div className="projects-grid">
                {course.projects.map((proj, idx) => (
                  <div key={idx} className="project-card">
                    <h4>{proj.title}</h4>
                    <p>{proj.desc}</p>
                    <div className="project-tech">{proj.tech}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* CAREER OPPORTUNITIES */}
            <section id="careers">
              <h2 className="section-heading">Career Opportunities</h2>
              <p className="section-subheading">Unlock high-paying roles in the tech industry.</p>

              <div className="career-box">
                <div className="career-stats-grid">
                  <div className="c-stat">
                    <div className="c-stat-val">{course.careerDetails.salaryRange}</div>
                    <div className="c-stat-label">Expected Salary Range</div>
                  </div>
                  <div className="c-stat">
                    <div className="c-stat-val">{course.careerDetails.demand}</div>
                    <div className="c-stat-label">Industry Demand</div>
                  </div>
                </div>

                <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Target Job Roles</h4>
                <div className="career-roles">
                  {course.careerDetails.roles.map((role, idx) => (
                    <div key={idx} className="career-role-tag">{role}</div>
                  ))}
                </div>
              </div>
            </section>

            {/* CURRICULUM */}
            <section id="curriculum">
              <h2 className="section-heading">Professional Curriculum</h2>
              <p className="section-subheading">A comprehensive weekly breakdown designed by industry experts.</p>

              <div className="curriculum-list">
                {course.curriculum.map((mod, idx) => (
                  <div key={idx} className="curriculum-item">
                    <div className="curriculum-week">{mod.week}</div>
                    <div className="curriculum-content">
                      <h4>{mod.title}</h4>
                      <p>{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* STUDENT BENEFITS */}
            <section id="benefits">
              <h2 className="section-heading">Student Benefits</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <FaFileAlt className="icon" />
                  <span>Resume Building</span>
                </div>
                <div className="benefit-item">
                  <FaComments className="icon" />
                  <span>Interview Preparation</span>
                </div>
                <div className="benefit-item">
                  <FaLaptopCode className="icon" />
                  <span>GitHub Portfolio</span>
                </div>
                <div className="benefit-item">
                  <FaUsers className="icon" />
                  <span>Community Support</span>
                </div>
                <div className="benefit-item">
                  <FaChartLine className="icon" />
                  <span>Career Guidance</span>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: STICKY PRICING CARD */}
          <div className="sidebar-column">
            <div className="pricing-card-wrapper">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Program Investment</h3>
                  <div className="price-amount">{course.price}</div>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-features">
                    <li><FaClock className="icon" /> {course.durationWeeks} Weeks Duration</li>
                    <li><FaChalkboardTeacher className="icon" /> Live Interactive Classes</li>
                    <li><FaProjectDiagram className="icon" /> {course.projects.length}+ Real-world Projects</li>
                    <li><FaUserTie className="icon" /> 1-on-1 Mentorship</li>
                    <li><FaCertificate className="icon" /> Verified Certificate</li>
                    <li><FaBriefcase className="icon" /> Placement Assistance</li>
                  </ul>
                  <button className="btn-premium pricing-btn" onClick={handleOpenModal}>
                    Enroll Now <FaArrowRight />
                  </button>
                  <div className="money-back">
                    <FaCheckCircle style={{ color: 'var(--color-accent)' }} /> 100% Satisfaction Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <section className="final-cta-section">
        <div className="container">
          <h2>Start Your Tech Career Journey Today</h2>
          <p>Join thousands of successful professionals who have graduated from our programs and transformed their careers.</p>
          <button className="btn-premium" onClick={handleOpenModal}>
            Apply for Admission <FaArrowRight />
          </button>
        </div>
      </section>

      {/* ENROLLMENT MODAL */}
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
                  <button type="submit" className="btn submit-btn" disabled={isSubmitting} style={{ background: 'var(--color-accent)', color: '#020617', marginTop: '1rem', padding: '1rem', fontSize: '1.05rem' }}>
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
                <button className="btn-premium" onClick={handleCloseModal} style={{ width: '100%', justifyContent: 'center' }}>
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
