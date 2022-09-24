import React from "react";
import './index.css'
const Card = (props) => {
  return (
    <div className="card-section">
      <a className="flex flex-col" href="/">
        <div className="relative flex-shrink-0 w-full aspect-w-5 aspect-h-4  sm:aspect-h-7 rounded-2xl overflow-hidden group justify-center">
          <div className="">
            <img
              src={props.image}
              alt=""
              className={`object-cover w-full h-full rounded-2xl ${props.classes}`}
            />
          </div>
          <span className="hover-element absolute inset-0 bg-black opacity-0 transition-opacity overflow-hidden"></span>
        </div>
        <h4 className="mt-3 text-gray-900 font-normal text-lg">{props.title}</h4>
        <span className="block mt-2 text-sm text-gray-600">{props.properties}</span>
      </a>
    </div>
  );
};

export default Card;

//opacity-0 group-hover:opacity-100 absolute inset-0 bg-black 
