import React from "react";
import './index.css'
const Card = (props) => {
  return (
    <div className="card-section">
      <a className="flex flex-col" href="/">
        <div className="relative flex-shrink-0 w-full aspect-w-5 aspect-h-4 aspect-h-4 sm:aspect-h-7 rounded-2xl overflow-hidden group">
          <img
            src={props.image}
            alt=""
            className={`object-cover w-full h-full rounded-2xl ${props.classes}`}
          />
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity" ></div>
        </div>
        <h4 className="mt-3 text-gray-900 font-normal text-lg">{props.title}</h4>
        <span className="block mt-2 text-sm text-gray-600">{props.properties}</span>
      </a>
    </div>
  );
};

export default Card;
