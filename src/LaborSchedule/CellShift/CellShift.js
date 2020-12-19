import React from "react";
import { Link } from "react-router-dom";
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
    return `${props.shift.people}X`;
  };

  const getUrl = () => {
    let id = props.shift.id;
    let url = `/form/schedule/${id}`;
    return url;
  };

  return (
    <Link to={getUrl()} className="schedule-row__cell schedule-row__cell_shift">
      <p className="schedule-text_shift schedule-text_shift-role">
        <b>{CapitalizeAllWords(props.shift.role)}</b>
      </p>
      <p className="schedule-text_shift schedule-text_shift-people">
        {renderNumPeople()}
      </p>
      <p className="schedule-text_shift schedule-text_shift-hours">
        {getShiftSchedule()}
      </p>
    </Link>
  );
}

export default CellShift;
