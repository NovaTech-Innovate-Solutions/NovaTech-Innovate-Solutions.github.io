import React from 'react';
import './footer.css'; // Your custom styling

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img
                src="https://raw.githubusercontent.com/NovaTech-Innovate-Solutions/NovaTech-Innovate-Solutions.github.io/refs/heads/main/logofianla-removebg-preview.png"
                alt="NovaTech logo"
              />
            </a>
            <p className="footer-text">Connect with NovaTech</p>
            <ul className="social-list">
              <li><a href="https://github.com/NovaTech-Innovate-Solutions" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.linkedin.com/in/novatechinnovativesolutions/" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="https://www.youtube.com/channel/UC2wbdTuQ_HpWNtcZaP14qiQ" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faYoutube} /></a></li>
            </ul>
          </div>

          <div className="footer-links">
            <ul className="footer-link-list">
              <li><h3 className="link-title">Company</h3></li>
              <li><a href="/features" className="footer-link">About Us</a></li>
              <li><a href="/about" className="footer-link">Our Projects</a></li>
              <li><a href="/features" className="footer-link">Team</a></li>
            </ul>

            <ul className="footer-link-list">
              <li><h3 className="link-title">Solutions</h3></li>
              <li><a href="#" className="footer-link">IoT Systems</a></li>
              <li><a href="#" className="footer-link">AI & ML</a></li>
              <li><a href="#" className="footer-link">Web & App Dev</a></li>
            </ul>

            <ul className="footer-link-list">
              <li><h3 className="link-title">Resources</h3></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Policies</a></li>
            </ul>

            <ul className="footer-link-list">
              <li><h3 className="link-title">Explore</h3></li>
              <li><a href="/career" className="footer-link">Careers</a></li>
              <li><a href="/career" className="footer-link">Internships</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2024 NovaTech Innovative Solutions. All rights reserved.
        </p>
      </div>

      <a href="#top" className="go-top">
        ↑
      </a>
    </footer>
  );
};

export default Footer;
