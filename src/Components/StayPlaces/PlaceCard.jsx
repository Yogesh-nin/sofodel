import React from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from 'react-icons/hi'
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Slider from "react-slick";
import {AiFillStar} from 'react-icons/ai'
const PlaceCard = (props) => {
  var settings = {
    dots: true,
    // nextArrow: <AiOutlineRightCircle />,
    // prevArrow: <AiOutlineLeftCircle />,

    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden will-change-transform hover:shadow-xl transition-shadow ">
      <div className="relative w-full">
        <Slider {...settings}>
          <div style={{ width: "294px" }}>
            <img src={props.images[0]} alt="" />
          </div>
          <div style={{ width: "294px" }}>
            <img src={props.images[1]} alt="" />
          </div>
          <div style={{ width: "294px" }}>
            <img src={props.images[2]} alt="" />
          </div>
          <div style={{ width: "294px" }}>
            <img src={props.images[3]} alt="" />
          </div>
        </Slider>

        <a href="">
            <div className="px-4 py-3 space-y-4">
                <div className="space-y-2">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        Entire Cabin . {props.beds}
                    </span>
                    <div className="flex items-center space-x-2">
                        <span className="inline-flex px-2 text-xs font-medium rounded-full text-green-800 bg-green-100">ADS</span>
                        <h2 className="font-medium capitalize text-lg"><span className="line-clamp-1">{props.title}</span></h2>
                    </div>
                    <div className="flex items-center text-sm space-x-2">
                        <span><HiOutlineLocationMarker/></span> <span>{props.location}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="font-semibold">
                            ${props.rate}
                            <span className="text-sm text-neutral-500 font-normal">/night</span>
                        </span>
                        <div className="flex items-center space-x-1 text-sm">
                            <span className=""><AiFillStar className=" star"/></span>
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
