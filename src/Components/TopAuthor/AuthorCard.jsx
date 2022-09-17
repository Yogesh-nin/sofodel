import React from "react";

import img1 from '../../Assets/author/Image-1.90baa8cc883db8970fda.png'
import './index.css'
import {AiFillStar} from 'react-icons/ai'

const AuthorCard = (props) => {
  return (
    <a
      href=""
      className="author-card relative flex flex-col bg-white rounded-2xl items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7 "
    >
        {
            props.color && (
                <span className={`inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute left-3 top-3 text-${props.color}-800 bg-${props.color}-100  absolute left-3 top-3`}>
        #{props.id}
      </span>
            )
        }
      
      <div className="relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-20 h-20 text-2xl ring-1 ring-white dark:ring-gray-900">
        <img
          src={props.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="mt-3">
        <h2 className="text-base font-medium dark:text-gray-900">
            {props.name}
        </h2>
        <span className="block mt-1.5 text-sm text-gray-500 dark:text-gray-400">
          {props.city}
        </span>
      </div>
      <div className="py-2 px-5 mt-4 bg-gray-100 rounded-full flex items-center justify-center text-sm ">
        {props.stars} &nbsp;
        <AiFillStar className=" star" />
      </div>
    </a>
  );
};

export default AuthorCard;
