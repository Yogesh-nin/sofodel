import React from 'react'
import img from '../../Assets/hero-right.ee78c0ffae92062cbe4e.png'
import CheckInForm from '../CheckInForm'
import './index.css'
const Hero = () => {
  return (
    <div className="container relative mt-28  space-y-24 mb-24 lg:space-y-28 lg:mb-28">
      <div className='nc-SectionHero flex flex-col-reverse lg:flex-col relative pt-10 lg:pt-16 lg:pb-16'>
      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0'>
          <h2 className='font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] '>Properties & Experience</h2>
          <span className='text-base md:text-lg text-neutral-500 dark:text-gray-400'>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</span>
          <button className='relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  disabled:bg-opacity-70 bg-dark-gold hover:bg-light-gold text-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold' type='button'>Start your search</button>
        </div>
        <div className='flex-grow'>
        <img src={img} alt="" className='w-full' />
      </div>
      </div>
      <CheckInForm />
      </div>
    </div>
  )
}

export default Hero