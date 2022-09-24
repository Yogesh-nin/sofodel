import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import img from '../../Assets/BecomeAnAuthor.png'
const ChooseUs = () => {
  return (
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
      <div className="relative py-16">
        <div className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 "></div>
        <div className="relative flex flex-col lg:flex-row items-center ">
          <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
            <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
              Earn Unlimited With StayTrials
            </h2>

            <span className="block mt-6 text-gray-500">
              Accompanying us, you have a trip full of experiences. With
              stayTrials, booking accommodation, resort villas, hotels, private
              houses, apartments... becomes fast, convenient and easy.
            </span>
            <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 disabled:bg-opacity-70 bg-dark-gold hover:bg-light-gold text-gray-50 mt-6 sm:mt-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold">
              Become a host
            </button>
          </div>
          <div className="flex-grow">

            <div className="">
                <img src={img} alt="" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
