import React from 'react';
import './Services.css'; 
import ServicesHome from '../Home/ServicesHome'; 

// ১. এখানে আপনার ProfessionalSections কম্পোনেন্টটি ইমপোর্ট করুন
import ProfessionalSections from '../Home/Partners'; // আপনার সঠিক ফোল্ডার পাথ দিন

const Services = () => {
  return (
    <>
      <section className="services-section">
        {/* ব্যাকগ্রাউন্ড ভিডিও */}
        <video className="background-video" autoPlay loop muted playsInline>
          <source src="/Services/ServiceBannerVideo.mp4" type="video/mp4" />
          আপনার ব্রাউজার ভিডিওটি সাপোর্ট করছে না।
        </video>

        {/* টেক্সট বক্স */}
        <div className="content-overlay">
          <div className="text-box">
            <h2>Maurer Werk Ausführen</h2>
          </div>
        </div>
      </section>

      {/* ২. ভিডিও সেকশনের নিচে আপনার কার্ডগুলো এখানে বসিয়ে দিন   DUPLICATE  */}
      <ServicesHome />
      <ProfessionalSections />
      
    </>
  );
};

export default Services;