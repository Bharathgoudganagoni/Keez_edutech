import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import { coursesData } from '../data/coursesData';

const Courses = () => {
  const coursesList = Object.values(coursesData);

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Premium <span className="gradient-text">Programs</span></h2>
          <p className="section-subtitle">Choose from our industry-aligned programs designed to accelerate your career growth and land your dream job.</p>
        </div>

        <div className="courses-grid">
          {coursesList.map((course, index) => (
            <motion.div 
              key={course.slug} 
              className="course-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="course-image" style={{ background: 'none', padding: 0 }}>
                <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="level-badge" style={{ background: 'rgba(0, 0, 0, 0.65)' }}>{course.level}</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.shortDesc}</p>
                <div className="course-footer">
                  <div className="course-duration"><FaClock style={{ color: 'var(--color-accent)' }} /> {course.duration}</div>
                  <Link to={`/courses/${course.slug}`} className="enroll-btn" style={{ textDecoration: 'none' }}>
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

