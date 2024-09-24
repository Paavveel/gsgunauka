import React from "react";
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../img/Achievements/1.jpg";
import img2 from "../img/Achievements/2.jpg";
import img3 from "../img/Achievements/3.jpg";
import img4 from "../img/Achievements/4.jpg";
import img5 from "../img/Achievements/5.jpg";
import img6 from "../img/Achievements/6.jpg";
import img7 from "../img/Achievements/7.jpg";
import img8 from "../img/Achievements/8.jpg";
import img9 from "../img/Achievements/9.jpg";
import img10 from "../img/Achievements/10.jpg";
import img11 from "../img/Achievements/11.jpg";
import img12 from "../img/Achievements/12.jpg";
import img13 from "../img/Achievements/13.jpg";
import img14 from "../img/Achievements/14.jpg";
import img15 from "../img/Achievements/15.jpg";
import img16 from "../img/Achievements/16.jpg";
import img17 from "../img/Achievements/17.jpg";
import img18 from "../img/Achievements/18.jpg";
import img19 from "../img/Achievements/19.jpg";
import img20 from "../img/Achievements/20.jpg";
import img21 from "../img/Achievements/21.jpg";
import img22 from "../img/Achievements/22.jpg";
import img23 from "../img/Achievements/23.jpg";
import img24 from "../img/Achievements/24.jpg";
import img25 from "../img/Achievements/25.jpg";
import img26 from "../img/Achievements/26.jpg";
import img27 from "../img/Achievements/27.jpg";
import img28 from "../img/Achievements/28.jpg";
import img29 from "../img/Achievements/29.jpg";
import img30 from "../img/Achievements/30.jpg";
import img31 from "../img/Achievements/31.jpg";
import img32 from "../img/Achievements/32.jpg";
import img33 from "../img/Achievements/33.jpg";
import img34 from "../img/Achievements/34.jpg";
import img35 from "../img/Achievements/35.jpg";
import img36 from "../img/Achievements/36.jpg";
import img37 from "../img/Achievements/37.jpg";
import img38 from "../img/Achievements/38.jpg";
import img39 from "../img/Achievements/39.jpg";
import img40 from "../img/Achievements/40.jpg";
import img41 from "../img/Achievements/41.jpg";
import img42 from "../img/Achievements/42.jpg";
import img43 from "../img/Achievements/43.jpg";
import img44 from "../img/Achievements/44.jpg";
import img45 from "../img/Achievements/45.jpg";
import img46 from "../img/Achievements/46.jpg";
import img47 from "../img/Achievements/47.jpg";
import img48 from "../img/Achievements/48.jpg";
import img49 from "../img/Achievements/49.jpg";
import img50 from "../img/Achievements/50.jpg";
import img51 from "../img/Achievements/51.jpg";
import img52 from "../img/Achievements/52.jpg";
import img53 from "../img/Achievements/53.jpg";
import img54 from "../img/Achievements/54.jpg";
import img55 from "../img/Achievements/55.jpg";
import img56 from "../img/Achievements/56.jpg";
import img57 from "../img/Achievements/57.jpg";
import img58 from "../img/Achievements/58.jpg";
import img59 from "../img/Achievements/59.jpg";
import img60 from "../img/Achievements/60.jpg";
import img61 from "../img/Achievements/61.jpg";
import img62 from "../img/Achievements/62.jpg";
import img63 from "../img/Achievements/63.jpg";
import img64 from "../img/Achievements/64.jpg";
import img65 from "../img/Achievements/65.jpg";
import img66 from "../img/Achievements/66.jpg";
import img67 from "../img/Achievements/67.jpg";
import img68 from "../img/Achievements/68.jpg";
import img69 from "../img/Achievements/69.jpg";
import img70 from "../img/Achievements/70.jpg";
import img71 from "../img/Achievements/71.jpg";

function Achievements() {
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
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="img1" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img2" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img3" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img4" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img5" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="img6" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="img7" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="img8" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="img9" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="img10" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="img11" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} alt="img12" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img13} alt="img13" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img14} alt="img14" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img15} alt="img15" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img16} alt="img16" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img17} alt="img17" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img18} alt="img18" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img19} alt="img19" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img20} alt="img20" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img21} alt="img21" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img22} alt="img22" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img23} alt="img23" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img24} alt="img24" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img25} alt="img25" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img26} alt="img26" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img27} alt="img27" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img28} alt="img28" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img29} alt="img29" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img30} alt="img30" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img31} alt="img31" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img32} alt="img32" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img33} alt="img33" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img34} alt="img34" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img35} alt="img35" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img36} alt="img36" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img37} alt="img37" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img38} alt="img38" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img39} alt="img39" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img40} alt="img40" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img41} alt="img41" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img42} alt="img42" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img43} alt="img43" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img44} alt="img44" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img45} alt="img45" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img46} alt="img46" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img47} alt="img47" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img48} alt="img48" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img49} alt="img49" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img50} alt="img50" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img51} alt="img51" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img52} alt="img52" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img53} alt="img53" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img54} alt="img54" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img55} alt="img55" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img56} alt="img56" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img57} alt="img57" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img58} alt="img58" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img59} alt="img59" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img60} alt="img60" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img61} alt="img61" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img62} alt="img62" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img63} alt="img63" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img64} alt="img64" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img65} alt="img65" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img66} alt="img66" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img67} alt="img67" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img68} alt="img68" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img69} alt="img69" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img70} alt="img70" className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img71} alt="img71" className="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Achievements;
