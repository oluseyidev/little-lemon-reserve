import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-column footer-col-left">
          <Link to="/" className="footer-logo-link" aria-label="Little Lemon Home">
            <svg width="180" height="50" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo-svg">
              <g className="logo-icon-small">
                <path d="M18 35C24.6274 35 31 27 31 22C31 17 24.6274 9 18 9C11.3726 9 5 17 5 22C5 27 11.3726 35 18 35Z" fill="#F4CE14"/>
                <path d="M18 11C23 4 30 6 30 6C30 6 27 13 21 13C20 13 18 12 18 11Z" fill="#EDEFEE"/>
                <path d="M18 11C18 11 16 17 12 19" stroke="#495E57" strokeWidth="1" strokeLinecap="round"/>
              </g>
              <text x="42" y="27" fontFamily="'Markazi Text', serif" fontSize="20" fontWeight="700" fill="#EDEFEE" letterSpacing="1">LITTLE LEMON</text>
              <text x="42" y="37" fontFamily="'Karla', sans-serif" fontSize="7" fontWeight="700" fill="#F4CE14" letterSpacing="2">MEDITERRANEAN BISTRO</text>
            </svg>
          </Link>
        </div>
        <div className="footer-column footer-col-right">
          <div className="footer-info">
            <p className="copyright-text">
              &copy; 2026 Little Lemon Restaurant. All rights reserved.
            </p>
            <p className="footer-subtext">
              123 Mediterranean Way, Chicago, IL 60611 &bull; Tel: (312) 555-0199 &bull; info@littlelemon.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
