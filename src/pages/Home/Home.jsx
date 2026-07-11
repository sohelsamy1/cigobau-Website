// src/pages/Home/Home.jsx
import React from 'react';
import Hero from "./Hero";
import Expertise from './Expertise';
import Services from './Services';
import Partners from './Partners'; // ইমপোর্ট করা হলো

const Home = () => {
  return (
    <div>
      {/* ১. হিরো সেকশন */}
      <Hero 
        videoSrc="/videos/your-video.mp4" 
        title="ROHBAUAUSFÜHRUNGEN BERLIN & BUNDESWEIT"
        linkUrl="/leistungen" 
        linkText="Jetzt ansehen"
      />
      
      {/* ২. এক্সপার্টিজ সেকশন */}
      <Expertise />
      
      {/* ৩. সার্ভিস সেকশন */}
      <Services />

      {/* ৪. পার্টনারস সেকশন */}
      <Partners />
      
    </div>
  );
};

export default Home;