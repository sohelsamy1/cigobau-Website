import React, { useState } from 'react';
import './Services.css';

const ServicesHome = () => {
  const servicesData = {
    building: {
      header: "Profitieren Sie von einem starken Partner in der Baubranche.",
      subText: "Wir verfügen über langjährige und umfassende Erfahrung in der Planung und Verarbeitung verschiedenster Materialien im Cigo-Bau.",
      title: "HOCHBAU",
      image: "/expert1.png",
      items: [
        { title: "Unsere Qualitätsstandards", desc: "Termintreue, Kostensicherheit und Qualität haben höchste Priorität.", icon: "👷" },
        { title: "Unser Portfolio", desc: "Realisierung von öffentlichen Gebäuden, Industriebauten und Renovierungen!", icon: "🏗️" },
        { title: "Unsere Manpower", desc: "Wir verfügen derzeit über einen Kernstab von 80-100 Mitarbeitern.", icon: "👥" }
      ]
    },
    structural: {
      header: "Präzision und Zuverlässigkeit im Ingenieurbau.",
      subText: "Wir bewältigen komplexe bauliche Aufgaben mit moderner Technologie und zertifizierter Fachkompetenz.",
      title: "ROHBAU",
      image: "/Home/HomeImg3.webp",
      items: [
        { title: "Strukturplanung", desc: "Präzise Planung für komplexe Bauteile.", icon: "📐" },
        { title: "Sicherheit zuerst", desc: "Höchste Sicherheitsstandards für jede Projektphase.", icon: "🛡️" },
        { title: "Moderne Techniken", desc: "Einsatz neuester Ingenieurwerkzeuge für maximale Effizienz.", icon: "⚙️" }
      ]
    },
    masonry: {
      header: "Meisterhafte Maurerarbeiten für dauerhafte Ergebnisse.",
      subText: "Vom Mauerwerk im Wohnungsbau bis hin zu großflächigen Betonprojekten bauen wir für die Ewigkeit.",
      title: "MAURERARBEITEN",
      image: "/Home/HomeImg1.webp",
      items: [
        { title: "Experten-Maurerarbeiten", desc: "Professionelles Mauerwerk für Wohn- und Gewerbebauten.", icon: "🧱" },
        { title: "Betonstrukturen", desc: "Kompetenz im Stahlbetonbau für höchste Langlebigkeit.", icon: "🏢" },
        { title: "Materialqualität", desc: "Hochwertige Materialien für langanhaltende Ergebnisse.", icon: "💎" }
      ]
    }
  };

  const [activeTab, setActiveTab] = useState('building');
  const data = servicesData[activeTab];

  return (
    <section className="py-5" style={{ backgroundColor: '#f5f6f8' ,marginTop: '40px' }}>
      <div className="container custom-box-width">
        
        {/* ডাইনামিক হেডার আর্টিকেল */}
        <div className="row mb-5 text-center fade-in">
          <div className="col-12">
            <h2 className="fw-bold">{data.header}</h2>
            <p className="text-muted">{data.subText}</p>
          </div>
        </div>

        <div className="row g-5 align-items-center">
          {/* বাম পাশ: বাটন */}
          <div className="col-lg-3 button-col">
            <div className="button-wrapper">
              {Object.keys(servicesData).map((key) => (
                <button
                  key={key}
                  className={`tab-button ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  {servicesData[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* মাঝের অংশ: কন্টেন্ট */}
          <div className="col-lg-5 content-col">
            {data.items.map((item, index) => (
              <div key={index} className="fade-in d-flex align-items-start mb-4">
                <div className="me-3 fs-2">{item.icon}</div>
                <div>
                  <h4 className="fw-bold mb-1">{item.title}</h4>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ডান পাশ: ইমেজ */}
          <div className="col-lg-4 image-col">
            <img src={data.image} alt={data.title} className="fade-in img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;