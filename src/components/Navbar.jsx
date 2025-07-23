import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img
            src="https://raw.githubusercontent.com/NovaTech-Innovate-Solutions/NovaTech-Innovate-Solutions.github.io/refs/heads/main/logofianla-removebg-preview.png"
            alt="Logo"
          />
        </Link>

        <button className="navbar-toggle" onClick={toggleNavbar} aria-label="Toggle menu">
          {isOpen ? "X" : "≡"}
        </button>

        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="nav-item"><Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li className="nav-item"><Link to="/features" className="nav-link" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li className="nav-item"><Link to="/career" className="nav-link" onClick={() => setIsOpen(false)}>Careers</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link"><button className="btn btn-primary">Get in touch</button></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
