import React from 'react';
import './References.css';
import Testimonial from '../Home/Testimonial'; 
import Slider from '../Home/Slider'; 

const References = () => {
  const projects = [
    { title: "Industriebau Berlin", desc: "Komplette Rohbauarbeiten für Logistikzentren." },
    { title: "Wohnkomplex Charlottenburg", desc: "Hochwertige Maurer- und Betonarbeiten." },
    { title: "Bürogebäude Neubau", desc: "Präzise Ausführung und termingerechte Fertigstellung." },
    { title: "Sanierung Altbau", desc: "Fachgerechte Betonsanierung und Instandsetzung." }
  ];

  return (
    <div className="references-page">
      {/* ব্যানার ভিডিও সেকশন */}
      <section className="banner-section" style={{ marginBottom: '0px' }}>
        <video className="banner-video" autoPlay loop muted playsInline>
          <source src="/References/ReferencesBannerVideo.mp4" type="video/mp4" />
        </video>
        <div className="banner-overlay">
          <div className="text-box">Allgemeine Ausführen</div>
        </div>
      </section>

      <Testimonial />

      {/* টেক্সট সেকশন: container এর বদলে custom-box-width */}
      <section className="info-section custom-box-width text-center" style={{ paddingBottom: '30px' }}>
        <h2>Hier präsentieren wir Ihnen eine Auswahl unserer Hochbau-Projekte</h2>
        <div className="divider"></div>
        <p>Gewinnen Sie einen Einblick in unsere fachgerechte Bauausführung und präzise Umsetzung anspruchsvoller Bauvorhaben.</p>
      </section>
   
      {/* প্রজেক্ট গ্রিড সেকশন: container এর বদলে custom-box-width */}
      <section className="projects-grid custom-box-width" style={{ paddingBottom: '35px' }}>
        <div className="row">
          {projects.map((proj, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="project-card">
                <div className="card-icon">🏗️</div>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Slider />
    </div>
  );
};

export default References;