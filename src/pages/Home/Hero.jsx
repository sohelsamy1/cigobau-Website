// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; 

const Hero = ({ title, linkUrl, linkText }) => {
  return (
    <section className="hero-container">
      {/* ভিডিও ব্যাকগ্রাউন্ড */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      >
        {/* public ফোল্ডার থেকে ভিডিওটি সরাসরি লোড হচ্ছে */}
        <source src="/Home/HomeBannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* টেক্সট এবং বাটন ওভারলে */}
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