import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Portfolio />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Home;