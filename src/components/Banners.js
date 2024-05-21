import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banners = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/banners")
      .then((response) => {
        setSliders(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the banners!", error);
      });
  }, []);

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        dots={false}
      >
        {sliders.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full aspect-4/3"
              />
              <button className="absolute left-1/2 transform -translate-x-1/2 bottom-5 md:bottom-20 px-10 py-2 bg-yuddyOrange hover:bg-darkYuddyOrange text-white text-lg rounded-md">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev custom-swiper-button-prev">
        <FaChevronLeft />
      </div>
      <div className="swiper-button-next custom-swiper-button-next">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Banners;
