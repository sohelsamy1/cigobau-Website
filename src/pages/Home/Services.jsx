import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const servicesData = {
    building: {
      header: "Benefit from a strong partner in the construction industry.",
      subText: "We have many years of extensive experience in the planning and processing of various materials in Cigo construction.",
      title: "BUILDING CONSTRUCTION",
      image: "/expert1.png",
      items: [
        { title: "Our quality standards", desc: "Adherence to deadlines, cost certainty and quality are top priorities.", icon: "👷" },
        { title: "Our portfolio", desc: "Realization of public buildings, industrial buildings, and renovations!", icon: "🏗️" },
        { title: "Our manpower", desc: "We currently have a core staff of 80-100 employees.", icon: "👥" }
      ]
    },
    structural: {
      header: "Precision and Reliability in Structural Engineering.",
      subText: "We handle complex structural tasks with modern technology and certified expertise.",
      title: "STRUCTURAL WORK",
      image: "/Home/HomeImg3.webp",
      items: [
        { title: "Structural Planning", desc: "Precise planning for complex structural components.", icon: "📐" },
        { title: "Safety First", desc: "Highest safety standards for every project phase.", icon: "🛡️" },
        { title: "Modern Techniques", desc: "Utilizing latest engineering tools for efficiency.", icon: "⚙️" }
      ]
    },
    masonry: {
      header: "Masterful Masonry for Enduring Results.",
      subText: "From residential brickwork to large scale concrete projects, we build to last.",
      title: "MASONRY WORK",
      image: "/Home/HomeImg1.webp",
      items: [
        { title: "Expert Masonry", desc: "Professional brickwork for residential & commercial.", icon: "🧱" },
        { title: "Concrete Structures", desc: "Reinforced concrete expertise for durability.", icon: "🏢" },
        { title: "Material Quality", desc: "High-grade materials for long-lasting results.", icon: "💎" }
      ]
    }
  };

  const [activeTab, setActiveTab] = useState('building');
  const data = servicesData[activeTab];

  return (
    <section className="py-5" style={{ backgroundColor: '#f5f6f8' }}>
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

export default Services;