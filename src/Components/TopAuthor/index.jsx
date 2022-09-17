import React from 'react'
import img1 from '../../Assets/author/Image-1.90baa8cc883db8970fda.png'
import img2 from '../../Assets/author/Image-2.405c62ff9ad88c47e28c.png'
import img3 from '../../Assets/author/Image-3.f257bc3c2ce5ae3a57db.png'
import img4 from '../../Assets/author/Image-4.36899b28c72dc4bc41a9.png'
import img5 from '../../Assets/author/Image-5.b1088376a574bcedc983.png'
import img6 from '../../Assets/author/Image-6.f9fbe7060b79c99c7a60.png'
import img7 from '../../Assets/author/Image-7.c88583919650f636b191.png'
import img8 from '../../Assets/author/Image-8.5ae85a64aab1965e33a5.png'
import img9 from '../../Assets/author/Image-9.d879028d45de09c9ca3b.png'
import img10 from '../../Assets/author/Image-10.93048ca791076288cf69.png'

import './index.css'
import {AiFillStar} from 'react-icons/ai'
import AuthorCard from './AuthorCard'

const author = [
    {
        id: "1",
        color: "red",
        image: img1,
        name: "Truelock Alric",
        city: "New York",
        stars: "4.9"
    },
    {
        id: "2",
        color: 'blue',
        image: img2,
        name: "Birrell Chariot",
        city: "New York",
        stars: "4.9"
    },
    {
        id: "3",
        color: 'green',
        image: img3,
        name: "Foulcher Nathanil",
        city: "New York",
        stars: "4.9"
    },
    {
        id: "4",
        image: img4,
        name: "Falconar Agnes",
        city: "New York",
        stars: "4.9"
    },
    {
        id: "5",
        image: img5,
        name: "Tousy Vita",
        city: "New York",
        stars: "4.9"
    },
    {
        id: "6",
        image: img6,
        name: "Friar Donna",
        city: "New York",
        stars: "4.9"
    },
    {
        id: "7",
        image: img7,
        name: "Royal Sergei",
        city: "New York",
        stars: "4.9"
    },
    {
        id: "8",
        image: img8,
        name: "Sleita Claudetta",
        city: "New York",
        stars: "4.9"
    },
    {
        id: "9",
        image: img9,
        name: "Pilifant Vern",
        city: "New York",
        stars: "4.9"
    },
    {
        id: "10",
        image: img10,
        name: "Fones Mimi",
        city: "New York",
        stars: "4.9"
    },
]
const TopAuthor = () => {
  return (
    <div className='container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 bg-orange-50'>
        <div className="relative py-16">
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-gray-900 dark:text-gray-50">
                <div className="text-center w-full max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Top 10 author of the month</h2>
                    <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-gray-500 dark:text-gray-400">Rating based on the customer reviews</span>
                </div>
            </div>

            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    author.map((item)=>{
                        return <AuthorCard {...item} />
                    })
                }
            </div>
            <div className="mt-16 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-5">
                <button className='relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 font-medium border bg-white border-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0'>Show me more</button>

                <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Become a host</button>
            </div>
        </div>
    </div>
  )
}

export default TopAuthor