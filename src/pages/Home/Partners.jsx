import React from 'react';
import './Partners.css';
import { Briefcase, Instagram, Envelope } from 'react-bootstrap-icons';

const ProfessionalSections = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        
        {/* বক্স ১ */}
        <div className="col-12 col-md-4">
          <div className="card-box">
            <div className="icon-wrapper"><Briefcase size={30} /></div>
            <h5 className="fw-bold mt-3">Core Competencies</h5>
            <p className="text-muted mt-2">We are your construction company for Berlin & nationwide! Professional quality for your projects.</p>
            <a href="/services" className="btn btn-outline-primary btn-sm mt-3">View Services</a>
          </div>
        </div>

        {/* বক্স ২ */}
        <div className="col-12 col-md-4">
          <div className="card-box">
            <div className="icon-wrapper"><Instagram size={30} /></div>
            <h5 className="fw-bold mt-3">Follow Us</h5>
            <p className="text-muted mt-2">Get insights into our daily work and current construction site updates on Instagram.</p>
            <a href="#" className="btn btn-outline-primary btn-sm mt-3">Visit Instagram</a>
          </div>
        </div>

        {/* বক্স ৩ */}
        <div className="col-12 col-md-4">
          <div className="card-box">
            <div className="icon-wrapper"><Envelope size={30} /></div>
            <h5 className="fw-bold mt-3">Need Consultation?</h5>
            <p className="text-muted mt-2">Have we sparked your interest? Our experts are ready to assist you today.</p>
            <a href="/contact" className="btn btn-primary btn-sm mt-3">Contact Us</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfessionalSections;