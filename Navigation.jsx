import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="website-name">Penang Vibes</h1>
      </div>
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a href="#tourist-spot" onClick={() => scrollToSection('tourist-spot')}>Tourist Spot</a></li>
        <li><a href="#food" onClick={() => scrollToSection('food')}>Food</a></li>
        <li><a href="#hotels" onClick={() => scrollToSection('hotel')}>Hotel</a></li>
        <li><a href="#adventures" onClick={() => scrollToSection('adventure')}>Adventure</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navigation;


