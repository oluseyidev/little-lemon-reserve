import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="promo-banner" aria-labelledby="banner-heading">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 id="banner-heading" className="banner-title">30% Off This Weekend</h1>
        <p className="banner-text">
          Join us at Little Lemon this weekend for an unforgettable Mediterranean culinary journey. Enjoy a 30% discount on all our signature appetizers, traditional main courses, and hand-crafted desserts. Experience the authentic flavors of Greece and Italy.
        </p>
        <Link to="/booking" className="cta-button" aria-label="Reserve a table at Little Lemon">
          Reserve a Table
        </Link>
      </div>
    </section>
  );
}

export default Hero;
