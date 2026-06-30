import React from 'react';

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-content">
        <h2 id="about-title" className="about-title">Little Lemon</h2>
        <h3 className="about-subtitle">Chicago</h3>
        <p className="about-text">
          Based in Chicago, Little Lemon is a family-owned Mediterranean restaurant, focusing on traditional recipes served with a modern twist. 
        </p>
        <p className="about-text">
          Our founders, Adrian and Mario, draw inspiration from their Italian and Greek heritage. They spent years sourcing authentic spices, fresh olive oils, and family recipes to bring the warm, sun-kissed flavors of the Mediterranean coast right here to the Midwest.
        </p>
      </div>
      <div className="about-images" aria-label="Little Lemon founders and dining atmosphere">
        <div className="about-img-box img1">
          <img 
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&h=500&q=80" 
            alt="Chef Adrian preparing a fresh Mediterranean salad" 
          />
        </div>
        <div className="about-img-box img2">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&h=500&q=80" 
            alt="Little Lemon restaurant dining area atmosphere" 
          />
        </div>
      </div>
    </section>
  );
}

export default About;
