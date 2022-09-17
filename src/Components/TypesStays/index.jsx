import React from 'react'
import SliderComponent from '../Slider'
import img1 from '../../Assets/types/pexels-photo-2351649.jpeg'
import img2 from '../../Assets/types/pexels-photo-248837.jpeg'
import img3 from '../../Assets/types/pexels-photo-2581922.jpeg'
import img4 from '../../Assets/types/pexels-photo-3613236.jpeg'
import img5 from '../../Assets/types/pexels-photo-962464.jpeg'

const types = [
    {
        image: img1,
        title: "Nature House",
        properties: "17,2888 properties"
    },
    {
        image: img2,
        title: "Wooden House",
        properties: "2,118 properties"
    },
    {
        image: img3,
        title: "House Boat",
        properties: "36,612 properties"
    },
    {
        image: img4,
        title: "Farm House",
        properties: "188,2888 properties"
    },
    {
        image: img5,
        title: "Dome House",
        properties: "17,2888 properties"
    },
    {
        image: img5,
        title: "Dome House",
        properties: "17,2888 properties"
    },
]
const StaysTypes = () => {
  return (
    <div className='container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28'>
        <div className="relative flex flex-col mb-12 lg:mb-16">
            <h2 className='text-3xl md:text-4xl font-semibold'>Explore by types of stays</h2>
            <span className='mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400'>Explore houses based on 10 types of stays</span>
        </div>
        <div className="">
          <SliderComponent array={types} classes="w-224 h-168 sm-w-274 sm-h-205" />
        </div>

    </div>
  )
}

export default StaysTypes