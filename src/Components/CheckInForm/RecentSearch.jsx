import React, {useState, useEffect, useRef} from 'react'
import { BsClock } from 'react-icons/bs'

const RecentSearch = (props) => {
  const refOne = useRef(null);

    // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape")
      props.hide()
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      props.hide()
    }
  };

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);


  return (
    <div className="absolute left-0 z-20 w-full min-w-[300px] sm:min-w-[500px] bg-white top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto" ref={refOne}>
        <h3 className="block mt-2 sm:mt-0 px-4 sm:px-8 font-semibold text-base sm:text-lg text-neutral-800">Recent searches</h3>
            <div className="mt-2">
                <span className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 sm:py-5 hover:bg-neutral-100  cursor-pointer">
                    <span className="block text-neutral-400">
                        <BsClock />
                    </span>
                    <span className="block font-medium text-neutral-700 ">
                    Dwarka Sector-19, New Delhi
                    </span>
                </span>
                <span className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 sm:py-5 hover:bg-neutral-100  cursor-pointer">
                    <span className="block text-neutral-400">
                        <BsClock />
                    </span>
                    <span className="block font-medium text-neutral-700 ">
                    Kanpur, Uttar Pradesh
                    </span>
                </span>
                <span className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 sm:py-5 hover:bg-neutral-100  cursor-pointer">
                    <span className="block text-neutral-400">
                        <BsClock />
                    </span>
                    <span className="block font-medium text-neutral-700 ">
                    Mumbai, Maharashtra
                    </span>
                </span>
                <span className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 sm:py-5 hover:bg-neutral-100  cursor-pointer">
                    <span className="block text-neutral-400">
                        <BsClock />
                    </span>
                    <span className="block font-medium text-neutral-700 ">
                    Vizag, Andhra Pradesh
                    </span>
                </span>
                
            </div>
    </div>
  )
}

export default RecentSearch