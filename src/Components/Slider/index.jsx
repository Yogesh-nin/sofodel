import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Slider from "react-slick";
import Card from "./Card";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";

const SliderComponent = (props) => {
  const list = props.array;
  var settings = {
    dots: false,
    arrow: true,
    nextArrow: <AiOutlineRightCircle />,
    prevArrow: <AiOutlineLeftCircle />,

    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },

    ]
  };

  return (
    <Slider {...settings}>
      {list.map((city, index) => {
        return <Card {...city} classes={props.classes} />
      })}
    </Slider>
  );
};

export default SliderComponent;
