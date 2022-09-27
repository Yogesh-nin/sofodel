import React, {useState, useEffect, useRef} from "react";

const GuestDropdown = ({changeGuest, hide}) => {

    const [guestAdult, setGuestAdult] = useState(0)
    const [guestChild, setGuestChild] = useState(0)
    const [guestInfant, setGuestInfant] = useState(0)

    const [disableAdult, setDisableAdult] = useState(true)
    const [disableChild, setDisableChild] = useState(true)
    const [disableInfant, setDisableInfant] = useState(true)



    useEffect(() => {
        if(guestAdult <= 1){
            setDisableAdult(true)
        }
        else{
            setDisableAdult(false)
        }
        if(guestChild <= 0){
            setDisableChild(true)
        }
        else{
            setDisableChild(false)
        }
        if(guestInfant <= 0){
            setDisableInfant(true)
        }
        else{
            setDisableInfant(false)
        }

        changeGuest(guestAdult + guestChild + guestInfant);
    }, [guestAdult, guestChild, guestInfant]);

    const refOne = useRef(null);

    // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape")
      hide()
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      hide()
    }
  };

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);



    
  return (
    <div className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl opacity-100 translate-y-0" ref={refOne} >
    
      <div className="flex items-center justify-between space-x-5 w-full">
        <div className="flex flex-col">
          <span className="font-medium text-neutral-800">
            Adults
          </span>
          <span className="text-xs text-neutral-500 font-normal">
            Ages 13 or above
          </span>
        </div>
        <div className="flex items-center justify-between w-28">
            <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default" onClick={()=> setGuestAdult(guestAdult-1) } disabled={disableAdult}>
              {" "}
              -{" "}
            </button>
            <span>{guestAdult}</span>
            <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default" onClick={()=> setGuestAdult(guestAdult+1)}>
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
            <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default" onClick={()=> setGuestChild(guestChild-1) } disabled={disableChild}>
              {" "}
              -{" "}
            </button>
            <span>{guestChild}</span>
            <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default" onClick={()=> setGuestChild(guestChild+1)}>
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
            <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default" onClick={()=> setGuestInfant(guestInfant-1) } disabled={disableInfant}>
              {" "}
              -{" "}
            </button>
            <span>{guestInfant}</span>
            <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default" onClick={()=> setGuestInfant(guestInfant+1)}>
              {" "}
              +{" "}
            </button>
          </div>
      </div>
      </div>
  );
};

export default GuestDropdown;
