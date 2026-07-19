import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* ব্যানার সেকশন */}
      <section className="contact-banner">
        <img src="/Contact/ContactBanner.webp" alt="Contact Us" />
        <div className="banner-overlay">
          <div className="text-box">Kontaktieren Sie uns</div>
        </div>
      </section>

      {/* মেইন কন্টেন্ট - custom-box-width প্রয়োগ করা হয়েছে */}
      <div className="custom-box-width contact-content">
        <div className="row g-5">
          {/* বাম পাশ: ফর্ম */}
          <div className="col-12 col-lg-7">
            <div className="contact-form-section">
              <h2 className="section-title">Ihre Anfrage</h2>
              <p className="mb-4">Nehmen Sie mit uns Kontakt auf, wir melden uns zeitnah bei Ihnen.</p>
              
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6 mb-3"><input type="text" placeholder="Vorname" className="form-control" required /></div>
                  <div className="col-md-6 mb-3"><input type="text" placeholder="Nachname" className="form-control" required /></div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3"><input type="text" placeholder="Adresse" className="form-control" /></div>
                  <div className="col-md-6 mb-3"><input type="tel" placeholder="Telefonnummer" className="form-control" /></div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3"><input type="email" placeholder="Email" className="form-control" required /></div>
                  <div className="col-md-6 mb-3"><input type="date" className="form-control" /></div>
                </div>
                <div className="mb-3"><textarea placeholder="Nachricht" rows="4" className="form-control"></textarea></div>
                <button type="submit" className="btn-send w-100">Nachricht senden</button>
              </form>
            </div>
          </div>

          {/* ডান পাশ: অফিস সময় */}
          <div className="col-12 col-lg-5">
            <div className="office-hours-box">
              <h3>Unsere Bürozeiten</h3>
              <ul className="list-unstyled">
                <li><span>Montag:</span> 8 Uhr – 16 Uhr</li>
                <li><span>Dienstag:</span> 8 Uhr – 16 Uhr</li>
                <li><span>Mittwoch:</span> 8 Uhr – 16 Uhr</li>
                <li><span>Donnerstag:</span> 8 Uhr – 16 Uhr</li>
                <li><span>Freitag:</span> 8 Uhr – 16 Uhr</li>
                <li><span>Samstag:</span> 10 Uhr – 14 Uhr</li>
                <li className="closed"><span>Sonntag:</span> Geschlossen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ম্যাপ সেকশন */}
      <section className="map-section">
        <div className="custom-box-width">
          <h2 className="section-title text-center">Unser Standort</h2>
          <div className="map-placeholder">
            <iframe 
              title="Cigo-Bau Standort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.6808795554316!2d13.623437376722026!3d52.536767936166826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e3650d510f9%3A0xc346ec989c450c2!2sLandsberger%20Str.%20218%2C%2012623%20Berlin%2C%20Germany!5e0!3m2!1sen!2sbd!4v1721226462744!5m2!1sen!2sbd" 
              width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
          <div className="mt-3 text-muted">
            <p><strong>Adresse:</strong> Landsberger Str. 218, 12623 Berlin</p>
            <p><strong>Amtsgericht:</strong> Berlin-Charlottenburg</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;