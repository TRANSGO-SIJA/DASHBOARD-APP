import React from "react";

import DateRangeSelector from "./date-range-selector";
import MonthSelector from "./month-selector";
import YearSelector from "./year-selector";
import InputSearch from "./input-search";
import InputType from "./input-type";

const YearAndMonthSelector = ({
  withDateRange = false,
  withSearch = false,
  withType = false,
}) => {
  return (
    <div className="flex items-center gap-[10px]">
      {withSearch && <InputSearch />}
      {withDateRange && <DateRangeSelector />}
      {withType && <InputType />}
      <MonthSelector />
      <YearSelector />
    </div>
  );
};

export default YearAndMonthSelector;
