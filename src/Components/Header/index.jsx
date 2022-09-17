import React, { useState } from "react";
// import "./index.css";
import { useParams } from "react-router-dom";
import { VscSearch, VscHeart } from "react-icons/vsc";
import { MdOutlineLightMode, MdOutlineMenu } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import DropDown from '../Dropdown'
import { GrSearch } from 'react-icons/gr'
import {HiShare} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaMapMarkerAlt } from 'react-icons/fa'
const navList = [
  "Home",
  "Five Columns",
  "Listing Page",
  "Templates",
  "Other Pages",
];



const MobileTabs = () => {
  const [allTypes] = useState([
    {
      id: "explore",
      icon: <VscSearch />,
      name: "Explore",
    },
    {
      id: "wishlists",
      icon: <VscHeart />,
      name: "Wishlists",
    },
    {
      id: "log-in",
      icon: <HiOutlineUserCircle />,
      name: "Log In",
    },
    {
      id: "menu",
      icon: <MdOutlineMenu />,
      name: "Menu",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="md:hidden bg-white shadow-lg fixed bottom-0 z-10 w-full p-2  flex items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((item) => (
          <a key={item.id} to="/" className="w-1/4">
            <div
              className={
                type === item.id
                  ? "flex text-center flex-col relative items-center text-xl "
                  : "flex text-center flex-col items-center text-xl"
              }
            >
              <div
                className={
                  type === item.id
                    ? "w-full h-full border-t-2 p-3  flex flex-col items-center"
                    : "flex flex-col items-center"
                }
              >
                {item.icon}
                <h5 className="text-sm">{item.name}</h5>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

const LargeTabs = () => {
  return (
    <div className="nc-Header bg-white fixed top-0 w-full left-0 right-0 z-40 shadow-sm dark:border-b dark:border-gray-100">
      <div className="relative z-10 px-5">
        <div className="px-4 lg:container py-4 lg:py-5  relative flex  justify-around items-center">
        <div className="hidden md:flex justify-start flex-1  items-center space-x-4 sm:space-x-10">
            <div className="flex items-center">
              <a
                href="/"
                className="inline-block text-indigo-6000 focus:outline-none focus:ring-0 w-24"
              >
                <div className="flex items-end">
                    <FaMapMarkerAlt size={42} className="text-indigo-600" /> 
                    <span className="font-medium text-4xl text-gray-900 font-bold">.fis</span>
                  </div>
                
              </a>

              <ul className="text-gray-900 hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative  ">
                {navList.map((item) => {
                  return (
                    <>
                      <li className="nav-list-item hover:bg-slate-200 px-4 py-2 rounded-3xl">
                        <a
                          href="#"
                          className="hover:text-black inline-flex  items-center rounded-full"
                          data-dropdown-toggle="dropdown"
                        >
                          {item}
                          {
                            <svg
                              class="ml-2 w-4 h-4"
                              aria-hidden="true"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          }
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            
          </div>
          <div className="lg:hidden flex-[3] max-w-lg !mx-auto  md:px-3">
            <div className="">
              <button className="relative flex items-center w-full border border-neutral-200 dark:border-neutral-6000 px-2 py-2 pr-11 rounded-full shadow-lg">
                <GrSearch />
                <div className="ml-3 flex-1 text-left overflow-hidden">
                  <span className="block font-medium text-sm">Where to?</span>
                  <span className="block mt-0.5 text-xs font-light text-neutral-500 dark:text-neutral-400 line-clamp-1">Anywhere • Any week • Add guests</span>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-6000 dark:text-neutral-300">
                <HiShare />

                  </span>
                </div>
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex flex items-center gap-4 ml-6 ">
            <div className="flex xl:hidden items-center">
              <MdOutlineLightMode className="mr-2" size={24} />
              <GiHamburgerMenu className="ml-2" size={24} />
            </div>
            <div className="hidden xl:flex items-center space-x-0.5">
              <MdOutlineLightMode className="mx-2" size={24} />
              <VscSearch className="mx-2"size={24} />
              <button
                className="hero-btn transition-colors mx-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                type="button"
              >
                Sign Up
              </button>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <div>
        <MobileTabs />
        <LargeTabs />
      </div>
    </>
  );
};

export default Navbar;
