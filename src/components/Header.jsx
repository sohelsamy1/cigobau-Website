import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF, FaUniversalAccess, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const globalPadding = { paddingLeft: '6%', paddingRight: '6%' };
  
  const brandBlue = '#468DFF'; 

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Leistungen', path: '/services' },
    { name: 'Referenzen', path: '/references' },
    { name: 'Karriere', path: '/career' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <header className="sticky-top shadow-sm bg-white">
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
          </div>

          <div className="ms-auto d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
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
          </div>
        </div>
      </div>

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
            <div className="d-flex justify-content-between align-items-center w-100">
              <ul className="navbar-nav d-flex flex-row">
                {navLinks.map((link, index) => (
                  <li key={index} className="nav-item">
                    <Link className="nav-link px-3 text-white fs-6 fw-normal" to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>

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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;