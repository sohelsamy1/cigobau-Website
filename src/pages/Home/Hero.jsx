// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // স্টাইলের জন্য আলাদা CSS ফাইল

const Hero = ({ videoSrc, title, linkUrl, linkText }) => {
  return (
    <section className="hero-container">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{title}</h1>
          {linkUrl && (
            <a href={linkUrl} className="hero-btn">
              {linkText || "Mehr erfahren"}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;