import React from 'react';
import './Services.css'; // সিএসএস ফাইলটি তৈরি করে নিতে হবে

const Services = () => {
  return (
    <section className="services-section">
      {/* ব্যাকগ্রাউন্ড ভিডিও */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        আপনার ব্রাউজার ভিডিওটি সাপোর্ট করছে না।
      </video>

      {/* টেক্সট বক্স */}
      <div className="content-overlay">
        <div className="text-box">
          <h2>Maurer Werk Ausführen</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;