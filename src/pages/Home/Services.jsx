// src/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f5f6f8' }}>
      <div className="custom-box-width">
        
        {/* ১. ওপরের সেন্টার্ড হেডার অংশ */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2rem', color: '#000' }}>
              Profitieren Sie von einem starken Partner <br /> in der Baubranche
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Wir verfügen über langjährige und umfassende Erfahrung <br />
              bei der Planung und Verarbeitung verschiedenster <br />
              Materialien im Cigo Bau
            </p>
          </div>
        </div>

        {/* ২. নিচের ৩টি কলামের মেইন লেআউট */}
        <div className="row align-items-center g-4">
          
          {/* বাম পাশ: HOCHBAU ব্লক */}
          <div className="col-lg-3 col-md-4 text-center">
            <div 
              className="text-white d-flex align-items-center justify-content-center fw-bold" 
              style={{ 
                backgroundColor: '#3b82f6', 
                height: '60px', 
                fontSize: '1.1rem',
                letterSpacing: '0.5px'
              }}
            >
              HOCHBAU
            </div>
          </div>

          {/* মাঝের অংশ: আইকনসহ ৩টি ফিচার লিস্ট */}
          <div className="col-lg-5 col-md-8">
            
            {/* ফিচার ১ */}
            <div className="d-flex align-items-start mb-4">
              <div className="me-3 mt-1">
                {/* Engineer Hat Icon */}
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h4 className="fw-bold mb-1" style={{ fontSize: '1.4rem', color: '#111' }}>Unser Qualitätsanspruch</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.4' }}>
                  Termintreue, Kostensicherheit und Qualität stehen bei CIGO-BAU GmbH an erster Stelle
                </p>
              </div>
            </div>

            {/* ফিচার ২ */}
            <div className="d-flex align-items-start mb-4">
              <div className="me-3 mt-1">
                {/* Crane/Structure Icon */}
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 22V4h6v5h10V4h-6M2 22h20" />
                </svg>
              </div>
              <div>
                <h4 className="fw-bold mb-1" style={{ fontSize: '1.4rem', color: '#111' }}>Unser Portfolio</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.4' }}>
                  Realisierung von öffentlichen Bauten, Industriebauten, Wohnungsbau und Sanierungen!
                </p>
              </div>
            </div>

            {/* ফিচার ৩ */}
            <div className="d-flex align-items-start">
              <div className="me-3 mt-1">
                {/* Manpower/Users Icon */}
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h4 className="fw-bold mb-1" style={{ fontSize: '1.4rem', color: '#111' }}>Unsere Manpower</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.4' }}>
                  Wir verfügen derzeit über eine Stammbesetzung von 80-100 Mitarbeitern.
                </p>
              </div>
            </div>

          </div>

          {/* ডান পাশ: লম্বালম্বি কনস্ট্রাকশন ইমেজ */}
          <div className="col-lg-4 col-md-12 text-end">
            <img 
              src="/expert1.png" 
              alt="Cigo Bau Bauleitung" 
              className="img-fluid" 
              style={{ 
                maxHeight: '480px', 
                width: '100%', 
                objectFit: 'cover'
              }} 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;