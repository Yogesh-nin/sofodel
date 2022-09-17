import React from 'react'
import NearbyCard from './NearbyCard'
import img1 from '../../Assets/new-york.jpeg';
import img2 from '../../Assets/singapore.jpeg'
import img3 from '../../Assets/paris.jpeg'
import img4 from '../../Assets/london.jpeg'
import img5 from '../../Assets/tokyo.jpeg'
import img6 from '../../Assets/maldives.jpeg'

const nearbyPlaces = [
    {
        image: img1,
        title: "New York",
        tag: '1882',
    },
    {
        image: img2,
        title: "Singapore",
        tag: '1882',
    },
    {
        image: img3,
        title: "Paris",
        tag: '1882',
    },
    {
        image: img4,
        title: "London",
        tag: '1882',
    },
    {
        image: img5,
        title: "Tokyo",
        tag: '1882',
    },
    {
        image: img6,
        title: "Maldives",
        tag: '1882',
    },
    {
        image: img1,
        title: "New York",
        tag: '1882',
    },
    {
        image: img2,
        title: "Singapore",
        tag: '1882',
    },
]
const Nearby = () => {
  return (
    <div className='container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28'>
        <div className="relative">
            <div className="relative">
                <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-gray-900">
                    <div className="text-center w-full max-w-2xl mx-auto text-gray-900">
                        <h2 className="text-center w-full max-w-2xl mx-auto text-3xl sm:text-4xl font-semibold">
                            Explore nearby
                        </h2>
                        <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-gray-500">
                            Discover great place near where you live
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
                    {nearbyPlaces.map((item)=>{
                        return <NearbyCard {...item} />
                    })

                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nearby