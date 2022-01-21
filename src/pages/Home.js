import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import mainnauka1 from '../img/main-nauka-1.jpg';
import mainnauka2 from '../img/main-nauka-2.jpg';
import mainnauka3 from '../img/main-nauka-3.jpg';
import mainnauka4 from '../img/main-nauka-4.jpg';
import mainnauka5 from '../img/main-nauka-5.jpg';
import mainnauka6 from '../img/main-nauka-6.jpg';
import mainnauka7 from '../img/main-nauka-7.jpg';
import mainnauka8 from '../img/main-nauka-8.jpg';

function Home() {
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
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
      >
        <SwiperSlide>
          <img src={mainnauka1} alt='mainnauka1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainnauka2} alt='mainnauka2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainnauka3} alt='mainnauka3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainnauka4} alt='mainnauka4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainnauka5} alt='mainnauka5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainnauka6} alt='mainnauka6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainnauka7} alt='mainnauka7' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainnauka8} alt='mainnauka8' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
