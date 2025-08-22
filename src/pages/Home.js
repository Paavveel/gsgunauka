import React from "react";
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../img/sno/1.JPG";
import img2 from "../img/sno/2.JPG";
import img3 from "../img/sno/3.JPG";
import img4 from "../img/sno/4.JPG";
import img5 from "../img/sno/5.JPG";
import img6 from "../img/sno/6.JPG";
import img7 from "../img/sno/7.JPG";
import img8 from "../img/sno/8.JPG";
import img9 from "../img/sno/9.JPG";
import img10 from "../img/sno/10.JPG";
import img11 from "../img/sno/11.JPG";
import img12 from "../img/sno/12.JPG";
import img13 from "../img/sno/13.JPG";
import img14 from "../img/sno/14.JPG";
import img15 from "../img/sno/15.JPG";
import img16 from "../img/sno/16.JPG";
import img17 from "../img/sno/17.JPG";
import img18 from "../img/sno/18.JPG";
import img19 from "../img/sno/19.JPG";
import img20 from "../img/sno/20.JPG";
import img21 from "../img/sno/21.JPG";
import img22 from "../img/sno/22.JPG";
import img23 from "../img/sno/23.JPG";
import img24 from "../img/sno/24.JPG";
import img25 from "../img/sno/25.JPG";
import img26 from "../img/sno/26.JPG";
import img27 from "../img/sno/27.JPG";
import img28 from "../img/sno/28.JPG";
import img29 from "../img/sno/29.JPG";
import img30 from "../img/sno/30.JPG";


const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
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
