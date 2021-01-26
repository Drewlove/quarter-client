import React from "react";
import RowRole from "../RowRole/RowRole";
import { CapitalizeAllWords } from "../../Utilities/UtilityFunctions";

function Department(props) {
  const renderSchedule = () => {
    return Object.keys(props.schedule.shifts).map((key) => {
      return <RowRole key={key} row={props.schedule.shifts[key]} id={key} />;
    });
  };

  return (
    <>
      <div className="schedule-row schedule-row_department">
        <div className="schedule-department">
          <h4 className="schedule-text_department">
            {CapitalizeAllWords(props.deptName)} - $
            {parseFloat(props.schedule.cost).toFixed(2)}
          </h4>
        </div>
      </div>
      {renderSchedule()}
    </>
  );
}

export default Department;
