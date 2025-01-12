import React from "react";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-details">
          <h4>Contact Us</h4>
          <p>Email: tourism@penangvibes.com</p>
          <p>Phone: +6010 6534 345</p>
        </div>

       
        <div className="social-links">
          <h4>Follow Us</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </div>

      
        <div className="newsletter">
          <h4>Stay Updated</h4>
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Penang Vibes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

