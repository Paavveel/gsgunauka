import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import vestnik from '../img/vestnik.jpg';
import nachalo from '../img/nachalo.jpg';

function Publication() {
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
          <img src={vestnik} alt='vestnik' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nachalo} alt='nachalo' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Publication;
