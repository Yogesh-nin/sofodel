import { Input } from "postcss";
import React, { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePicker = () => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white top-full mt-3 py-2 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl opacity-100 translate-y-0">
      <DateRange
        onChange={(item) => setDates([item.selection])}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={dates}
        months={1}
        direction="horizontal"
        className="calendarElement"
        retainEndDateOnFirstSelection={true}
        customInput={<Input />}
      />
    </div>
  );
};

export default DateRangePicker;
