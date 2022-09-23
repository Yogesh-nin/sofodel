import React from 'react'
import newDelhi from '../../Assets/StayTrails/Locaton/india-gate.jpeg'
import tajmahal from '../../Assets/StayTrails/Locaton/tajmahal.jpg'
import mumbai from '../../Assets/StayTrails/Locaton/mumbai.jpg'
import banglore from '../../Assets/StayTrails/Locaton/banglore.jpg'
import kolkata from '../../Assets/StayTrails/Locaton/kolkata.jpg'
import chennai from '../../Assets/StayTrails/Locaton/Chennai_Central.jpg'
import SwiperComponent from '../Slider/SwiperComponent';

const citylist = [
  {
    id: "0",
    image: newDelhi,
    title: "New Delhi",
    properties: "188,288 properties",
  },
  {
    id: "1",
    image: tajmahal,
    title: "Agra",
    properties: "188,288 properties",
  },
  {
    id: "2",
    image: mumbai,
    title: "Mumbai",
    properties: "188,288 properties",
  },
  {
    id: "3",
    image: banglore,
    title: "Banglore",
    properties: "188,288 properties",
  },
  {
    id: "4",
    image: kolkata,
    title: "Kolkata",
    properties: "188,288 properties",
  },
  {
    id: "5",
    image: chennai,
    title: "Chennai",
    properties: "188,288 properties",
  },
];


const Cities = () => {
  return (
    <div className='container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28'>
        <div className="relative flex flex-col mb-12 lg:mb-16">
            <h2 className='text-3xl md:text-4xl font-semibold'>Heading of Section</h2>
            <span className='mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400'>Description of section</span>
        </div>
        <div className="relative">
          <SwiperComponent array={citylist} classes="w-224 h-314 md-w-232 md-h-325 sm-w-274 sm-h-219" noOfSlides={5} />
        </div>

    </div>
  )
}

export default Cities