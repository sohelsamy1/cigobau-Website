import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <div className="career-page">
      {/* ব্যানার সেকশন (ইমেজ) */}
      <section className="banner-section">
        <img src="/path-to-your-banner-image.jpg" alt="Career Banner" className="banner-image" />
        <div className="banner-overlay">
          <div className="banner-text">Karriere</div>
        </div>
      </section>

      {/* টেক্সট সেকশন */}
      <section className="info-section">
        <h2>Wir sind immer auf der Suche nach neuen Mitarbeitern, die das Team von CIGO-BAU GmbH tatkräftig, motiviert und kompetent verstärken!</h2>
        <div className="divider"></div>
        <p>Ob Stahlbetonbauer, Bauleiter, Maurer, Rohbauer oder Polier!</p>
        <p>Bei weiteren Fragen stehen wir Ihnen jederzeit gerne zur Verfügung!</p>
      </section>

      {/* ৩টি ভিডিও সেকশন */}
      <section className="video-grid">
        <video controls className="career-video"><source src="/video1.mp4" type="video/mp4" /></video>
        <video controls className="career-video"><source src="/video2.mp4" type="video/mp4" /></video>
        <video controls className="career-video"><source src="/video3.mp4" type="video/mp4" /></video>
      </section>
    </div>
  );
};

export default Career;