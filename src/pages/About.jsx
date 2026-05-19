import React from 'react';
import AboutHero from '../components/AboutSections/AboutHero';
import { Mission, Vision } from '../components/AboutSections/MissionVision';
import { Team, Achievements } from '../components/AboutSections/TeamAchievements';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <Mission />
      <Vision />
      <Team />
      <Achievements />
      {/* Reusing WhyChooseUs for "Why Students Trust Us" section */}
      <WhyChooseUs />
      
      {/* Reusing CTA Section, we could pass props for specific titles but using default for now or we can create a specific one. I'll just use the CTASection since it's already professional. */}
      <CTASection />
    </div>
  );
};

export default About;
