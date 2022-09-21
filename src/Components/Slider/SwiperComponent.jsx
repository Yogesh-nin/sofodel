import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./index.css";

import Card from "./Card";
import { useCallback } from "react";

const SwiperComponent = (props) => {
  const [swiperRef, setSwiperRef] = useState();
  const list = props.array;

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <>
      <div className="relative">
        <button
          className="slider-btn slider-left-btn text-white bg-dark-gold absolute z-20 top-[40%] left-0 lg:left-[-50px] rounded-full b-0 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold"
          onClick={handleLeftClick}
        >
          <AiOutlineLeft size={18} />
        </button>
        <Swiper
          onSwiper={setSwiperRef}
          // modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.3}
          // navigation
          loop={true}
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            996: {
              width: 996,
              slidesPerView: 4,
            },
          }}
        >
          {list.map((city, index) => {
            return (
              <SwiperSlide>
                <Card {...city} classes={props.classes} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="slider-btn slider-right-btn text-white bg-dark-gold z-20 absolute top-[40%] right-0 lg:right-[-50px] p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold"
          onClick={handleRightClick}
        >
          <AiOutlineRight size={18} />
        </button>
      </div>
    </>
  );
};

export default SwiperComponent;
