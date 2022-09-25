import React from 'react'
import img1 from '../../Assets/customer/download (3).png'
import img2 from '../../Assets/customer/download (4).png'
import img3 from '../../Assets/customer/download (5).png'
import img4 from '../../Assets/customer/download (6).png'
import img5 from '../../Assets/customer/download (7).png'
import img6 from '../../Assets/customer/download (8).png'
import img7 from '../../Assets/customer/download (9).png'
import img8 from '../../Assets/customer/download (10).png'
import main from '../../Assets/customer/main.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";

import Slider from "react-slick";
import { Fade } from 'react-awesome-reveal'

const Reviews = () => {

    var settings = {
        dots: true,
        arrow: true,
        nextArrow: <AiOutlineRightCircle />,
        prevArrow: <AiOutlineLeftCircle />,
    
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
  return (
    <div className='container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28'>
        <div className="relative py-16">
            <div className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100"></div>
            <div className="relative">
                <Fade cascade damping={0.1} triggerOnce='true'>
                <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-gray-900">
                    <div className="text-center w-full max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                            Good news from far away
                        </h2>
                        <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-gray-500">
                            Let's see what people think of stayTrials
                        </span>
                    </div>
                </div>
                <div className="relative md:mb-16 max-w-2xl mx-auto">
                    <div className="hidden md:block">
                        <img src={img1} alt="" className="absolute top-9 -left-20" />
                        <img src={img2} alt="" className="absolute bottom-[100px] right-full mr-40" />
                        <img src={img3} alt="" className="absolute top-full left-[140px]" />
                        <img src={img4} alt="" className="absolute -bottom-10 right-[140px]" />
                        <img src={img5} alt="" className="absolute left-full ml-32 bottom-[80px]" />
                        <img src={img6} alt="" className="absolute -right-10 top-10" />
                    </div>
                    <img src={main} alt="" className="mx-auto" />
                    <div className="mt-12 lg:mt-16 relative ">
                        <img src={img7} alt="" className='opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1' />
                        <img src={img8} alt="" className='opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1' />

                        <Slider {...settings}>
                            <div className="flex flex-col items-center text-center">
                                <span className="block text-2xl">This place is exactly like the picture posted on stayTrials. Great service, we had a great stay!</span>
                                <span className="block mt-8 text-2xl font-semibold">Lennie Swiffen</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="block text-2xl">This place is exactly like the picture posted on stayTrials. Great service, we had a great stay!</span>
                                <span className="block mt-8 text-2xl font-semibold">Tiana Abie</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="block text-2xl">This place is exactly like the picture posted on stayTrials. Great service, we had a great stay!</span>
                                <span className="block mt-8 text-2xl font-semibold">Berta emili</span>
                            </div>
                        </Slider>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Reviews