import React from 'react'
import SliderComponent from './SliderComponent'


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
                    <SliderComponent />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DiscoverySuggestion