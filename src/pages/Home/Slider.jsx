import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';

const Slider = () => {
  const projects = [
    { title: 'BÜROGEBÄUDE', src: '/References/RefImg1.webp' },
    { title: 'WOHNANLAGEN', src: '/References/RefImg2.webp' },
    { title: 'ROHBAU & BAUARBEITEN', src: '/References/RefImg3.webp' },
    { title: 'INDUSTRIE & GEWERBE', src: '/References/RefImg4.webp' },
    { title: 'PRAXEN & KANZLEIEN', src: '/References/RefImg5.webp' },
    { title: 'EINKAUFSZENTREN', src: '/References/RefImg6.webp' },
    { title: 'SCHULBAU', src: '/References/RefImg7.webp' },
    { title: 'LOGISTIKZENTREN', src: '/References/RefImg8.webp' },
    { title: 'HOTELANLAGEN', src: '/References/RefImg9.webp' },
    { title: 'SPORTZENTREN', src: '/References/RefImg10.webp' },
    { title: 'KLINIKEN', src: '/References/RefImg11.webp'},
    { title: 'PARKHÄUSER', src: '/References/RefImg12.webp' },
    { title: 'KULTURZENTREN', src: '/References/RefImg13.webp' }
  ];

  return (
    <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h5 className="fw-bold mb-4 text-center" style={{ color: '#2a7af1', marginBottom: '40px' }}>
          AUSZUG UNSERER PROJEKTE
        </h5>

        <Swiper 
          modules={[Autoplay, Pagination]} 
          spaceBetween={25} 
          slidesPerView={5} 
          loop={true} 
          autoplay={{ delay: 2500, disableOnInteraction: false }} 
          pagination={{ clickable: true }}
          style={{ paddingBottom: '50px' }} 
          breakpoints={{ 
            320: { slidesPerView: 1 }, 
            576: { slidesPerView: 2 }, 
            768: { slidesPerView: 3 }, 
            1024: { slidesPerView: 5 } 
          }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '12px', height: '240px' }}>
                <img 
                  src={p.src} 
                  alt={p.title} 
                  style={{ width: '100%', height: '170px', objectFit: 'cover' }} 
                />
                <div className="p-3 text-center d-flex align-items-center justify-content-center" style={{ height: '70px', backgroundColor: '#ffffff' }}>
                  <h6 style={{ fontSize: '11px', color: '#0f2c59', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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