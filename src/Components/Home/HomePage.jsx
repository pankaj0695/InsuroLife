import React from 'react';
import Navbar from './Navbar';
import HeroPage from './HeroPage';
import ServicesPage from './ServicesPage';
import TestimonialsPage from './TestimonialsPage';
import Footer from './Footer';
import './HomePage';

const HomePage = () => {
  return (
    <div className='home-page'>
      <Navbar />
      <HeroPage />
      <ServicesPage />
      <TestimonialsPage />
      <Footer />
    </div>
  );
};

export default HomePage;
