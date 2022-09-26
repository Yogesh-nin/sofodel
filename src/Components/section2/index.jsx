import React from 'react'
import img1 from '../../Assets/HIW1.bbef046fd6951afd08a7.png'
import img2 from '../../Assets/HIW2.f68577684c76e764a351.png'
import img3 from '../../Assets/HIW3.b650d652a9db697619b9.png'
const Section2 = () => {
  return (
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-15 text-neutral-900 dark:text-neutral-50">
            <div className="text-center w-full max-w-2xl mx-auto">
                <h2 className='text-3xl md:text-4xl font-semibold text-black'>How it works ?</h2>
                <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Keep calm and travel on</span>
            </div>
        </div>
        <div className="mt-15 relative grid md:grid-cols-3 gap-20">
            <div className="relative flex flex-col items-center max-w-xs mx-auto">
                <div className="mb-8 mx-auto max-w-[200px]">
                    <img src={img1} alt="" className='object-cover w-full h-full' />
                </div>
                <div className="text-center mt-auto">
                    <h3 className="text-xl font-semibold">Book & relax</h3>
                    <span className="block mt-4 text-neutral-500 dark:text-neutral-400">Let each trip be an inspirational journey, each room a peaceful space</span>
                </div>
            </div>
            <div className="relative flex flex-col items-center max-w-xs mx-auto">
                <div className="mb-8 mx-auto max-w-[200px]">
                    <img src={img2} alt="" className='object-cover w-full h-full' />
                </div>
                <div className="text-center mt-auto">
                    <h3 className="text-xl font-semibold">Smart checklist</h3>
                    <span className="block mt-4 text-neutral-500 dark:text-neutral-400">Let each trip be an inspirational journey, each room a peaceful space</span>
                </div>
            </div>
            <div className="relative flex flex-col items-center max-w-xs mx-auto">
                <div className="mb-8 mx-auto max-w-[200px]">
                    <img src={img3} alt="" className='object-cover w-full h-full' />
                </div>
                <div className="text-center mt-auto">
                    <h3 className="text-xl font-semibold">Save more</h3>
                    <span className="block mt-4 text-neutral-500 dark:text-neutral-400">Let each trip be an inspirational journey, each room a peaceful space</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2