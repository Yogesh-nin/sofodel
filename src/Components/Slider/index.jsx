import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import Slider from "react-slick";
import Card from './Card';
import newYork from "../../Assets/new-york.jpeg";
import tokyo from '../../Assets/tokyo.jpeg'
import paris from '../../Assets/paris.jpeg'
import london from '../../Assets/london.jpeg'
import singapore from '../../Assets/singapore.jpeg'
import maldives from '../../Assets/maldives.jpeg'
import {AiOutlineLeftCircle} from 'react-icons/ai'
import {AiOutlineRightCircle} from 'react-icons/ai'
const citylist = [
    {
        id: '0',
        image: newYork,
        title: "New York",
        properties: "188,288 properties"
    },
    {
        id: '1',
        image: singapore,
        title: "Singapore",
        properties: "188,288 properties"
    },
    {
        id: '2',
        image: paris,
        title: "Paris",
        properties: "188,288 properties"
    },
    {
        id: '3',
        image: london,
        title: "London",
        properties: "188,288 properties"
    },
    {
        id: '4',
        image: tokyo,
        title: "Tokyo",
        properties: "188,288 properties"
    },
    {
        id: '5',
        image: maldives,
        title: "Maldives",
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
        slidesToShow: 5,
        slidesToScroll: 1
      };

  return (
    <div className='container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28'>
        <div className="relative flex flex-col mb-12 lg:mb-16">
            <h2 className='text-3xl md:text-4xl font-semibold'>Heading of Section</h2>
            <span className='mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400'>Description of section</span>
        </div>
        <Slider {...settings}>
            {
                citylist.map((city, index)=>{
                    return <Card {...city} />
                })
            }
        </Slider>

    </div>
  )
}

export default SliderComponent