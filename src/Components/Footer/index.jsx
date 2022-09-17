import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { RiFacebookBoxLine, RiInstagramLine, RiTwitterFill, RiYoutubeLine } from 'react-icons/ri'
import './index.css'
const Footer = () => {
  return (
    <div className='relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700'>
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
            <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
                <div className="col-span-2 md:col-span-1">
                    <a href="" className="inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24">
                    <div className="flex items-end">
                    <FaMapMarkerAlt size={42} className="text-indigo-600" /> 
                    <span className="font-medium text-2xl md:text-4xl text-gray-900 font-bold">.fis</span>
                  </div>
                    </a>
                </div>
                <div className="col-span-2 flex items-center md:col-span-3">
                    <div className='social-links flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start'>
                        <a href="#" className='flex items-center text-2xl my-2 hover:text-black leading-none space-x-2'><RiFacebookBoxLine className='icon mr-2'/> <span className="hidden md:block">Facebook</span></a>
                        <a href="#" className='flex items-center text-2xl  my-2 text-neutral-700 hover:text-black leading-none space-x-2'><RiTwitterFill className='icon mr-2'/> <span className="hidden md:block">Twitter</span></a>
                        <a href="#" className='flex items-center  my-2 text-2xl text-neutral-700 hover:text-black leading-none space-x-2'><RiYoutubeLine className='icon mr-2'/> <span className="hidden md:block"> YouTube</span></a>
                        <a href="#" className='flex items-center text-2xl text-neutral-700 hover:text-black leading-none space-x-2 my-2'><RiInstagramLine className='icon mr-2'/> <span className="hidden md:block">Instagram</span></a>
                    </div>
                </div>
            </div>
            <div className="text-sm">
                <h2 className='font-semibold text-neutral-700 text-black'>Get started</h2>
                <ul className='mt-5 space-y-4'>
                    <li>
                        <a href="#" className='dark:hover:text-white footer-links'>Installation</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Release Notes</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Upgrade Guide</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Browser Support</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Editor Support</a>
                    </li>
                </ul>
            </div>
            <div className="text-sm">
                <h2 className='font-semibold text-neutral-700 dark:text-neutral-200 text-black'>Explore</h2>
                <ul className='mt-5 space-y-4'>
                    <li>
                        <a href="#" className=' footer-links text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white'>Design Features</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Prototyping</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Design System</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Pricing</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Security</a>
                    </li>
                </ul>
            </div>
            <div className="text-sm">
                <h2 className='font-semibold text-neutral-700 dark:text-neutral-200 text-black'>Resources</h2>
                <ul className='mt-5 space-y-4'>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Best practices</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Support</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Developers</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Learn Design</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Release</a>
                    </li>
                </ul>
            </div>
            <div className="text-sm">
                <h2 className='font-semibold text-neutral-700 dark:text-neutral-200 text-black'>Community</h2>
                <ul className='mt-5 space-y-4'>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Discussion Forums</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Code of Conduct</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Community Resources</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Contributing</a>
                    </li>
                    <li>
                        <a href="#" className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white footer-links'>Concurrent mode</a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Footer