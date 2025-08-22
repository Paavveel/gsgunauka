
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../img/Achievements/1.JPG";
import img2 from "../img/Achievements/2.JPG";
import img3 from "../img/Achievements/3.JPG";
import img4 from "../img/Achievements/4.JPG";
import img5 from "../img/Achievements/5.JPG";
import img6 from "../img/Achievements/6.JPG";
import img7 from "../img/Achievements/7.JPG";
import img8 from "../img/Achievements/8.JPG";
import img9 from "../img/Achievements/9.JPG";
import img10 from "../img/Achievements/10.JPG";
import img11 from "../img/Achievements/11.JPG";
import img12 from "../img/Achievements/12.JPG";
import img13 from "../img/Achievements/13.JPG";
import img14 from "../img/Achievements/14.JPG";
import img15 from "../img/Achievements/15.JPG";
import img16 from "../img/Achievements/16.JPG";
import img17 from "../img/Achievements/17.JPG";
import img18 from "../img/Achievements/18.JPG";
import img19 from "../img/Achievements/19.JPG";
import img20 from "../img/Achievements/20.JPG";
import img21 from "../img/Achievements/21.JPG";
import img22 from "../img/Achievements/22.JPG";
import img23 from "../img/Achievements/23.JPG";
import img24 from "../img/Achievements/24.JPG";
import img25 from "../img/Achievements/25.JPG";
import img26 from "../img/Achievements/26.JPG";
import img27 from "../img/Achievements/27.JPG";
import img28 from "../img/Achievements/28.JPG";
import img29 from "../img/Achievements/29.JPG";
import img30 from "../img/Achievements/30.JPG";
import img31 from "../img/Achievements/31.JPG";
import img32 from "../img/Achievements/32.JPG";
import img33 from "../img/Achievements/33.JPG";
import img34 from "../img/Achievements/34.JPG";
import img35 from "../img/Achievements/35.JPG";
import img36 from "../img/Achievements/36.JPG";
import img37 from "../img/Achievements/37.JPG";
import img38 from "../img/Achievements/38.JPG";
import img39 from "../img/Achievements/39.JPG";
import img40 from "../img/Achievements/40.JPG";
import img41 from "../img/Achievements/41.JPG";
import img42 from "../img/Achievements/42.JPG";
import img43 from "../img/Achievements/43.JPG";
import img44 from "../img/Achievements/44.JPG";
import img45 from "../img/Achievements/45.JPG";
import img46 from "../img/Achievements/46.JPG";
import img47 from "../img/Achievements/47.JPG";
import img48 from "../img/Achievements/48.JPG";
import img49 from "../img/Achievements/49.JPG";
import img50 from "../img/Achievements/50.JPG";
import img51 from "../img/Achievements/51.JPG";
import img52 from "../img/Achievements/52.JPG";
import img53 from "../img/Achievements/53.JPG";
import img54 from "../img/Achievements/54.JPG";
import img55 from "../img/Achievements/55.JPG";
import img56 from "../img/Achievements/56.JPG";
import img57 from "../img/Achievements/57.JPG";
import img58 from "../img/Achievements/58.JPG";
import img59 from "../img/Achievements/59.JPG";



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
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img57,
  img58,
  img59,
];



export default function Scientists() {
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
  )
}
