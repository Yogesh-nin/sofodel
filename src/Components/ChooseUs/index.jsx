import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import img from '../../Assets/BecomeAnAuthor.png'
const ChooseUs = () => {
  return (
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 bg-gray-100">
      <div className="relative py-16">
        <div className="relative flex flex-col lg:flex-row items-center ">
          <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
            <a
              href=""
              className="inline-block text-primary-6000 focus:outline-none focus:ring-0 w-20"
            >
              <div className="flex items-end">
                    <FaMapMarkerAlt size={42} className="text-indigo-600" /> 
                    <span className="font-medium text-2xl md:text-4xl text-gray-900 font-bold">.fis</span>
                  </div>
            </a>
            <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
              Why did you choose us?
            </h2>

            <span className="block mt-6 text-gray-500">
              Accompanying us, you have a trip full of experiences. With
              Chisfis, booking accommodation, resort villas, hotels, private
              houses, apartments... becomes fast, convenient and easy.
            </span>
            <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 mt-6 sm:mt-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">
              Become an author
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
