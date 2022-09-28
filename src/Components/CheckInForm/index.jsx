import React, { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import DatePickerComponent from "./DatePickerComponent";
import Input from "./Input";
import "./index.css";
import GuestDropdown from "./GuestDropdown";
import DateRangePicker from "./DateRangePicker";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Datepicker.css";
import RecentSearch from "./RecentSearch";
const CheckInForm = () => {
  const [active, setActive] = useState("1");
  const [focus, setFocus] = useState(false);
  const [guestDropdownActive, setGuestDropdownActive] = useState(false);
  const [guestValue, setGuestValue] = useState(0);
  const [openDateRange, setOpenDateRange] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const refOne = useRef(null);
  const [startDate, setStartDate] = useState("");
  const [location, setLocation] = useState("")

  const changeGuest = (value) => {
    setGuestValue(value);
  };
const initialDates = [
  {
    startDate: null,
    endDate: null,
    key: "selection",
  },
]

  const [dates, setDates] = useState(initialDates);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpenDateRange(false);
      setOpenLocation(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpenDateRange(false);
      setOpenLocation(false);
    }
  };

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const setDate = (value) => {
    setStartDate(value);
  };

  const onLocationChange = (value) => {
    setLocation(value)
  }

  useEffect(()=>{
    const resetValue = () => {
      setLocation("");
      setGuestValue(0)
  
      setDates(initialDates);
      setDate();
    };
    return( resetValue())
  }, [active])
  console.log(dates[0].startDate + " date");

  return (
    <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full" id="searchBox">
      <div className="w-full max-w-6xl py-5 lg:py-0">
        <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto">
          <li
            className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium hover:bg-slate-200 px-4 py-2 rounded-3xl ${
              active === "1" ? "border bg-slate-200" : ""
            }`}
            onClick={() => setActive("1")}
          >
            <span className="inline-flex  items-center rounded-full">
              Properties
            </span>
          </li>
          <li
            className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium hover:bg-slate-200 px-4 py-2 rounded-3xl  ${
              active === "2" ? "border border-gray-300 bg-slate-200" : ""
            }`}
            onClick={() => setActive("2")}
          >
            <span className="">Experience</span>
          </li>
        </ul>
        {active === "1" && (
          <form className="w-full relative mt-8 flex rounded-full shadow-xl bg-white ">
            <div className="relative flex flex-[1.5]">
              <div className="relative flex flex-1 px-4 py-3 md:py-4 md:px-7 lg:py-6 lg:px-8 flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left field-focused ">
                <div className="text-dark-gold">
                  <FaMapMarkerAlt size={42} />
                </div>
                <div
                  className="flex-grow"
                  onClick={() => setOpenLocation(true)}
                >
                  <input
                    type="text"
                    placeholder="Location"
                    className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-gray-300 xl:text-lg font-semibold placeholder-gray-800 truncate"
                    value={location === "" ? "" : location}
                    onChange={(e)=> setLocation(e.target.value)}
                  />

                  <span className="block mt-0.5 text-sm text-neutral-400 font-light">
                    Where are you going?
                  </span>
                </div>
              </div>
              {openLocation && (
                <RecentSearch value={location} setValue={onLocationChange} hide={() => setOpenLocation(false)} />
              )}
            </div>

            <div className="relative flex z-10 flex-[2] ">
              <div className="absolute inset-0 flex ">
                <div className="flex-1 grid grid-cols-2 relative">
                  <div className="relative px-4 py-3 md:py-4 md:px-7 lg:py-6 lg:px-8 flex items-center space-x-3 cursor-pointer field-focused">
                    <div className="text-dark-gold">
                      <MdDateRange size={42} />
                    </div>
                    <div className="flex-1">
                      <button
                        type="button"
                        className="flex-0.5 flex"
                        onClick={() => setOpenDateRange((open) => !open)}
                      >
                        <input
                          value={`${
                            dates[0].startDate === null
                              ? "Check In"
                              : format(dates[0].startDate, "dd/MMM/yyyy")
                          }`}
                          readOnly
                          className="inputBox w-5/6 block xl:text-lg font-semibold outline-none"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative px-4 py-3 md:py-4 md:px-7 lg:py-6 lg:px-8 flex items-center space-x-3 cursor-pointer field-focused">
                    <div className="text-dark-gold">
                      <MdDateRange size={42} />
                    </div>
                    <div className="flex-1 flex text-left items-center space-x-3">
                      <button
                        type="button"
                        className="flex-1 flex"
                        onClick={() => setOpenDateRange((open) => !open)}
                      >
                        <input
                          value={`${
                            dates[0].endDate === null
                              ? "Check Out"
                              : format(dates[0].endDate, "dd/MM/yyyy")
                          }`}
                          readOnly
                          className="w-5/6 block xl:text-lg font-semibold outline-none"
                        />
                      </button>
                      {openDateRange && (
                        <div className="relative">
                          <span className="absolute z-10 w-5 h-5 lg:w-6 lg:h-6 text-sm bg-neutral-200 rounded-full flex items-center justify-center right-1 top-1/2 transform -translate-y-1/2">
                            <AiOutlineClose
                              onClick={() => {
                                setOpenDateRange(false);
                                setDates(initialDates);
                                console.log(dates[0].startDate + "onclick")
                              }}
                            />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {openDateRange && (
                  <div
                    className="absolute left-0 z-10 w-auto bg-white top-full mt-3 py-2 sm:py-6 rounded-3xl shadow-xl opacity-100 translate-y-0 overflow-hidden"
                    tab-index="-1"
                    ref={refOne}
                  >
                    <DateRange
                      onChange={(item) => setDates([item.selection])}
                      // editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      months={2}
                      direction="horizontal"
                      className="calendarElement"
                      retainEndDateOnFirstSelection={true}
                      minDate={new Date()}
                      // customInput={<Input />}
                    />
                  </div>
                )}
              </div>

              {/* <div className="flex-1 grid grid-cols-2 relative ">
                <div className="relative px-4 py-3 md:py-4 md:px-7 lg:py-6 lg:px-8 flex items-center space-x-3 cursor-pointer ">
                  <div className="text-neutral-300 dark:text-neutral-400">
                    <MdDateRange size={42} />
                  </div>
                  <div className="flex-1">
                    <span className="block xl:text-lg font-semibold">
                      Check In
                    </span>
                    <span className="block mt-1 text-sm text-neutral-400 font-light">
                      Add Date
                    </span>
                  </div>
                </div>
                <div className="relative px-4 py-3 md:py-4 md:px-7 lg:py-6 lg:px-8 flex items-center space-x-3 cursor-pointer">
                  <div className="text-neutral-300 dark:text-neutral-400">
                    <MdDateRange size={42} />
                  </div>
                  <div className="flex-1">
                    <span className="block xl:text-lg font-semibold">
                      Check Out
                    </span>
                    <span className="block mt-1 text-sm text-neutral-400 font-light">
                      Add Date
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex relative flex-[1.2]">
              <div className="flex-1 flex items-center space-x-3 focus:outline-none cursor-pointer field-focused">
                <button
                  type="button"
                  className="flex-1 flex text-left items-center space-x-3 px-4 py-3 md:py-4 md:px-7 lg:py-6 lg:px-8"
                >
                  <div className="text-dark-gold">
                    <BiUserPlus size={42} />
                  </div>

                  <div
                    className="flex-grow"
                    onClick={() => setGuestDropdownActive(true)}
                  >
                    <div className="block xl:text-lg font-semibold">
                      {guestValue === 0 ? "Guests" : guestValue + " Guests"}
                    </div>

                    <span className="block mt-0.5 text-sm text-neutral-400 font-light">
                      {guestValue === 0 ? "Add Guests" : "Guests"}
                    </span>
                  </div>
                </button>

                {guestDropdownActive && (
                  <div className="relative">
                    <span className="absolute z-10 w-5 h-5 lg:w-6 lg:h-6 text-sm bg-neutral-200 rounded-full flex items-center justify-center right-1 lg:right-3 top-1/2 transform -translate-y-1/2">
                      <AiOutlineClose
                        onClick={() => {
                          setGuestDropdownActive(false);
                        }}
                      />
                    </span>
                  </div>
                )}
                {guestDropdownActive && (
                  <GuestDropdown
                    changeGuest={changeGuest}
                    hide={() => setGuestDropdownActive(false)}
                  />
                )}

                <div className="pr-2 xl:pr-4">
                  <button className="h-14 md:h-16 w-full md:w-16 rounded-full bg-dark-gold hover:bg-light-gold flex items-center justify-center text-gray-50 focus:outline-none">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {active === "2" && (
          <form
            action=""
            className="w-full relative mt-8 flex flex-col md:flex-row  rounded-3xl md:rounded-full shadow-xl bg-white divide-y divide-neutral-200  md:divide-y-0"
          >
            <div className="relative flex flex-[1.5]">
              <div className="relative flex flex-1 px-4 py-3 md:py-4 md:px-7 lg:py-6 lg:px-8 flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left field-focused ">
                <div className="text-dark-gold">
                  <FaMapMarkerAlt size={42} />
                </div>
                <div
                  className="flex-grow"
                  onClick={() => setOpenLocation(true)}
                >
                  <input
                    type="text"
                    placeholder="Location"
                    className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-gray-300 xl:text-lg font-semibold placeholder-gray-800 truncate"
                    value={location === "" ? "" : location}
                    onChange={(e)=> setLocation(e.target.value)}
                  />

                  <span className="block mt-0.5 text-sm text-neutral-400 font-light">
                    Where are you going?
                  </span>
                </div>
              </div>
              {openLocation && (
                <RecentSearch value={location} setValue={onLocationChange} hide={() => setOpenLocation(false)} />
              )}
            </div>
            <div className="relative flex flex-1">
              <div className="px-4 py-3 md:py-4 md:px-7 lg:py-6 lg:px-8 flex-1 flex relative items-center space-x-3 cursor-pointer field-focused">
                <div className="text-dark-gold">
                  <MdDateRange size={42} />
                </div>
                <div className="flex-grow">
                  {/* <button
                        type="button"
                        className="flex-0.5 flex"
                        onClick={() => setOpenDatePicker((open) => !open)}
                      >
                        <input
                          value={`${startDate === "" ? "Date" : startDate}`}
                          readOnly
                          className="inputBox w-5/6 block xl:text-lg font-semibold outline-none"
                        />
                      </button> */}
                  <DatePickerComponent />
                  <span className="block mt-0.5 text-sm text-neutral-400 font-light">
                    Add Date
                  </span>
                </div>
              </div>
              {}
            </div>
            <div className="flex relative flex-[1.5]">
              <div className="flex-1 flex items-center space-x-3 focus:outline-none cursor-pointer field-focused">
                <button
                  type="button"
                  className="flex-1 flex text-left items-center space-x-3 px-4 py-3 md:py-4 md:px-7 lg:py-6 lg:px-8"
                >
                  <div className="text-dark-gold">
                    <BiUserPlus size={42} />
                  </div>

                  <div
                    className="flex-grow"
                    onClick={() => setGuestDropdownActive(true)}
                  >
                    <div className="block xl:text-lg font-semibold">
                      {guestValue === 0 ? "Guests" : guestValue + " Guests"}
                    </div>

                    <span className="block mt-0.5 text-sm text-neutral-400 font-light">
                      {guestValue === 0 ? "Add Guests" : "Guests"}
                    </span>
                  </div>
                </button>

                {guestDropdownActive && (
                  <div className="relative">
                    <span className="absolute z-10 w-5 h-5 lg:w-6 lg:h-6 text-sm bg-neutral-200 rounded-full flex items-center justify-center right-1 lg:right-3 top-1/2 transform -translate-y-1/2">
                      <AiOutlineClose
                        onClick={() => {
                          setGuestDropdownActive(false);
                        }}
                      />
                    </span>
                  </div>
                )}
                {guestDropdownActive && (
                  
                  <GuestDropdown
                    changeGuest={changeGuest}
                    hide={() => setGuestDropdownActive(false)}
                  />
                )}

                <div className="pr-2 xl:pr-4">
                  <button className="h-14 md:h-16 w-full md:w-16 rounded-full bg-dark-gold hover:bg-light-gold flex items-center justify-center text-gray-50 focus:outline-none">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckInForm;
