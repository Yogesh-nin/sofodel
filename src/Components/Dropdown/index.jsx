import React from 'react'

const Dropdown = () => {
  return (
    <div  id="dropdown" className='hidden sub-menu absolute transform z-10 w-56 pt-3 left-0 opacity-100 translate-y-0'>
        <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
            <li className="px-2">
                <a href="" className="flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 !font-medium  dark:!text-neutral-100">Online Booking</a>
            </li>
            <li className="px-2">
                <a href="" className="flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 !font-medium  dark:!text-neutral-100">Online Booking</a>
            </li>
            <li className="px-2">
                <a href="" className="flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 !font-medium  dark:!text-neutral-100">Online Booking</a>
            </li>
        </ul>
    </div>
  )
}

export default Dropdown