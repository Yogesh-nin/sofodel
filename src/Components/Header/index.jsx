import React, { useState } from "react";
// import "./index.css";
import { useParams } from "react-router-dom";
import { VscSearch, VscHeart } from "react-icons/vsc";
import { MdOutlineMenu } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";
import { HiShare } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../Assets/StayTrails/nav-logo.png";
import Sidebar from "./Sidebar";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Fade, Slide } from "react-awesome-reveal";
import SearchBar from "../Search";

const navList = ["Home", "About", "Properties", "Experience", "Contact us"];

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
      <div className="md:hidden bg-white shadow-lg fixed bottom-0 z-40 w-full p-2 overflow-x-hidden flex items-center justify-between md:justify-evenly text-gray-500 border">
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
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false)

  openNav || openSearch ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div>
    <div className="nc-Header bg-white fixed top-0 w-full left-0 right-0 z-40 shadow-sm">
      <div className="relative z-10 px-1">
        <div className="px-4 container lg:container py-4 lg:py-5  relative flex  justify-around items-center">
          <div className="hidden md:flex justify-start flex-1  items-center space-x-4 sm:space-x-10">
            <div className="flex items-center">
              <a
                href="/"
                className="inline-block focus:outline-none focus:ring-0 w-28"
              >
                <div className="">
                  <img src={logo} alt="" className="w-full h-full object-cover" />
                </div>
              </a>

              <ul className="text-gray-900 hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative pl-4">
                {navList.map((item) => {
                  return (
                    <>
                      <li className="nav-list-item hover:bg-slate-200 px-4 py-2 rounded-3xl">
                        <a
                          href="#"
                          className="hover:text-black inline-flex  items-center rounded-full"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          {item}
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
              <div className="hidden xl:flex">
                <button
                  className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  disabled:bg-opacity-70 bg-dark-gold hover:bg-light-gold text-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold"
                  type="button"
                >
                  Become a host
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex-[3] max-w-lg !mx-auto  md:px-3">
            <div className="">
              <button className="relative flex items-center w-full border border-neutral-200 dark:border-neutral-6000 px-2 py-2 pr-11 rounded-full shadow-lg" onClick={()=> setOpenSearch(true)}>
                <GrSearch />
                <div className="ml-3 flex-1 text-left overflow-hidden">
                  <span className="block font-medium text-sm">Where to?</span>
                  <span className="block mt-0.5 text-xs font-light text-neutral-500 dark:text-neutral-400 line-clamp-1">
                    Anywhere • Any week • Add guests
                  </span>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200">
                    <HiShare />
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex items-center gap-4 ml-6 ">
            <div className="flex xl:hidden items-center">
              <GiHamburgerMenu
                className="ml-2 cursor-pointer"
                size={24}
                onClick={() => setOpenNav(true)}
              />
            </div>
            <div className="hidden xl:flex items-center space-x-0.5">
            <span className="">
                <VscSearch className="mx-2 cursor-pointer" size={24} />
              </span>
              <span className="hover:bg-slate-200 px-2 py-2 rounded-full">
                <AiOutlineHeart className="mx-2 cursor-pointer" size={24} />
              </span>
              <span className="hover:bg-slate-200 px-2 py-2 rounded-full">
                <AiOutlineShoppingCart
                  className="mx-2 cursor-pointer"
                  size={24}
                />
              </span>

              

              
              <button
                className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  disabled:bg-opacity-70 bg-dark-gold hover:bg-light-gold text-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gold"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>

          {openNav && (
            <Sidebar
              show={() => setOpenNav(true)}
              onHide={() => setOpenNav(false)}
            />
          )}
          {
            openSearch && (
              <SearchBar show={()=> setOpenSearch(true)} onHide={()=> setOpenSearch(false)} />
            )
          }
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
