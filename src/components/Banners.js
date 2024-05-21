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
      >
        {sliders.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full "
              />
              <div className="absolute flex flex-col text-left   top-1/2 transform -translate-y-1/2 right-5 md:right-10 xl:right-40 ">
                <p className="text-2xl text-black font-bold ">
                {banner.title}
              </p>
              <h1 className="  md:text-[40px] xl:text-[50px] xxl:text-[70px]  text-black font-bold  " dangerouslySetInnerHTML={{ __html: banner.header }} />
           
              <p className="text-sm text-black font-bold ">
                {banner.subtitle}
              </p>
              <button className=" w-full xxl:w-1/2 px-10 py-2 bg-yuddyOrange hover:bg-darkYuddyOrange mt-4 text-white text-lg rounded-md">
                Shop Now
              </button>
              </div>
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
