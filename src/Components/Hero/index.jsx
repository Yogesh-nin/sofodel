import React from 'react'
import img from '../../Assets/hero-right.ee78c0ffae92062cbe4e.png'
import './index.css'
const Hero = () => {
  return (
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
      <div className='nc-SectionHero flex flex-col-reverse lg:flex-col relative pt-10 lg:pt-16 lg:pb-16'>
      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0'>
          <h2 className='font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] '>Hotel, car & experiences</h2>
          <span className='text-base md:text-lg text-neutral-500 dark:text-neutral-400'>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</span>
          <button className='hero-btn transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0' type='button'>Start your search</button>
        </div>
        <div className='flex-grow'>
        <img src={img} alt="" className='w-full' />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hero