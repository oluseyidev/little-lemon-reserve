import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <NavLink to="/" className="logo-link" aria-label="Little Lemon Home" onClick={closeNav}>
            <svg width="240" height="70" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
              <g className="logo-icon">
                <path d="M25 48C34.9411 48 45 37 45 30C45 23 34.9411 12 25 12C15.0589 12 5 23 5 30C5 37 15.0589 48 25 48Z" fill="#F4CE14"/>
                <path d="M25 15C32 5 42 8 42 8C42 8 38 18 29 18C27 18 25 17 25 15Z" fill="#495E57"/>
                <path d="M25 15C25 15 22 24 16 27" stroke="#333333" strokeWidth={1.5} strokeLinecap="round"/>
                <circle cx="5" cy="30" r="1.5" fill="#495E57"/>
              </g>
              <text x="60" y="36" fontFamily="'Markazi Text', serif" fontSize="28" fontWeight="700" fill="#495E57" letterSpacing="1.5">LITTLE LEMON</text>
              <text x="60" y="52" fontFamily="'Karla', sans-serif" fontSize="10" fontWeight="700" fill="#F4CE14" letterSpacing="3.5">MEDITERRANEAN BISTRO</text>
            </svg>
          </NavLink>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleNav} 
            aria-label="Toggle navigation menu"
            aria-expanded={isNavOpen}
          >
            &#9776;
          </button>
        </div>
      </header>
      <nav className={`main-nav ${isNavOpen ? 'open' : ''}`} aria-label="Main Navigation">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active-nav' : ''}`} end onClick={closeNav}>
              Home
            </NavLink>
          </li>
          <li>
            <a href="/#menu" className="nav-item" onClick={closeNav}>
              Menu
            </a>
          </li>
          <li>
            <NavLink to="/booking" className={({ isActive }) => `nav-item ${isActive ? 'active-nav' : ''}`} onClick={closeNav}>
              Reservations
            </NavLink>
          </li>
          <li>
            <a href="/#about" className="nav-item" onClick={closeNav}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
