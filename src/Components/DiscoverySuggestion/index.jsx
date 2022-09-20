import React from 'react'
import SwiperComponent from '../Slider/SwiperComponent'
import img1 from '../../Assets/pexels-photo-247532 (1).jpeg'
import img2 from '../../Assets/pexels-photo-2869499.jpeg'
import img3 from '../../Assets/pexels-photo-5764100.jpeg'
import img4 from '../../Assets/pexels-photo-7031413.jpeg'

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

const DiscoverySuggestion = () => {

    
    
  return (
    <div className='container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 bg-orange-50'>
        <div className="py-16">
            <div className="">
                <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-gray-900">
                    <div className="text-center w-full max-w-2xl mx-auto">
                        <h2 className='text-3xl md:text-4xl font-semibold text-gray-900'>Suggestions for discovery</h2>
                        <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-gray-500">Popular places to stay that Chisfis recommends for you</span>
                    </div>
                </div>

                <div className="">
                    <SwiperComponent array={discovery} classes="w-309 h-331 md-w-232 md-h-278 sm-w-234 sm-h-219" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DiscoverySuggestion