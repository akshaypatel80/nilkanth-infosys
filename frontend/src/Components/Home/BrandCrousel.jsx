import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Autoplay, Navigation } from "swiper";
import { brandData } from "./carouselData";
import { Image } from "@chakra-ui/react";
const BrandCrousel = () => {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={2}
        grabCursor={true}
        autoplay={{
          delay: 1000,
        }}
        modules={[Navigation, Autoplay]}
        // navigation={true}
        className="mySwiper"
        loop={true}
      >
        {brandData.map((ele) => (
          <SwiperSlide key={ele.id}>
            <Image width={"50%"} src={ele.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCrousel;
