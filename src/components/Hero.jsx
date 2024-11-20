import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Hero = () => {
  return (
    <div className=" flex flex-col md:flex-row  justify-between items-center md:gap-14 gap-8">
      <div className="md:w-1/2  w-full text-center">
        <h1 className="md:text-5xl text-3xl font-bold md:leading-tight">
          Hotels with Rooftop Pools Near Me{" "}
        </h1>
        <p className="text-gray-600 my-4">
          <p className="text-gray-600 mt-4">
            Discover stunning hotels with rooftop pools near you, perfect for
            relaxation and breathtaking views. Enjoy a blend of comfort, style,
            and unforgettable cityscapes, all in one place!
          </p>
        </p>
      </div>
      <div className="md:w-1/2  w-full mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay:1500,
            disableOnInteraction:false,

          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={img1}
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img4}
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
