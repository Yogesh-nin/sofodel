import React from 'react'
import './index.css'
const Navbar = () => {
  return (
    <div className="nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg shadow-sm dark:border-b dark:border-neutral-700">
        <div className="relative z-10 ">
            <div className='px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center'>
                <div className='hidden md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10'>
                    <a href="" className='inline-block text-primary -6000 focus:outline-none focus:ring-0 w-24'>.fis</a>

                    <ul className='hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative'>
                        <li className='nav-list-item'><a href="nav-link inline-flex items-center py-2 px-4 xl:px-5 rounded-full">Home</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar