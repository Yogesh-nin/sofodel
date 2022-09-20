import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
const CheckInForm = () => {
  const [active, setActive] = useState("1");
  return (
    <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
      <div className="w-full max-w-6xl py-5 lg:py-0 ">
        <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto">
          <li
            className="flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium"
            onClick={() => setActive("1")}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full bg-gray-800 mr-2 ${
                active === "1" ? "block" : "hidden"
              }`}
            ></span>
            <span className="">Properties</span>
          </li>
          <li
            className="flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium"
            onClick={() => setActive("2")}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full bg-gray-800 mr-2 ${
                active === "2" ? "block" : "hidden"
              }`}
            ></span>

            <span className="">Experience</span>
          </li>
          
        </ul>
        <form
          action=""
          className="w-full px-5 py-3 relative mt-8 flex flex-col md:flex-row  rounded-3xl md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700  md:divide-y-0"
        >
          <div className="relative flex flex-[1.5]">
            <div className="flex flex-1 relative flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ">
              <div className="text-gray-300 dark:text-gray-400">
                <FaMapMarkerAlt size={42} />
              </div>
              <div className="flex-grow">
                <input
                  type="text"
                  className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-gray-300 xl:text-lg font-semibold placeholder-gray-800 truncate"
                  placeholder="Around City"
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-1">
            <div className="flex-1 flex relative [ nc-hero-field-padding ] items-center space-x-3 cursor-pointer ">
              <div className="text-gray-300 dark:text-gray-400">
                <MdDateRange size={42} />
              </div>
              <div className="flex-grow">
              <input
                  type="text"
                  className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-gray-300 xl:text-lg font-semibold placeholder-gray-800 truncate"
                  placeholder="Travel choice"
                />
              </div>
            </div>
          </div>
          <div className="flex relative flex-[1.5]">
            <div className="flex-1 flex relative [ nc-hero-field-padding ] items-center space-x-3 cursor-pointer ">
              <div className="text-gray-300 dark:text-gray-400">
                <BiUserPlus size={42} />
              </div>
              <div className="flex-grow">
              <input
                  type="text"
                  className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-gray-300 xl:text-lg font-semibold placeholder-gray-800 truncate"
                  placeholder="In Region/State"
                />
              </div>
            </div>
            <div className="pr-2 xl:pr-4">
              <button className="h-14 md:h-16 w-full md:w-16 rounded-full bg-dark-gold hover:bg-light-gold flex items-center justify-center text-gray-50 focus:outline-none">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckInForm;
