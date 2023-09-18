import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import img1 from '../img/Naukaschools/Викторович.jpg';
import img2 from '../img/Naukaschools/Лексин 2.jpg';
import img3 from '../img/Naukaschools/Мазуров 2.jpg';
import img4 from '../img/Naukaschools/Педагогика и психология.jpg';
import img5 from '../img/Naukaschools/Физическая культура и спорт.jpg';
import img6 from '../img/Naukaschools/Рязанцев.jpg';
import img7 from '../img/Naukaschools/Экономика Столярова.jpg';

function Naukaschools() {
  return (
    <div className='main-page'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        loop={true}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
      >
        <SwiperSlide>
          <img src={img1} alt='img1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt='img2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt='img3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt='img4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt='img5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt='img6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt='img7' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Naukaschools;
