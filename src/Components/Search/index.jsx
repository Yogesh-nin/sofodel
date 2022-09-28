import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";
import DatePickerComponent from "../CheckInForm/DatePickerComponent";
import GuestDropdown from "../CheckInForm/GuestDropdown";
import { DateRange } from "react-date-range";
import DatePicker from "react-datepicker";
import Input from "../CheckInForm/Input";
import { format } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Fade } from "react-awesome-reveal";
const SearchBar = ({ show, onHide }) => {
  const [location, setLocation] = useState("");
  const [guestAdult, setGuestAdult] = useState(0);
  const [guestChild, setGuestChild] = useState(0);
  const [guestInfant, setGuestInfant] = useState(0);
  const [totalGuest, setTotalGuest] = useState(0);

  const [disableAdult, setDisableAdult] = useState(true);
  const [disableChild, setDisableChild] = useState(true);
  const [disableInfant, setDisableInfant] = useState(true);

  const [active, setActive] = useState(1); // properties, experience
  const [activeTab, setActiveTab] = useState(0); // Location, date, guest

  useEffect(() => {
    if (guestAdult <= 1) {
      setDisableAdult(true);
    } else {
      setDisableAdult(false);
    }
    if (guestChild <= 0) {
      setDisableChild(true);
    } else {
      setDisableChild(false);
    }
    if (guestInfant <= 0) {
      setDisableInfant(true);
    } else {
      setDisableInfant(false);
    }
  }, [guestAdult, guestChild, guestInfant]);

  const initialDates = [
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ];

  const [dates, setDates] = useState(initialDates); //dateRangeDate

  const [date, setDate] = useState(); // Datepicker date

  useEffect(() => {
    setTotalGuest(guestAdult + guestChild + guestInfant);
  }, [guestAdult, guestChild, guestInfant]);

  const resetValue = () => {
    setLocation("");
    setGuestAdult(0);
    setGuestChild(0);
    setGuestInfant(0);

    setDates(initialDates);
    setDate();
  };

  return (
    <div className="relative z-max">
      <div className="fixed inset-0 bg-neutral-100 ">
        <div className="flex h-full">
          <div className="relative h-full overflow-hidden flex-1 flex flex-col justify-between opacity-100 translate-y-0">
            <div className="absolute left-4 top-4">
              <button type="button" onClick={onHide}>
                <MdClose />
              </button>
            </div>
            <div className="pt-12 flex w-full justify-center font-semibold text-sm sm:text-base text-neutral-500 space-x-6 sm:space-x-8">
              <div
                className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium hover:bg-slate-200 px-4 py-2 rounded-3xl ${
                  active === 1 ? "border bg-slate-200" : ""
                }`}
                onClick={() => setActive(1)}
              >
                <div className="text-black">Properties</div>
              </div>
              <div
                className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium hover:bg-slate-200 px-4 py-2 rounded-3xl ${
                  active === 2 ? "border bg-slate-200" : ""
                }`}
                onClick={() => setActive(2)}
              >
                <div className="text-black ">Experience</div>
              </div>
            </div>

            <div className="flex-1 pt-3 px-1 flex overflow-hidden">
              <div className="flex-1 overflow-y-auto py-4">
                <Fade>
                {active === 1 && (
                  <div className="w-full space-y-5">
                    <div className="w-full bg-white rounded-2xl shadow-lg">
                      <button
                        className={`w-full ${
                          activeTab === 0 ? "hidden" : "flex"
                        } justify-between text-sm font-medium p-4`}
                        onClick={() => setActiveTab(0)}
                      >
                        <span className="text-neutral-400">Where</span>
                        <span>{location === "" ? "Location" : location}</span>
                      </button>
                      {activeTab === 0 && (
                        <div className="p-3">
                          <div className="block font-semibold text-xl sm:text-2xl">
                            Where to?
                          </div>
                          <div className="relative mt-3">
                            <input
                              className="block w-full bg-transparent border px-4 py-3 pr-12 border-neutral-900  rounded-xl focus:ring-0 focus:outline-none text-base leading-none placeholder-neutral-500 truncate font-bold placeholder:truncate"
                              placeholder="Search Destinations" value={location} onChange={(e)=>setLocation(e.target.value)}
                            />
                            <span className="absolute right-2.5 top-1/2 -translate-y-1/2">
                              <GrSearch />
                            </span>
                          </div>
                          <div className="mt-7">
                            <p className="block font-semibold text-base">
                              Popular Destinations
                            </p>
                            <div className="mt-3">
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm" onClick={()=>setLocation("New Delhi")}>
                                <HiOutlineLocationMarker />
                                <span className="">New Delhi</span>
                              </div>
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm" onClick={()=>setLocation("Mumbai")}>
                                <HiOutlineLocationMarker />
                                <span className="">Mumbai</span>
                              </div>
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm" onClick={()=>setLocation("Kolkata")}>
                                <HiOutlineLocationMarker />
                                <span className="">Kolkata</span>
                              </div>
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm" onClick={()=>setLocation("Bangalore")}>
                                <HiOutlineLocationMarker />
                                <span className="">Bangalore</span>
                              </div>
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm" onClick={()=>setLocation("Chennai")}>
                                <HiOutlineLocationMarker />
                                <span className="">Chennai</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="w-full bg-white overflow-hidden rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]">
                      <button
                        className={`w-full ${
                          activeTab === 1 ? "hidden" : "flex"
                        } justify-between text-sm font-medium p-4`}
                        onClick={() => setActiveTab(1)}
                      >
                        <span className="text-neutral-400">When</span>
                          <span>
                            {dates[0].startDate === null
                              ? "Add Date"
                              : format(dates[0].startDate, "MMM,dd") + "-"}
                            {dates[0].endDate === null
                              ? ""
                              : format(dates[0].endDate, "MMM,dd")}{" "}
                          </span>

                      </button>
                      {activeTab === 1 && (
                        <div>
                          <div className="p-3">
                            <span className="block font-semibold text-xl sm:text-2xl">
                              When's your trip?
                            </span>
                          </div>
                            <DateRange
                              onChange={(item) => setDates([item.selection])}
                              // editableDateInputs={true}
                              moveRangeOnFirstSelection={false}
                              ranges={dates}
                              months={1}
                              direction="horizontal"
                              className="calendarElement"
                              retainEndDateOnFirstSelection={true}
                              minDate={new Date()}
                              customInput={<Input />}
                            />
                        </div>
                      )}
                    </div>
                    <div className="w-full bg-white overflow-hidden rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]">
                      <button
                        className={`w-full ${
                          activeTab === 2 ? "hidden" : "flex"
                        } justify-between text-sm font-medium p-4`}
                        onClick={() => setActiveTab(2)}
                      >
                        <span className="text-neutral-400">Who</span>
                        <span>
                          {totalGuest === 0
                            ? "Add Guests"
                            : totalGuest + " guests"}
                        </span>
                      </button>
                      {activeTab === 2 && (
                        <div className="flex flex-col relative p-3 ">
                          <span className="mb-5 block font-semibold text-xl sm:text-2xl">
                            Whos's coming
                          </span>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col">
                              <span className="font-medium text-neutral-800">
                                Adult
                              </span>
                              <span className="text-xs text-neutral-500 font-normal">
                                Ages 13 or above
                              </span>
                            </div>
                            <div className="flex items-center justify-between w-28">
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestAdult(guestAdult - 1)}
                                disabled={disableAdult}
                              >
                                {" "}
                                -{" "}
                              </button>
                              <span>{guestAdult}</span>
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestAdult(guestAdult + 1)}
                              >
                                {" "}
                                +{" "}
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between space-x-5 w-full mt-6">
                            <div className="flex flex-col">
                              <span className="font-medium text-neutral-800">
                                Children
                              </span>
                              <span className="text-xs text-neutral-500 font-normal">
                                Ages 2-12
                              </span>
                            </div>
                            <div className="flex items-center justify-between w-28">
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestChild(guestChild - 1)}
                                disabled={disableChild}
                              >
                                {" "}
                                -{" "}
                              </button>
                              <span>{guestChild}</span>
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestChild(guestChild + 1)}
                              >
                                {" "}
                                +{" "}
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between space-x-5 w-full mt-6">
                            <div className="flex flex-col">
                              <span className="font-medium text-neutral-800">
                                Infants
                              </span>
                              <span className="text-xs text-neutral-500 font-normal">
                                Ages 0-2
                              </span>
                            </div>
                            <div className="flex items-center justify-between w-28">
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestInfant(guestInfant - 1)}
                                disabled={disableInfant}
                              >
                                {" "}
                                -{" "}
                              </button>
                              <span>{guestInfant}</span>
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestInfant(guestInfant + 1)}
                              >
                                {" "}
                                +{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {active === 2 && (
                  <div className="w-full space-y-5">
                    <div className="w-full bg-white  rounded-2xl shadow-lg">
                      <button
                        className={`w-full ${
                          activeTab === 0 ? "hidden" : "flex"
                        } justify-between text-sm font-medium p-4`}
                        onClick={() => setActiveTab(0)}
                      >
                        <span className="text-neutral-400">Where</span>
                        <span>Location</span>
                      </button>
                      {activeTab === 0 && (
                        <div className="p-3">
                          <div className="block font-semibold text-xl sm:text-2xl">
                            Where to?
                          </div>
                          <div className="relative mt-3">
                            <input
                              className="block w-full bg-transparent border px-4 py-3 pr-12 border-neutral-900  rounded-xl focus:ring-0 focus:outline-none text-base leading-none placeholder-neutral-500 truncate font-bold placeholder:truncate"
                              placeholder="Search Destinations"
                            />
                            <span className="absolute right-2.5 top-1/2 -translate-y-1/2">
                              <GrSearch />
                            </span>
                          </div>
                          <div className="mt-7">
                            <p className="block font-semibold text-base">
                              Popular Destinations
                            </p>
                            <div className="mt-3">
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm">
                                <HiOutlineLocationMarker />
                                <span className="">New Delhi</span>
                              </div>
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm">
                                <HiOutlineLocationMarker />
                                <span className="">Mumbai</span>
                              </div>
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm">
                                <HiOutlineLocationMarker />
                                <span className="">Kolkata</span>
                              </div>
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm">
                                <HiOutlineLocationMarker />
                                <span className="">Bangalore</span>
                              </div>
                              <div className="py-2 mb-1 flex items-center space-x-3 text-sm">
                                <HiOutlineLocationMarker />
                                <span className="">Chennai</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="w-full bg-white  overflow-hidden rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]">
                      <button
                        className={`w-full ${
                          activeTab === 1 ? "hidden" : "flex"
                        } justify-between text-sm font-medium p-4`}
                        onClick={() => setActiveTab(1)}
                      >
                        <span className="text-neutral-400">When</span>
                        <span>
                            {date === undefined
                              ? "Add date"
                              : format(date, "MMM,dd")}
                          </span>
                      </button>
                      {activeTab === 1 && (
                        <div>
                          <div className="p-3">
                            <span className="block font-semibold text-xl sm:text-2xl">
                              When's your trip?
                            </span>
                          </div>
                          <Calendar
                              onChange={(d) => setDate(d)}
                              value={date}
                              minDate={new Date()}
                            />
                        </div>
                      )}
                    </div>
                    <div className="w-full bg-white  overflow-hidden rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]">
                      <button
                        className={`w-full ${
                          activeTab === 2 ? "hidden" : "flex"
                        } justify-between text-sm font-medium p-4`}
                        onClick={() => setActiveTab(2)}
                      >
                        <span className="text-neutral-400">Who</span>
                        <span>
                          {totalGuest === 0
                            ? "Add Guests"
                            : totalGuest + " guests"}
                        </span>
                      </button>
                      {activeTab === 2 && (
                        <div className="flex flex-col relative p-3 ">
                          <span className="mb-5 block font-semibold text-xl sm:text-2xl">
                            Whos's coming
                          </span>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col">
                              <span className="font-medium text-neutral-800">
                                Adult
                              </span>
                              <span className="text-xs text-neutral-500 font-normal">
                                Ages 13 or above
                              </span>
                            </div>
                            <div className="flex items-center justify-between w-28">
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestAdult(guestAdult - 1)}
                                disabled={disableAdult}
                              >
                                {" "}
                                -{" "}
                              </button>
                              <span>{guestAdult}</span>
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestAdult(guestAdult + 1)}
                              >
                                {" "}
                                +{" "}
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between space-x-5 w-full mt-6">
                            <div className="flex flex-col">
                              <span className="font-medium text-neutral-800">
                                Children
                              </span>
                              <span className="text-xs text-neutral-500 font-normal">
                                Ages 2-12
                              </span>
                            </div>
                            <div className="flex items-center justify-between w-28">
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestChild(guestChild - 1)}
                                disabled={disableChild}
                              >
                                {" "}
                                -{" "}
                              </button>
                              <span>{guestChild}</span>
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestChild(guestChild + 1)}
                              >
                                {" "}
                                +{" "}
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between space-x-5 w-full mt-6">
                            <div className="flex flex-col">
                              <span className="font-medium text-neutral-800">
                                Infants
                              </span>
                              <span className="text-xs text-neutral-500 font-normal">
                                Ages 0-2
                              </span>
                            </div>
                            <div className="flex items-center justify-between w-28">
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestInfant(guestInfant - 1)}
                                disabled={disableInfant}
                              >
                                {" "}
                                -{" "}
                              </button>
                              <span>{guestInfant}</span>
                              <button
                                type="button"
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                                onClick={() => setGuestInfant(guestInfant + 1)}
                              >
                                {" "}
                                +{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                </Fade>
              </div>
            </div>
            <div className="px-4 py-3 bg-white border-t border-neutral-200  flex justify-between">
              <button
                type="button"
                className="underline font-semibold flex-shrink-0"
                onClick={resetValue}
              >
                Clear all
              </button>
              <button className="flex-shrink-0 px-4 py-2.5 cursor-pointer rounded-xl bg-dark-gold flex items-center justify-center text-neutral-50 focus:outline-none  relative z-20">
                <GrSearch className="text-neutral-50" />
                <span className="ml-2">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
