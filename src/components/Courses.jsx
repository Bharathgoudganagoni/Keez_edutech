import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock } from 'react-icons/fa';

const Courses = () => {
  const handleWIP = (e) => {
    e.preventDefault();
    alert("Work in Progress: Enrollment functionality is coming soon!");
  };

  const courses = [
    {
      title: 'Full Stack Web Development',
      desc: 'Master React, Node.js, and MongoDB. Build real-world projects and get industry-ready.',
      duration: '6 Months',
      level: 'Beginner to Pro',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'AI & Prompt Engineering',
      desc: 'Learn to leverage AI tools, write effective prompts, and build AI-driven applications.',
      duration: '3 Months',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Data Science Pro',
      desc: 'Dive deep into data analysis, machine learning algorithms, and data visualization techniques.',
      duration: '5 Months',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Cyber Security Essentials',
      desc: 'Learn the fundamentals of ethical hacking, network security, and threat mitigation.',
      duration: '4 Months',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'UI/UX Design Masterclass',
      desc: 'Master Figma, user research, wireframing, and creating beautiful digital experiences.',
      duration: '3 Months',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Internship Programs',
      desc: 'Gain practical experience with guaranteed internships at top tech firms.',
      duration: '3-6 Months',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Premium <span className="gradient-text">Programs</span></h2>
          <p className="section-subtitle">Choose from our industry-aligned programs designed to accelerate your career growth and land your dream job.</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <motion.div 
              key={index} 
              className="course-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="course-image" style={{ background: 'none', padding: 0 }}>
                <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="level-badge" style={{ background: 'rgba(0, 0, 0, 0.6)' }}>{course.level}</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.desc}</p>
                <div className="course-footer">
                  <div className="course-duration"><FaClock /> {course.duration}</div>
                  <button className="enroll-btn" onClick={handleWIP}>Enroll <FaArrowRight /></button>
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
