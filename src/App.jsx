import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ResumeBuilder from './components/ResumeBuilder';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/Home';
import About from './pages/About';
import CoursesPage from './pages/CoursesPage';
import InternshipsPage from './pages/InternshipsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
        <ResumeBuilder />
      </>
    </AuthProvider>
  );
}

export default App;