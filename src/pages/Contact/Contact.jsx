import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    adresse: '',
    telefonnummer: '',
    email: '',
    datum: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const serviceID = 'service_z9yjyck';
    const templateID = 'template_luhcds8';
    const publicKey = 'XQdASK8MRcy_rYNDm';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatusMessage('Nachricht erfolgreich gesendet!');
          setLoading(false);
          
          // ইনপুট ফিল্ডগুলো সফলভাবে ফাঁকা করা হচ্ছে
          setFormData({
            vorname: '',
            nachname: '',
            adresse: '',
            telefonnummer: '',
            email: '',
            datum: '',
            message: ''
          });

          setTimeout(() => {
            setStatusMessage('');
          }, 5000);
      }, (error) => {
          console.error('FAILED (Full Error Object):', error);
          setStatusMessage('Fehler beim Senden, bitte versuchen Sie es erneut.');
          setLoading(false);

          setTimeout(() => {
            setStatusMessage('');
          }, 5000);
      });
  };

  return (
    <div className="contact-page">
      {/* ব্যানার সেকশন */}
      <section className="contact-banner">
        <img src="/Contact/ContactBanner.webp" alt="Contact Us" />
        <div className="banner-overlay">
          <div className="text-box">Kontaktieren Sie uns</div>
        </div>
      </section>

      {/* মেইন কন্টেন্ট */}
      <section className="contact-content-section py-5">
        <div className="custom-box-width">
          <div className="row g-5">
            {/* বাম পাশ: ফর্ম */}
            <div className="col-12 col-lg-7">
              <div className="contact-form-section">
                <h2 className="section-title">Ihre Anfrage</h2>
                <p className="mb-4">Nehmen Sie mit uns Kontakt auf, wir melden uns zeitnah bei Ihnen.</p>
                
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="vorname" 
                        placeholder="Vorname" 
                        className="form-control" 
                        value={formData.vorname}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="nachname" 
                        placeholder="Nachname" 
                        className="form-control" 
                        value={formData.nachname}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="adresse" 
                        placeholder="Adresse" 
                        className="form-control" 
                        value={formData.adresse}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="tel" 
                        name="telefonnummer" 
                        placeholder="Telefonnummer" 
                        className="form-control" 
                        value={formData.telefonnummer}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        className="form-control" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="date" 
                        name="datum" 
                        className="form-control" 
                        value={formData.datum}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea 
                      name="message" 
                      placeholder="Nachricht" 
                      rows="4" 
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" disabled={loading} className="btn-send w-100">
                    {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                  </button>

                  {statusMessage && <p className="mt-3 text-center fw-bold">{statusMessage}</p>}
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
      </section>

      {/* ম্যাপ সেকশন */}
      <section className="map-section py-5">
        <div className="custom-box-width">
          <h2 className="section-title text-center mb-4">Unser Standort</h2>
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