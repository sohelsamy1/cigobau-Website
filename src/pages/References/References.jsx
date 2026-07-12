import React from 'react';
import './References.css';

const References = () => {
  return (
    <div className="references-page">
      {/* ব্যানার ভিডিও সেকশন */}
      <section className="banner-section">
        <video className="banner-video" autoPlay loop muted playsInline>
          <source src="/your-video-file.mp4" type="video/mp4" />
        </video>
        <div className="banner-overlay">
          <div className="banner-text">Referenzen</div>
        </div>
      </section>

      {/* টেক্সট সেকশন */}
      <section className="info-section">
        <h2>Hier präsentieren wir Ihnen eine Auswahl unserer Hochbau-Projekte, die unser umfassendes Leistungsspektrum verdeutlichen.</h2>
        <div className="divider"></div>
        <p>Gewinnen Sie einen Einblick in unsere fachgerechte Bauausführung und präzise Umsetzung anspruchsvoller Bauvorhaben.</p>
      </section>
    </div>
  );
};

export default References;