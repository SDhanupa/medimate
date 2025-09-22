// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="copyright">&copy; 2024 Medimate. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
            <div className="social-media-icons">
              <a href="https://web.facebook.com/?_rdc=1&_rdr"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
