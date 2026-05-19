import React from 'react';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import CareerGrowth from '../components/CareerGrowth';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Trust />
      <Courses />
      <WhyChooseUs />
      <CareerGrowth />
      <Benefits />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
