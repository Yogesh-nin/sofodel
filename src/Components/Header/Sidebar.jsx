import React from "react";
import { Fade } from "react-awesome-reveal";
import { MdClose } from "react-icons/md";
import { RiFacebookBoxLine, RiInstagramLine, RiTwitterFill, RiYoutubeLine } from "react-icons/ri";
import logo from "../../Assets/StayTrails/nav-logo.png";

const Sidebar = (props) => {
  return (
    <div className="relative z-50 overflow-hidden">
        <div className="fixed inset-0 bg-neutral-900 bg-opacity-50 opacity-100"></div>
      <div className="fixed inset-0">
        <div className="flex justify-end min-h-full">
          <div className="w-full max-w-md overflow-hidden transition-all opacity-100 translate-x-0">
            <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 bg-white divide-y-2 divide-neutral-100">
              <div className="py-6 px-3 md:px-5">
                <a
                  href=""
                  className="inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24"
                >
                  <div className="">
                    <img src={logo} alt="" className="" />
                  </div>
                </a>
                <div className="flex flex-col mt-2 md:mt-5 text-neutral-700">
                    <span className="">Discover the most outstanding articles on all topics of life. Write your stories and share them</span>

                    <div className="flex justify-between items-center mt-4">
                    <div className='flex space-x-2.5 text-2xl text-neutral-6000 '>
                        <a href="/" className='flex items-center text-2xl my-2 hover:text-gray-900 leading-none space-x-2'><RiFacebookBoxLine className='icon mr-2'/></a>
                        <a href="/" className='flex items-center text-2xl  my-2 text-neutral-700 hover:text-gray-900 leading-none space-x-2'><RiTwitterFill className='icon mr-2'/></a>
                        <a href="/" className='flex items-center  my-2 text-2xl text-neutral-700 hover:text-gray-900 leading-none space-x-2'><RiYoutubeLine className='icon mr-2'/></a>
                        <a href="/" className='flex items-center text-2xl text-neutral-700 hover:text-gray-900 leading-none space-x-2 my-2'><RiInstagramLine className='icon mr-2'/></a>
                    </div>
                    </div>
                </div>
                <span className="absolute right-2 top-2 p-1">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none">
                        <MdClose size={42} onClick={props.onHide} />
                    </button>
                </span>
              </div>
              <ul className="flex flex-col py-3 md:py-6 px-2 space-y-1">
                <li className="text-gray-900">
                  <a
                    href=""
                    className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-gray-900"
                  >
                    <span className="py-2.5 pr-3">Home</span>
                  </a>
                </li>
                <li className="text-neutral-900">
                  <a
                    href=""
                    className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg"
                  >
                    <span className="py-2.5 pr-3">About</span>
                  </a>
                </li>
                <li className="text-neutral-900">
                  <a
                    href=""
                    className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-gray-900"
                  >
                    <span className="py-2.5 pr-3">Properties</span>
                  </a>
                </li>
                <li className="text-neutral-900">
                  <a
                    href=""
                    className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-gray-900"
                  >
                    <span className="py-2.5 pr-3">Experience</span>
                  </a>
                </li>
                <li className="text-neutral-900">
                  <a
                    href=""
                    className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-gray-900"
                  >
                    <span className="py-2.5 pr-3">Contact Us</span>
                  </a>
                </li>
              </ul>
              <div className="flex items-center justify-between py-6 px-6">
                <a href="inline-block">
                  <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-8 disabled:bg-opacity-70 bg-dark-gold hover:bg-light-gold text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold">Sign up</button>
                </a>

              <button
                  className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base px-4 py-3 sm:px-6  font-medium border border-neutral-200 text-neutral-700 hover:text-neutral-50 hover:bg-light-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold"
                  type="button"
                  >
                  Become a host
                </button>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Sidebar;
