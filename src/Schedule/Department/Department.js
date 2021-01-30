import React from "react";
import RowRole from "../RowRole/RowRole";

function Department(props) {
  const renderSchedule = () => {
    return Object.keys(props.shifts).map((key) => {
      return <RowRole key={key} row={props.shifts[key]} id={key} />;
    });
  };

  return (
    <>
      <div className="schedule-row schedule-row_department">
        <div className="schedule-department">
          <h4 className="schedule-text_department">
            {props.deptName} - $
            {props.cost.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </h4>
        </div>
      </div>
      {renderSchedule()}
    </>
  );
}

export default Department;
