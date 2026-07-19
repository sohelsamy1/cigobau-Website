import React from 'react';
import './Partners.css'; // আপনার CSS ফাইলের পাথ ঠিক রাখুন
import { Briefcase, Instagram, Envelope } from 'react-bootstrap-icons';

const ProfessionalSections = () => {
  return (
    <div className="py-5" style={{ backgroundColor: '#fcfcfc' }}>
      <div className="custom-box-width">
        <div className="row g-4">
          
          {/* বক্স ১ */}
          <div className="col-12 col-md-4">
            <div className="card-box">
              <div className="icon-wrapper"><Briefcase size={30} /></div>
              <h5 className="fw-bold mt-3">Unsere Kompetenzen</h5>
              <p className="text-muted mt-2">Ihr Bauunternehmen für Berlin & bundesweit! Professionelle Qualität für Ihre Projekte.</p>
              <a href="/services" className="btn btn-outline-primary btn-sm mt-3">Leistungen ansehen</a>
            </div>
          </div>

          {/* বক্স ২ */}
          <div className="col-12 col-md-4">
            <div className="card-box">
              <div className="icon-wrapper"><Instagram size={30} /></div>
              <h5 className="fw-bold mt-3">Folgen Sie uns</h5>
              <p className="text-muted mt-2">Erhalten Sie Einblicke in unsere tägliche Arbeit und aktuelle Updates zu unseren Baustellen auf Instagram.</p>
              <a href="#" className="btn btn-outline-primary btn-sm mt-3">Zu Instagram</a>
            </div>
          </div>

          {/* বক্স ৩ */}
          <div className="col-12 col-md-4">
            <div className="card-box">
              <div className="icon-wrapper"><Envelope size={30} /></div>
              <h5 className="fw-bold mt-3">Beratung benötigt?</h5>
              <p className="text-muted mt-2">Haben wir Ihr Interesse geweckt? Unsere Experten stehen Ihnen bei allen Fragen jederzeit gerne zur Verfügung.</p>
              <a href="/contact" className="btn btn-primary btn-sm mt-3">Kontakt aufnehmen</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSections;