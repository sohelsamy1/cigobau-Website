// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF, FaUniversalAccess, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Leistungen', path: '/services' },
    { name: 'Referenzen', path: '/references' },
    { name: 'Karriere', path: '/career' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <header className="sticky-top shadow-sm bg-white">
      {/* Top Bar */}
      <div className="bg-white py-4 d-none d-lg-block">
        <div className="custom-box-width d-flex align-items-center">
          <div className="d-flex align-items-center flex-shrink-0">
            <div className="logo-box-1"><img src="/logo1.jpg" alt="CIGO-BAU" className="img-fluid" /></div>
            <div className="logo-box-2"><img src="/logo2.jpg" alt="25 Years" className="img-fluid" /></div>
          </div>

          <div className="ms-auto d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
              <FaMobileAlt className="text-brand-blue icon-size-lg" />
              <div className="lh-1">
                <div className="small text-muted font-small">Handynummer</div>
                <div className="fw-normal text-dark">01733103347</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaPhoneAlt className="text-brand-blue icon-size-md" />
              <div className="lh-1">
                <div className="small text-muted font-small">Telefon</div>
                <div className="fw-normal text-dark">030 726211047</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaEnvelope className="text-brand-blue icon-size-md" />
              <div className="lh-1">
                <div className="small text-muted font-small">E-Mail</div>
                <div className="fw-normal text-dark">cigo-bau@web.de</div>
              </div>
            </div>
            <Link to="/contact" className="btn-kontakt">kontakt</Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-dark bg-brand-blue p-0">
        <div className="custom-box-width d-flex align-items-center py-2 py-lg-0">
          <Link className="navbar-brand d-lg-none fw-bold" to="/">CIGO-BAU</Link>
          <button className="navbar-toggler border-0 d-lg-none p-0 ms-auto" onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars className="text-white fs-3" />
          </button>

          <div className="collapse navbar-collapse d-none d-lg-block">
            <div className="d-flex justify-content-between align-items-center w-100">
              <ul className="navbar-nav d-flex flex-row">
                {navLinks.map((link, index) => (
                  <li key={index} className="nav-item">
                   
                   <NavLink 
                      className="nav-link  text-white fw-bold position-relative" 
                      to={link.path}
                      end={link.path === '/'}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="d-flex align-items-center gap-4 text-white social-icons">
                <div className="position-relative py-3" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} style={{ marginRight: '25px' }} >
                  <FaUniversalAccess className="fs-5 cursor-pointer" />
                  {isDropdownOpen && (
                    <div className="dropdown-menu-custom">
                      <ul className="list-unstyled mb-0 small fw-bold text-start">
                        <li className="py-2 cursor-pointer border-bottom ps-4">
                          <Link to="/leichte-sprache" style={{ textDecoration: 'none', color: 'inherit' }}>Leichte Sprache</Link>
                        </li>
                        <li className="py-2 cursor-pointer border-bottom ps-4">
                          <Link to="/sign-language" style={{ textDecoration: 'none', color: 'inherit' }}>Gebärdensprache</Link>
                        </li>
                        <li className="py-2 cursor-pointer ps-4">
                          <Link to="/accessibility-statement" style={{ textDecoration: 'none', color: 'inherit' }}>Barrierefreiheit</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <FaInstagram className="fs-5 cursor-pointer" />
                <FaTwitter className="fs-5 cursor-pointer" />
                <FaFacebookF className="fs-5 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && <div className="sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)} />}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0 fw-bold text-brand-blue">CIGO-BAU</h5>
            <FaTimes className="fs-4 cursor-pointer text-muted" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <ul className="list-unstyled">
            {navLinks.map((link, index) => (
              <li key={index} className="py-2 border-bottom">
                <Link className="text-decoration-none text-dark fs-5 d-block" to={link.path} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;