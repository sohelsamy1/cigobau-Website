// src/components/Expertise.jsx
import React from 'react';
import './Expertise.css';

const Expertise = () => {
  return (
    <>
      {/* মূল সেকশন Home page section 1 */}
      <section className="expertise-section-1">
        <div className="custom-box-width">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <h2 className="fw-bold mb-4">Profitieren Sie von einem starken Partner in der Baubranche</h2>
              <p className="text-muted mb-5">
                Wir verfügen über langjährige und umfassende Erfahrung bei der Planung und Verarbeitung verschiedenster Materialien im Cigo Bau.
              </p>
              {/* ফিচারগুলো এখানে আগে মতোই থাকবে */}
              <div className="d-flex mb-4">
                <div className="me-3 fs-3 expertise-icon-color">🏗️</div>
                <div>
                  <h5 className="fw-bold">Unser Qualitätsanspruch</h5>
                  <p className="small text-muted">Termintreue, Kostensicherheit und Qualität stehen bei CIGO-BAU GmbH an erster Stelle.</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="me-3 fs-3 expertise-icon-color">🚜</div>
                <div>
                  <h5 className="fw-bold">Unser Portfolio</h5>
                  <p className="small text-muted">Realisierung von öffentlichen Bauten, Industriebauten, Wohnungsbau und Sanierungen!</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-3 fs-3 expertise-icon-color">👥</div>
                <div>
                  <h5 className="fw-bold">Unsere Manpower</h5>
                  <p className="small text-muted">Wir verfügen derzeit über eine Stammbesetzung von 80-100 Mitarbeitern.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="overflow-hidden rounded shadow-lg">
                <img src="/Home/HomeImg1.webp" alt="Baustelle" className="img-fluid w-100 expertise-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* নতুন ইমেজ ব্যাকগ্রাউন্ড সেকশন */}
      <section className="position-relative d-flex align-items-center expertise-section-2">
        <div className="position-absolute top-0 start-0 w-100 h-100 expertise-overlay"></div>
        <div className="custom-box-width position-relative text-white">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Maßstab für unseren Erfolg ist die Zufriedenheit unserer Kunden</h2>
              <p className="lead mb-4">
                Erstklassige Qualitätsarbeit am Bau kann nur durch sorgfältige Planung, Engagement und fachmännische Ausführung erreicht werden.
              </p>
              <a href="/Referenzen" className="btn btn-outline-light px-4 py-2">Referenzen</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;