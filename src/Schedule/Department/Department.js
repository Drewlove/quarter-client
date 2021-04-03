import React from "react";
import RowRole from "../RowRole/RowRole";

function Department(props) {
  const renderSchedule = () => {
    return Object.keys(props.row).map((key) => {
      return (
        <RowRole
          key={key}
          row={props.row[key]}
          id={key}
          row_id={props.row[key].row_id}
        />
      );
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
              maximumFractionDigits: 2,
            })}
          </h4>
        </div>
      </div>
      {renderSchedule()}
    </>
  );
}

export default Department;
