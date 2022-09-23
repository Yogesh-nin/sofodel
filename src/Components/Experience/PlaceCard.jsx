import React, {useState, useCallback} from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "slick-carousel/slick/slick-theme.css";
import "../StayPlaces/index.css";
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
    <div className="relative bg-white border border-neutral-100 rounded-2xl overflow-hidden will-change-transform hover:shadow-xl transition-shadow ">
      <div className="relative w-full rounded-2xl overflow-hidden">
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
            dot={'#fff'}
          >
            <SwiperSlide>
              <div className={`block ${props.aspect}`}>
                <img src={props.images[0]} alt="" className="object-cover w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`block ${props.aspect}`} >
                <img src={props.images[1]} alt="" className=" object-cover w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`block ${props.aspect}`} >
                <img src={props.images[2]} alt="" className=" object-cover w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`block ${props.aspect}`} >
                <img src={props.images[3]} alt="" className=" object-cover w-full h-full" />
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

        </div>

        <a href="/">
          <div className="py-4 px-2 space-y-4">
            <div className="space-y-2">
            <div className="flex items-center text-sm space-x-2">
                <span>
                  <HiOutlineLocationMarker />
                </span>{" "}
                <span>{props.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <h2 className="font-medium capitalize text-lg">
                  <span className="line-clamp-1">{props.title}</span>
                </h2>
              </div>
              </div>
              
              <div className="border-b border-neutral-100 "></div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  ${props.rate}
                  <span className="text-sm text-neutral-500 font-normal">
                    /person
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
        </a>
    </div>
  );
};

export default PlaceCard;
