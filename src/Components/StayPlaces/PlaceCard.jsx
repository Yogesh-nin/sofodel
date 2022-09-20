import React, {useState, useCallback} from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { AiFillStar } from "react-icons/ai";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const PlaceCard = (props) => {
  const [swiperRef, setSwiperRef] = useState();

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <div className="relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden will-change-transform hover:shadow-xl transition-shadow ">
      <div className="relative w-full">
        <div className="relative stay-places-slider">
          <button
            className="slider-btn slider-left-btn text-white bg-dark-gold absolute z-50 top-[40%] rounded-full b-0 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold"
            onClick={handleLeftClick}
          >
            <AiOutlineLeft size={18} />
          </button>
          <Swiper
            onSwiper={setSwiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay
          >
            <SwiperSlide>
              <div style={{ width: "294px" }}>
                <img src={props.images[0]} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ width: "294px" }}>
                <img src={props.images[1]} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ width: "294px" }}>
                <img src={props.images[2]} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ width: "294px" }}>
                <img src={props.images[3]} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <button
            className="slider-btn slider-right-btn text-white bg-dark-gold z-50 absolute top-[40%] right-0 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold"
            onClick={handleRightClick}
          >
            <AiOutlineRight size={18} />
          </button>
        </div>

        <a href="/">
          <div className="px-4 py-3 space-y-4">
            <div className="space-y-2">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                Entire Cabin . {props.beds}
              </span>
              <div className="flex items-center space-x-2">
                <span className="inline-flex px-2 text-xs font-medium rounded-full text-green-800 bg-green-100">
                  ADS
                </span>
                <h2 className="font-medium capitalize text-lg">
                  <span className="line-clamp-1">{props.title}</span>
                </h2>
              </div>
              <div className="flex items-center text-sm space-x-2">
                <span>
                  <HiOutlineLocationMarker />
                </span>{" "}
                <span>{props.location}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold">
                  ${props.rate}
                  <span className="text-sm text-neutral-500 font-normal">
                    /night
                  </span>
                </span>
                <div className="flex items-center space-x-1 text-sm">
                  <span className="">
                    <AiFillStar className=" star" />
                  </span>
                  <span className="font-medium">{props.star}</span>
                  <span className="text-neutral-500">({props.total})</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PlaceCard;
