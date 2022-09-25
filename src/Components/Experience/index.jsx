import React from 'react'
import PlaceCard from './PlaceCard';
import img1 from '../../Assets/StayTrails/Experience/38d6b5ea-abcc-4876-acb4-e5b79586c37c.jpeg'
import img2 from '../../Assets/StayTrails/Experience/pexels-photo-1094794.jpeg'
import img3 from '../../Assets/StayTrails/Experience/pexels-photo-1637451.jpeg'
import img4 from '../../Assets/StayTrails/Experience/pexels-photo-2385654.jpeg'
import img5 from '../../Assets/StayTrails/Experience/pexels-photo-3061217.jpeg'
import img6 from '../../Assets/StayTrails/Experience/pexels-photo-4253300.jpeg'
import img7 from '../../Assets/StayTrails/Experience/pexels-photo-5560867.jpeg'
import img8 from '../../Assets/StayTrails/Experience/pexels-photo-6455686.jpeg'
import { Fade } from 'react-awesome-reveal';
const experienceList = [
    {
        images: [img1, img1, img1, img1],
        title: "Generate Interactive Markets",
        location: "2 Warner Alley",
        rate: "26",
        star: "4.8",
        total: "28",
      },
      {
        images: [img2, img2, img2, img2],
        title: "Deliver Dynamic E-Service",
        location: "620 Clove Park",
        rate: "250",
        star: "4.4",
        total: "198",
      },
      {
        images: [img3, img3, img3, img3],
        title: "Productize Holistic Deliverables",
        location: "5 ButterField Avenue",
        rate: "278",
        star: "3.6",
        total: "16",
      },
      {
        images: [img4, img4, img4, img4],
        beds: "7",
        title: "Deploy Integrated Solution",
        location: "1120 Lawn Park",
        rate: "40",
        star: "4.8",
        total: "34",
      },
      {
        images: [img5, img5, img5, img5],
        beds: "3",
        title: "Seize Killer E-commerce",
        location: "39 dal Sol Lane",
        rate: "147",
        star: "3.4",
        total: "340",
      },
      {
        images: [img6, img6, img6, img6],
        title: "Evolve virtual models",
        location: "55872 Kingston drive",
        rate: "90",
        star: "3.8",
        total: "508",
      },
      {
        images: [img7, img7, img7, img7],
        title: "Genearte Proactive ROI",
        location: "9 Jennifer Way",
        rate: "282",
        star: "3",
        total: "481",
      },
      {
        images: [img8, img8, img8, img8],
        title: "Aggregate Out-Of-The-Box channels",
        location: "5 Aberg Place",
        rate: "79",
        star: "3.9",
        total: "188",
      },
]



const Experience = () => {

  
  return (
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
      <div className="relative py-16">
        <div className="flex flex-col mb-8">
          <div className="flex flex-col relative sm:flex-row sm:items-end justify-between mb-10 md:mb-12 ">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Popular Experiences
              </h2>
              
              <span className="block text-neutral-500 mt-3">
                233 experiences
                <span className='mx-2'>·</span>
                Aug 12 - 18 
                <span className='mx-2'>·</span>
                2 Guests

              </span>
            </div>
          </div>
        </div>
        <Fade cascade damping={0.1} triggerOnce='true'>
        <ul className="hidden sm:grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
          {experienceList.map((places) => {
            return <PlaceCard {...places} aspect="aspect-square" />
          })}
        </ul>
        </Fade>

        {/* No animation in small screens */}

        <div className="sm:hidden grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
          {experienceList.map((places) => {
            return <PlaceCard {...places} aspect="aspect-square" />
          })}
        </div>

      </div>
    </div>
  )
}

export default Experience