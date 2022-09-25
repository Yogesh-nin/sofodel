import React from "react";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiMailLine,
  RiTwitterFill,
  RiYoutubeLine,
} from "react-icons/ri";
import "./index.css";
import logo from "../../Assets/StayTrails/nav-logo.png";
const Footer = () => {
  return (
    <div className="relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24 sm:w-28"
            >
              <div className="">
                <img src={logo} alt="" className="cover-object w-full h-full" />
              </div>
            </a>
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <div className="social-links flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start">
              <a
                href="/"
                className="flex items-center text-2xl my-2 hover:text-gray-900 leading-none space-x-2"
              >
                <RiFacebookBoxLine className="icon mr-2" />{" "}
                <span className="hidden md:block">Facebook</span>
              </a>
              <a
                href="/"
                className="flex items-center text-2xl  my-2 text-neutral-700 hover:text-gray-900 leading-none space-x-2"
              >
                <RiTwitterFill className="icon mr-2" />{" "}
                <span className="hidden md:block">Twitter</span>
              </a>
              <a
                href="/"
                className="flex items-center  my-2 text-2xl text-neutral-700 hover:text-gray-900 leading-none space-x-2"
              >
                <RiYoutubeLine className="icon mr-2" />{" "}
                <span className="hidden md:block"> YouTube</span>
              </a>
              <a
                href="/"
                className="flex items-center text-2xl text-neutral-700 hover:text-gray-900 leading-none space-x-2 my-2"
              >
                <RiInstagramLine className="icon mr-2" />{" "}
                <span className="hidden md:block">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-gray-700">Quick Links</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a href="/" className="hover:text-gray-900 footer-links">
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 footer-links"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 footer-links"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600  hover:text-gray-900 footer-links"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600  hover:text-gray-900 footer-links"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-gray-900">Top Destination</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href="/"
                className=" footer-links text-gray-600  hover:text-gray-900"
              >
                New Delhi
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600  hover:text-gray-900 footer-links"
              >
                Agra
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600  hover:text-gray-900 footer-links"
              >
                Mumbai
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600  hover:text-gray-900 footer-links"
              >
                Chennai
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600  hover:text-gray-900 footer-links"
              >
                Kolkata
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-gray-900">Terms & Condition</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href="/"
                className="text-gray-600  hover:text-gray-900 footer-links"
              >
                Terms of use
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600  hover:text-gray-900 footer-links"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600  hover:text-gray-900 footer-links"
              >
                Host Policy
              </a>
            </li>
            {/* <li>
                        <a href="/" className='text-gray-600  hover:text-gray-900 footer-links'>Learn Design</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-600  hover:text-gray-900 footer-links'>Release</a>
                    </li> */}
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-gray-900">Contact Us</h2>
          {/* <ul className='mt-5 space-y-4'>
                    <li>
                        <a href="/" className='text-gray-600  hover:text-gray-900 footer-links'>Discussion Forums</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-600  hover:text-gray-900 footer-links'>Code of Conduct</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-600  hover:text-gray-900 footer-links'>Community Resources</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-600  hover:text-gray-900 footer-links'>Contributing</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-600  hover:text-gray-900 footer-links'>Concurrent mode</a>
                    </li>
                </ul> */}
          <div className="mt-5 space-y-4">
            <span className="social-links">
              <a
                href="/"
                className="flex items-center text-2xl my-2 hover:text-gray-900 leading-none space-x-2"
              >
                <RiMailLine className="icon mr-2" />{" "}
                <span className="hidden md:block"> info@staytrails.co</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
