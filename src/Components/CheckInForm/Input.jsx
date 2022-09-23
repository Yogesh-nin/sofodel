import React from "react";
import './Datepicker.css'
const Input = ({ onChange, placeholder, value, id, onClick }) => {
    console.log("placeholder " + placeholder)
  return (
    
    <input
      type="text"
      className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-gray-300 xl:text-lg font-semibold placeholder-gray-800 truncate"
      placeholder={placeholder}
      onChange={onChange}
      value={value ? value: "Date"}
      id={id}
      onClick={onClick}
      readOnly
    />
  );
};

export default Input;
