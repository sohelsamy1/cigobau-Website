<<<<<<< HEAD
// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF, FaUniversalAccess, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF, FaUniversalAccess, FaBars, FaTimes } from 'react-icons/fa';
>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

<<<<<<< HEAD
=======
  const globalPadding = { paddingLeft: '6%', paddingRight: '6%' };
  
  const brandBlue = '#468DFF'; 

>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Leistungen', path: '/services' },
    { name: 'Referenzen', path: '/references' },
    { name: 'Karriere', path: '/career' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <header className="sticky-top shadow-sm bg-white">
<<<<<<< HEAD
      {/* Top Bar */}
      <div className="bg-white py-4 d-none d-lg-block">
        <div className="custom-box-width d-flex align-items-center">
          <div className="d-flex align-items-center flex-shrink-0">
            <div className="logo-box-1"><img src="/logo1.jpg" alt="CIGO-BAU" className="img-fluid" /></div>
            <div className="logo-box-2"><img src="/logo2.jpg" alt="25 Years" className="img-fluid" /></div>
=======
      {/* --- Top White Bar (Height increased with py-4) --- */}
      <div className="bg-white py-4 d-none d-lg-block">
        <div className="container-fluid d-flex align-items-center" style={globalPadding}>
          
          <div className="d-flex align-items-center flex-shrink-0">
            <div style={{ width: '100px', marginLeft: '10px' }}>
              <img src="/logo1.jpg" alt="CIGO-BAU" className="img-fluid" />
            </div>
            <div style={{ width: '90px', marginLeft: '30px' }}>
              <img src="/logo2.jpg" alt="25 Years" className="img-fluid" />
            </div>
>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1
          </div>

          <div className="ms-auto d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
<<<<<<< HEAD
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
=======
              <FaMobileAlt style={{ color: brandBlue, fontSize: '1.5rem' }} />
              <div className="lh-1">
                <div className="small text-muted" style={{ fontSize: '0.85rem' }}>Handynummer</div>
                <div className="fw-normal text-dark">01733103347</div>
              </div>
            </div>
            
            <div className="d-flex align-items-center gap-2">
              <FaPhoneAlt style={{ color: brandBlue, fontSize: '1.4rem' }} />
              <div className="lh-1">
                <div className="small text-muted" style={{ fontSize: '0.85rem' }}>Telefon</div>
                <div className="fw-normal text-dark">030 726211047</div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaEnvelope style={{ color: brandBlue, fontSize: '1.4rem' }} />
              <div className="lh-1">
                <div className="small text-muted" style={{ fontSize: '0.85rem' }}>E-Mail</div>
                <div className="fw-normal text-dark">cigo-bau@web.de</div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="btn px-4 py-2 ms-2 text-white fw-bold rounded-1 text-lowercase" 
              style={{ backgroundColor: brandBlue, border: 'none' }}
            >
              kontakt
            </Link>
>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Navigation Bar */}
      <nav className="navbar navbar-dark bg-brand-blue p-0">
        <div className="custom-box-width d-flex align-items-center py-2 py-lg-0">
          <Link className="navbar-brand d-lg-none fw-bold" to="/">CIGO-BAU</Link>
          <button className="navbar-toggler border-0 d-lg-none p-0 ms-auto" onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars className="text-white fs-3" />
          </button>

          <div className="collapse navbar-collapse d-none d-lg-block">
=======
      {/* --- Navigation Bar --- */}
      <nav className="navbar navbar-dark p-0" style={{ backgroundColor: brandBlue }}>
        <div className="container-fluid d-flex align-items-center py-2 py-lg-0" style={globalPadding}>
          
          <Link className="navbar-brand d-lg-none fw-bold" to="/">CIGO-BAU</Link>

          <button 
            className="navbar-toggler border-0 d-lg-none p-0 ms-auto" 
            type="button" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars className="text-white fs-3" />
          </button>

          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1
            <div className="d-flex justify-content-between align-items-center w-100">
              <ul className="navbar-nav d-flex flex-row">
                {navLinks.map((link, index) => (
                  <li key={index} className="nav-item">
                    <Link className="nav-link px-3 text-white fs-6 fw-normal" to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
<<<<<<< HEAD
              <div className="d-flex align-items-center gap-3 text-white social-icons">
                <div className="position-relative py-3" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                  <FaUniversalAccess className="fs-5 cursor-pointer" />
                  {isDropdownOpen && (
                    <div className="dropdown-menu-custom">
                      <ul className="list-unstyled mb-0 small fw-bold text-start">
                        <li className="py-2 cursor-pointer border-bottom ps-4">Leichte Sprache</li>
                        <li className="py-2 cursor-pointer border-bottom ps-4">Gebärdensprache</li>
                        <li className="py-2 cursor-pointer ps-4">Barrierefreiheit</li>
                      </ul>
=======

              <div className="d-flex align-items-center gap-3 text-white">
                <div 
                  className="position-relative py-3"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  style={{ marginRight: '15px' }} 
                >
                  <FaUniversalAccess className="fs-5 cursor-pointer" />
                  {isDropdownOpen && (
                    <div className="position-absolute bg-white text-dark shadow rounded-2 p-3" 
                         style={{ top: '100%', right: '0', zIndex: 1050, width: '250px' }}>
                      <ul className="list-unstyled mb-0 small fw-bold text-start">
                      {/* text-start ব্যবহার করে লেখাকে বাম দিকের সমান দাগ বরাবর আনা হয়েছে */}
                      <li className="py-2 cursor-pointer border-bottom ps-4">Leichte Sprache</li>
                      <li className="py-2 cursor-pointer border-bottom ps-4">Gebärdensprache</li>
                      <li className="py-2 cursor-pointer ps-4">Barrierefreiheit</li>
                    </ul>
>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1
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

<<<<<<< HEAD
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
=======
      {/* --- Mobile Sidebar Overlay --- */}
      {isMobileMenuOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* --- Mobile Sidebar --- */}
      <div 
        className={`position-fixed top-0 start-0 h-100 bg-white shadow-lg`} 
        style={{ 
          width: '280px', 
          zIndex: 2001, 
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0 fw-bold" style={{ color: brandBlue }}>CIGO-BAU</h5>
            <FaTimes 
              className="fs-4 cursor-pointer text-muted" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
          </div>

          <ul className="list-unstyled">
            {navLinks.map((link, index) => (
              <li key={index} className="py-2 border-bottom">
                <Link 
                  className="text-decoration-none text-dark fs-5 d-block" 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;