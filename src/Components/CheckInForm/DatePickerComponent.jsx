import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './Datepicker.css'
import Input from "./Input";
const DatePickerComponent = () => {
const [date, setDate]  = useState("")
  return (
      <DatePicker
      className="w-full sm:min-w-[340px] max-w-sm"
      wrapperClassName="datePicker"
       dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        selected={date}
        onChange={(date) => setDate(date)}
        customInput={<Input />}
      />
  );
};

export default DatePickerComponent;
