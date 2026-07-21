// src/components/Slider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';

const Slider = () => {
  const projects = [
    { title: 'BÜROGEBÄUDE', src: '/Slider/RefImg1.webp' },
    { title: 'WOHNANLAGEN', src: '/Slider/RefImg2.webp' },
    { title: 'ROHBAU & BAUARBEITEN', src: '/Slider/RefImg3.webp' },
    { title: 'INDUSTRIE & GEWERBE', src: '/Slider/RefImg4.webp' },
    { title: 'PRAXEN & KANZLEIEN', src: '/Slider/RefImg5.webp' },
    { title: 'EINKAUFSZENTREN', src: '/Slider/RefImg6.webp' },
    { title: 'SCHULBAU', src: '/Slider/RefImg7.webp' },
    { title: 'LOGISTIKZENTREN', src: '/Slider/RefImg8.webp' },
    { title: 'HOTELANLAGEN', src: '/Slider/RefImg9.webp' },
    { title: 'SPORTZENTREN', src: '/Slider/RefImg10.webp' },
    { title: 'KLINIKEN', src: '/Slider/RefImg11.webp'},
    { title: 'PARKHÄUSER', src: '/Slider/RefImg12.webp' },
    { title: 'KULTURZENTREN', src: '/Slider/RefImg13.webp' }
  ];

  return (
    <div className="slider-section-wrapper">
      <div className="custom-box-width">
        <h5 className="slider-section-title">
          AUSZUG UNSERER PROJEKTE
        </h5>

        <Swiper 
          modules={[Autoplay, Pagination]} 
          spaceBetween={25} 
          slidesPerView={5} 
          loop={true} 
          autoplay={{ delay: 2500, disableOnInteraction: false }} 
          pagination={{ clickable: true }}
          className="slider-swiper-container"
          breakpoints={{ 
            320: { slidesPerView: 1 }, 
            576: { slidesPerView: 2 }, 
            768: { slidesPerView: 3 }, 
            1024: { slidesPerView: 5 } 
          }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="card border-0 shadow-sm overflow-hidden slider-card-item">
                <img 
                  src={p.src} 
                  alt={p.title} 
                  className="slider-card-img" 
                />
                <div className="p-3 text-center d-flex align-items-center justify-content-center slider-card-footer">
                  <h6 className="slider-card-title">
                    {p.title}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;