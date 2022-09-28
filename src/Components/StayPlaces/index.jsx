import React, { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";
import { HiArrowNarrowRight } from "react-icons/hi";

import img1 from "../../Assets/stay-slider/img1.jpeg";
import img2 from "../../Assets/stay-slider/img2.jpeg";
import img3 from "../../Assets/stay-slider/img3.jpeg";
import img4 from "../../Assets/stay-slider/img4.jpeg";
import img5 from "../../Assets/stay-slider/img5.jpeg";
import img6 from "../../Assets/stay-slider/img6.jpeg";
import img7 from "../../Assets/stay-slider/img7.jpeg";
import img8 from "../../Assets/stay-slider/img8.jpeg";
import img9 from "../../Assets/stay-slider/pexels-photo-1638341.jpeg";
import img10 from "../../Assets/stay-slider/pexels-photo-2079452.jpeg";
import img11 from "../../Assets/stay-slider/pexels-photo-2290738.jpeg";
import img12 from "../../Assets/stay-slider/pexels-photo-2343466.jpeg";
import img13 from "../../Assets/stay-slider/pexels-photo-2404422.jpeg";
import img14 from "../../Assets/stay-slider/pexels-photo-261327.jpeg";
import img15 from "../../Assets/stay-slider/pexels-photo-261410.jpeg";
import img16 from "../../Assets/stay-slider/pexels-photo-2677398.jpeg";
import img17 from "../../Assets/stay-slider/pexels-photo-2736187.jpeg";
import img18 from "../../Assets/stay-slider/pexels-photo-276746.jpeg";
import img19 from "../../Assets/stay-slider/pexels-photo-2983472.jpeg";
import img20 from "../../Assets/stay-slider/pexels-photo-3068519.jpeg";
import Pagination from "./Pagination";
import { motion } from 'framer-motion'
import { Fade } from "react-awesome-reveal";


const StayPlaceslist = [
  {
    badge: true,
    images: [img1, img2, img3, img4],
    beds: "10",
    title: "Best Western Cedars",
    location: "1 Anzinger Court",
    rate: "26",
    star: "4.8",
    total: "28",
    city: "New Delhi",
  },
  {
    badge: false,
    images: [img5, img6, img7, img8],
    beds: "6",
    title: "Bell By Greene King Inns",
    location: "32923 Judy Hill",
    rate: "250",
    star: "4.4",
    total: "198",
    city: "Mumbai",
  },
  {
    badge: false,
    images: [img9, img10, img11, img12],
    beds: "9",
    title: "Half Moon, Sherborne By Marnstone",
    location: "6731 Killdeer Park",
    rate: "278",
    star: "3.6",
    total: "16",
    city: "Agra",
  },
  {
    badge: false,
    images: [img13, img14, img15, img16],
    beds: "7",
    title: "Best Western Cedars",
    location: "35 Sherman Park",
    rate: "40",
    star: "4.8",
    total: "34",
    city: "kolkata",
  },
  {
    badge: false,
    images: [img1, img2, img3, img4],
    beds: "10",
    title: "Best Western Cedars",
    location: "1 Anzinger Court",
    rate: "26",
    star: "4.8",
    total: "28",
    city: "New Delhi",
  },
  {
    badge: false,
    images: [img17, img18, img19, img20],
    beds: "3",
    title: "Ship and castle Hotel",
    location: "3 Crest Line Park",
    rate: "147",
    star: "3.4",
    total: "340",
    city: "Mumbai",
  },
  {
    badge: false,
    images: [img7, img12, img1, img3],
    beds: "7",
    title: "Bell By Greene King Inns",
    location: "55974 Waxwing Junction",
    rate: "90",
    star: "3.8",
    total: "508",
    city: "Kolkata",
  },
  {
    badge: false,
    images: [img13, img14, img15, img16],
    beds: "7",
    title: "Best Western Cedars",
    location: "35 Sherman Park",
    rate: "40",
    star: "4.8",
    total: "34",
    city: "kolkata",
  },
  {
    badge: false,
    images: [img6, img11, img9, img14],
    beds: "2",
    title: "Best Western Cedars",
    location: "79361 Chinook Place",
    rate: "282",
    star: "3",
    total: "481",
    city: "Agra",
  },
  {
    badge: false,
    images: [img8, img12, img18, img1],
    beds: "7",
    title: "Best Western Cedars",
    location: "6 Chive Avenue",
    rate: "79",
    star: "3.9",
    total: "188",
    city: "New Delhi",
  },
  {
    badge: false,
    images: [img9, img10, img11, img12],
    beds: "9",
    title: "Half Moon, Sherborne By Marnstone",
    location: "6731 Killdeer Park",
    rate: "278",
    star: "3.6",
    total: "16",
    city: "Agra",
  },
  {
    badge: false,
    images: [img6, img11, img9, img14],
    beds: "2",
    title: "Best Western Cedars",
    location: "79361 Chinook Place",
    rate: "282",
    star: "3",
    total: "481",
    city: "Agra",
  },
  {
    badge: false,
    images: [img8, img12, img18, img1],
    beds: "7",
    title: "Best Western Cedars",
    location: "6 Chive Avenue",
    rate: "79",
    star: "3.9",
    total: "188",
    city: "New Delhi",
  },
  {
    badge: false,
    images: [img5, img6, img7, img8],
    beds: "6",
    title: "Bell By Greene King Inns",
    location: "32923 Judy Hill",
    rate: "250",
    star: "4.4",
    total: "198",
    city: "Mumbai",
  },

  {
    badge: false,
    images: [img6, img11, img9, img14],
    beds: "2",
    title: "Best Western Cedars",
    location: "79361 Chinook Place",
    rate: "282",
    star: "3",
    total: "481",
    city: "Kolkata",
  },
];




const StayPlaces = () => {
  const [active, setActive] = useState("New Delhi");
  const [activeArray, setActiveArray] = useState([]);
  useEffect(() => {
    setActiveArray([]);
    StayPlaceslist.map((places) => {
      if (places.city === active) {
        setActiveArray((prev) => [...prev, places]);
      }
    });
    console.log(activeArray);

  }, [active]);

  


  return (
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
      <div className="relative py-16">
        <div className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100"></div>
        <Fade cascade damping={0.1} triggerOnce='true'>
        <div className="flex flex-col mb-8">
          <div className="flex flex-col relative sm:flex-row sm:items-end justify-between mb-10 md:mb-12 ">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Featured properties to stay
              </h2>
              <span className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
                Popular places to stay that StayTrails recommends for you
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <nav className="relative flex w-full text-sm md:text-base">
              <ul className="flex sm:space-x-2 overflow-x-auto">
                <li className="relative" onClick={() => setActive("New Delhi")}>
                  <button
                    className={`block px-3 !leading-none whitespace-nowrap font-medium py-3 text-sm sm:text-base xl:px-5 lg:py-2.5 hover:text-black rounded-full ${
                      active === "New Delhi"
                        ? "bg-light-gold text-gray-100"
                        : ""
                    } text-neutral-500  focus:outline-none`}
                  >
                    New Delhi
                  </button>
                </li>
                <li className="relative" onClick={() => setActive("Agra")}>
                  <button
                    className={`block !leading-none whitespace-nowrap font-medium px-3 py-3 text-sm sm:text-base lg:px-5 lg:py-2.5 rounded-full hover:text-black ${
                      active === "Agra" ? "bg-light-gold text-gray-100" : ""
                    } text-neutral-500 focus:outline-none`}
                  >
                    Agra
                  </button>
                </li>
                <li className="relative" onClick={() => setActive("Mumbai")}>
                  <button
                    className={`block px-3 !leading-none whitespace-nowrap font-medium py-3 text-sm sm:text-base hover:text-black lg:px-5 lg:py-2.5 rounded-full ${
                      active === "Mumbai" ? "bg-light-gold text-gray-100" : ""
                    } text-neutral-500 focus:outline-none`}
                  >
                    Mumbai
                  </button>
                </li>
                <li className="relative" onClick={() => setActive("Kolkata")}>
                  <button
                    className={`block !leading-none whitespace-nowrap font-medium px-3 py-3 text-sm sm:text-base lg:px-5 sm:py-2.5 hover:text-black rounded-full ${
                      active === "Kolkata" ? "bg-light-gold text-gray-100" : ""
                    } text-neutral-500 focus:outline-none`}
                  >
                    Kolkata
                  </button>
                </li>
              </ul>
            </nav>

            <span className="hidden sm:block flex-shrink-0">
              <button
                className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base px-4 py-3 sm:px-6 font-medium border bg-white border-neutral-200 text-gray-900 hover:bg-gray-100 !leading-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                onClick={() => setActive("view all")}
              >
                View all{" "}
                <span>
                  <HiArrowNarrowRight />
                </span>
              </button>
            </span>
          </div>
        </div>

        {active !== "view all" && (
          <>
          <ul
          // ref={ref}
            className="hidden sm:grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition transform"
            style={{ minHeight: "22rem" }}
            
          >
              {activeArray.map((places, i) => {
                if (places.city === active)

                  return <motion.li key={i}
                              initial={{opacity: 0, translateY: 10}}
                              animate={{opacity: 1, translateY: 1}}
                              transition={{duration: 0.3, delay: i*0.2}}
                  > <PlaceCard {...places} aspect=""  /></motion.li>
              })}
            </ul>

            <div
          // ref={ref}
            className="grid sm:hidden gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition transform"
            style={{ minHeight: "22rem" }}
            
          >
              {activeArray.map((places) => {
                if (places.city === active)

                  return <PlaceCard {...places} aspect=""  />
              })}
            </div>
            </>
        )}

        {active === "view all" && (
            <Pagination itemsPerPage={8} array={StayPlaceslist} />
        )}

        {/* <Pagination itemsPerPage={8} array={activeArray} /> */}

        {/* <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {StayPlaceslist.map((places) => {
            if(places.city === active)
              return <PlaceCard {...places} aspect="" />
          })}
        </div> */}
        </Fade>
      </div>
    </div>
  );
};

export default StayPlaces;
