import React from 'react';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

function Homepage() {
  return (
    <main className="main-content">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Homepage;
