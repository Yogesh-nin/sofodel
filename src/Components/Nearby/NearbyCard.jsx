import React from 'react'
const NearbyCard = (props) => {
  return (
    <a href="#" className='relative flex items-center author-card p-3 sm:p-6'>
        <span className="inline flex px-2.5 py-1 rounded-full font-medium text-xs absolute right-2 top-2 text-gray-800 bg-gray-100  absolute right-2 top-2">1,882</span>
        <div className="relative flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
            <div className="absolute inset-0">
                <img src={props.image} alt="" className="object-cover w-full h-full" />
            </div>
        </div>
        <div className="ml-4 flex-grow overflow-hidden">
            <h2 className="text-base font-medium">{props.title}</h2>
            <span className="block mt-2 text-sm text-gray-500 ">19 minutes drive</span>
        </div>
    </a>
  )
}

export default NearbyCard