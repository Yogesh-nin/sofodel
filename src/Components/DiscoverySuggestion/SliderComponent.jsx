import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import img1 from '../../Assets/pexels-photo-247532 (1).jpeg'
import img2 from '../../Assets/pexels-photo-2869499.jpeg'
import img3 from '../../Assets/pexels-photo-5764100.jpeg'
import img4 from '../../Assets/pexels-photo-7031413.jpeg'
import Card from './Card';


const discovery = [
    {
      image: img1,
      title: "Sleep in a floating way",
      properties: "188,288 properties"
    },
    {
      image: img2,
      title: "In the billionaire's house",
      properties: "188,288 properties"
    },
    {
      image: img3,
      title: "Cool in the deep forest",
      properties: "188,288 properties"
    },
    {
      image: img4,
      title: "Enjoy the great cold",
      properties: "188,288 properties"
    },
    {
      image: img2,
      title: "Enjoy the great cold",
      properties: "188,288 properties"
    },
  ]

const SliderComponent = () => {
    var settings = {
        dots: false,
        arrow: true,
        nextArrow: <AiOutlineRightCircle />,
        prevArrow: <AiOutlineLeftCircle />,
    
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
        {
            discovery.map((item)=>{
                return <Card {...item} />
            })
        }
    </Slider>
  )
}

export default SliderComponent