import React from "react";
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import main1 from "../img/main/1.jpg";
import main2 from "../img/main/2.jpg";
import main3 from "../img/main/3.jpg";
import main4 from "../img/main/4.jpg";
import main5 from "../img/main/5.jpg";
import main6 from "../img/main/6.jpg";
import main7 from "../img/main/7.jpg";
import main8 from "../img/main/8.jpg";
import main9 from "../img/main/9.jpg";
import main10 from "../img/main/10.jpg";
import main11 from "../img/main/11.jpg";
import main12 from "../img/main/12.jpg";
import main13 from "../img/main/13.jpg";
import main14 from "../img/main/14.jpg";
import main15 from "../img/main/15.jpg";
import main16 from "../img/main/16.jpg";
import main17 from "../img/main/17.jpg";
import main18 from "../img/main/18.jpg";
import main19 from "../img/main/19.jpg";
import main20 from "../img/main/20.jpg";
import main21 from "../img/main/21.jpg";
import main22 from "../img/main/22.jpg";
import main23 from "../img/main/23.jpg";
import main24 from "../img/main/24.jpg";
import main25 from "../img/main/25.jpg";
import main26 from "../img/main/26.jpg";
import main27 from "../img/main/27.jpg";
import main28 from "../img/main/28.jpg";
import main29 from "../img/main/29.jpg";
import main30 from "../img/main/30.jpg";
import main31 from "../img/main/31.jpg";

const images = [
  main1,
  main2,
  main3,
  main4,
  main5,
  main6,
  main7,
  main8,
  main9,
  main10,
  main11,
  main12,
  main13,
  main14,
  main15,
  main16,
  main17,
  main18,
  main19,
  main20,
  main21,
  main22,
  main23,
  main24,
  main25,
  main26,
  main27,
  main28,
  main29,
  main30,
  main31,
];

function Home() {
  return (
    <div className="main-page">
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
          type: "fraction",
        }}
      >
        {images?.map((img, i) => (
          <SwiperSlide>
            <img src={img} alt={`main-img-${i + 1}`} className="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
