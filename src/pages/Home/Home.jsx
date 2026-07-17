// src/pages/Home/Home.jsx
import React from 'react';
import Hero from "./Hero";
import Expertise from './Expertise';
import ServicesHome from './ServicesHome';
//import Testimonial from './Testimonial'; // Testimonial ইমপোর্ট করা হলো
import Slider from './Slider';
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
      <ServicesHome />

      {/* ৪. টেস্টমোনিয়াল সেকশন <Testimonial />*/}
       <Slider />
      
    </div>
  );
};

export default Home;