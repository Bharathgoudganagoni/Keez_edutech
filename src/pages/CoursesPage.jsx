import React from 'react';
import Courses from '../components/Courses';
import CTASection from '../components/CTASection';

const CoursesPage = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div style={{ background: 'var(--color-primary)', color: 'var(--color-white)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span style={{ color: 'var(--color-accent)' }}>Programs</span></h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>Explore our comprehensive range of tech programs designed to make you industry-ready.</p>
        </div>
      </div>
      
      {/* We reuse the Courses component which already has the grid of courses */}
      <Courses />
      
      <CTASection />
    </div>
  );
};

export default CoursesPage;
