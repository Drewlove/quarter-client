import React from "react";
import {
  ConvertNumToTimeStr,
  CapitalizeAllWords,
} from "../../Utilities/UtilityFunctions";

function CellShift(props) {
  const getShiftSchedule = () => {
    let start = ConvertNumToTimeStr(props.shift.start);
    let end = ConvertNumToTimeStr(props.shift.end);
    return `${start}-${end}`;
  };

  const renderNumPeople = () => {
    let text = ""; 
    props.shift.people === 1 ? text = "1X" : text = `${props.shift.people}X` 
    return text; 
  }

  return (
    <button className="schedule-row__cell schedule-row__cell_shift">
      <p className="schedule-text_shift schedule-text_shift-role">
        <b>{CapitalizeAllWords(props.shift.role)}</b>
      </p>
  <p className="schedule-text_shift schedule-text_shift-people">{renderNumPeople()}</p>
      <p className="schedule-text_shift schedule-text_shift-hours">{getShiftSchedule()}</p>
    </button>
  );
}

export default CellShift;
