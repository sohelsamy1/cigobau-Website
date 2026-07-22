import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <div className="career-page">
      {/* ১. ব্যানার সেকশন */}
      <section className="career-banner">
        <div className="banner-content">
          <div className="text-box">Karriere bei CIGO-BAU</div>
        </div>
      </section>

   
{/* ২. আর্টিকেল সেকশন */}
<section className="info-section-clean">
  <div className="custom-box-width">
    <div className="content-wrapper">
      <h2>Wir suchen Verstärkung für unser Team!</h2>
      <p className="lead">
        Sind Sie motiviert, kompetent und bereit für neue Herausforderungen? 
        Werden Sie Teil der CIGO-BAU Familie.
      </p>
      <div className="divider"></div>
      <p className="job-list">
        <strong>Wir suchen:</strong> Stahlbetonbauer, Bauleiter, Maurer, Rohbauer oder Polier!
      </p>
      <a href="/kontakt" className="apply-btn">Jetzt Kontakt aufnehmen</a>
    </div>
  </div>
</section>

      {/* ৩. ভিডিও সেকশন */}
      <section className="video-grid custom-box-width">
        <h3 className="section-title">Einblicke in unsere Arbeit</h3>
        <div className="row">
          {[1, 2, 3].map((num) => (
            <div className="col-md-4" key={num}>
              <video controls className="career-video">
                <source src={`/Career/CareerVideo${num}.mp4`} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Career;