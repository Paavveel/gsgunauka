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
