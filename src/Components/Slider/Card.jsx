import React from "react";
const Card = (props) => {
  return (
    <div style={{ width: "230.4px", marginRight: "16px" }}>
      <a className="flex flex-col" href="#">
        <div className="relative flex-shrink-0 w-full aspect-w-5 aspect-h-4 aspect-h-4 sm:aspect-h-7 rounded-2xl overflow-hidden group">
          <img
            src={props.image}
            alt=""
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <h4>{props.title}</h4>
        <span>{props.properties}</span>
      </a>
    </div>
  );
};

export default Card;
