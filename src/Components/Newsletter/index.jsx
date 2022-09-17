import React from "react";
import img from "../../Assets/SVG-subcribe2.efb832b25bd6eca32484.png";
import { BiRightArrowAlt } from 'react-icons/bi'
import './index.css'
const NewsLetter = () => {
  return (
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
      <div className="relative flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
          <h2 className="font-semibold text-4xl">Join our newsletter 🎉</h2>
          <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Read and share new perspectives on just about any topic. Everyone’s
            welcome.
          </span>
          <ul className="space-y-4 mt-10">
            <li className="flex items-center space-x-4">
              <span className="inline-flex px-2.5 py-1 rounded-full  font-medium text-xs relative text-blue-800 bg-blue-100 ">
                01
              </span>
              <span className="font-medium text-neutral-700 dark:text-neutral-400">
                Get more discount
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="inline-flex px-2.5 py-1 rounded-full  font-medium text-xs relative text-red-800 bg-red-100 ">
                02
              </span>
              <span className="font-medium text-neutral-500 dark:text-neutral-400">
                Get premium magazine
              </span>
            </li>
          </ul>

          <form className="mt-10 relative max-w-sm">
            <input placeholder="enter your email" type="email" className="block w-full h-11 px-4 py-3 border border-gray-700 focus:border-indigo-0 rounded-full focus:ring focus:ring-opacity bg-white" />

            <button type="button" className="flex items-center justify-center rounded-full disabled:bg-opacity-70 bg-indigo-600 hover:bg-primary-700 text-gray-50 absolute transform top-1/2 -translate-y-1/2 right-[5px]  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 dark:focus:ring-offset-0 focus:ring-offset-indigo-600">
                <BiRightArrowAlt className="text-xl" />
            </button>
          </form>
        </div>
        <div className="flex-grow">
          <div className="">
            <img src={img} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

// border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-gray-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-gray-900 rounded-full text-sm font-normal  