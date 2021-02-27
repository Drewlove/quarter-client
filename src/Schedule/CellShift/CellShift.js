import React from "react";
import { ConvertNumToTimeStr } from "../../Utilities/UtilityFunctions";

function CellShift(props) {
  const getShiftSchedule = () => {
    let start = ConvertNumToTimeStr(props.shift.shift_start);
    let end = ConvertNumToTimeStr(props.shift.shift_end);
    return `${start}-${end}`;
  };

  const renderNumPeople = () => {
    return props.shift.people === 1
      ? `${props.shift.people} person`
      : `${props.shift.people} people`;
    // return `${props.shift.people}X`;
  };

  return (
    <div className="schedule-row__cell schedule-row__cell_shift">
      <p className="schedule-text_shift schedule-text_shift-role">
        <b>{props.shift.role_name}</b>
      </p>
      <p className="schedule-text_shift schedule-text_shift-people">
        {renderNumPeople()}
      </p>
      <p className="schedule-text_shift schedule-text_shift-hours">
        {getShiftSchedule()}
      </p>
    </div>
  );
}

export default CellShift;
