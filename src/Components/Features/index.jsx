import React from 'react'
import img from '../../Assets/features.png'
const Features = () => {
  return (
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
    <div className='relative flex flex-col lg:flex-row items-center lg:py-14'>
        <div className="flex-grow">
          <div>
            <img src={img} alt="" className='object-cover w-full h-full' />
          </div>
        </div>
        <div className="max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:pl-16">
          <span className='uppercase text-sm text-gray-400 tracking-widest'>Bennefits</span>
          <h2 className='font-semibold text-4xl mt-4'>Happening cities</h2>

          <ul className='space-y-10 mt-16'>
            <li className="space-y-4">
              <span className='inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative'>Advertising</span>
              <span className='block text-xl font-semibold'>Cost effective advertising</span>
              <span className='block mt-4 text-gray-500'>With a free listing, you can advertise your rental with no upfront costs</span>
            </li>
            <li className="space-y-4">
              <span className='inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-green-800 bg-green-100  relative'>Exposure</span>
              <span className='block text-xl font-semibold'>Reach millions with chisfis</span>
              <span className='block mt-4 text-gray-500'>Millions of people are searching for unique places to stay around the world</span>
            </li>
            <li className="space-y-4">
              <span className='inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100  relative'>Secure</span>
              <span className='block text-xl font-semibold'>Secure and simple</span>
              <span className='block mt-4 text-gray-500'>A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</span>
            </li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Features