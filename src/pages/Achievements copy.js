import React from 'react';
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../img/Achievements/1.jpg';
import img10 from '../img/Achievements/10.jpg';
import img11 from '../img/Achievements/11.jpg';
import img12 from '../img/Achievements/12.jpg';
import img13 from '../img/Achievements/13.jpg';
import img14 from '../img/Achievements/14.jpg';
import img15 from '../img/Achievements/15.jpg';
import img16 from '../img/Achievements/16.jpg';
import img2 from '../img/Achievements/2.jpg';
import img3 from '../img/Achievements/3.jpg';
import img4 from '../img/Achievements/4.jpg';
import img5 from '../img/Achievements/5.jpg';
import img6 from '../img/Achievements/6.jpg';
import img7 from '../img/Achievements/7.jpg';
import img8 from '../img/Achievements/8.jpg';
import img9 from '../img/Achievements/9.jpg';

function Achievements() {
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
        <SwiperSlide>
          <img src={img8} alt='img8' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt='img9' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt='img10' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt='img11' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} alt='img12' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img13} alt='img13' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img14} alt='img14' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img15} alt='img15' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img16} alt='img16' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Achievements;
