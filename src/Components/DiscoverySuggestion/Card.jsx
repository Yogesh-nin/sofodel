import React from "react";
import './index.css'
const Card = (props) => {
  return (
    <div className="discovery-card-section">
      <a className="flex flex-col" href="#">
        <div className="relative flex-shrink-0 w-full aspect-w-5 aspect-h-4 aspect-h-4 sm:aspect-h-7 rounded-2xl overflow-hidden group">
          <img
            src={props.image}
            alt=""
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div className="text-center mt-4 px-2 truncate">

            <h4 className="text-base text-black sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">{props.title}</h4>
            <span className="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">{props.properties}</span>
        </div>
      </a>
    </div>
  );
};

export default Card;
