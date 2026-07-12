import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* ব্যানার ইমেজ */}
      <section className="contact-banner">
        <img src="/contact-banner.jpg" alt="Contact Us" />
      </section>

      <div className="contact-container">
        {/* ম্যাপ ও অফিস টাইম সেকশন */}
        <section className="contact-info">
          <div className="title-bar">Ihr Kontakt zu uns</div>
          <div className="map-placeholder">
            {/* এখানে গুগল ম্যাপ এমবেড কোড বসান */}
            <iframe 
              src="https://www.google.com/maps/embed?..." 
              width="100%" height="250" style={{border:0}} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
          <div className="office-hours">
            <h3>Unsere Bürozeiten</h3>
            <ul>
              <li>Montag: 8 Uhr–16 Uhr</li>
              <li>Dienstag: 8 Uhr–16 Uhr</li>
              <li>Mittwoch: 8 Uhr–16 Uhr</li>
              <li>Donnerstag: 8 Uhr–16 Uhr</li>
              <li>Freitag: 8 Uhr–16 Uhr</li>
              <li>Samstag: 10 Uhr–14 Uhr</li>
              <li>Sonntag: Geschlossen</li>
            </ul>
          </div>
        </section>

        {/* কন্টাক্ট ফর্ম সেকশন */}
        <section className="contact-form-section">
          <div className="title-bar">Ihre Anfrage</div>
          <p>Nehmen Sie mit uns Kontakt auf, wir melden uns zeitnah bei Ihnen.</p>
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Name" />
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>Message</label>
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;