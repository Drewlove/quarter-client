import React from "react";
import { Link } from "react-router-dom";
import CellBlank from "../CellBlank/CellBlank";
import CellShift from "../CellShift/CellShift";

function RowRole(props) {
  const renderRow = () => {
    return props.row.shifts.map((key) => {
      return key.isShift ? (
        <CellShift key={key.id} shift={key.shift} />
      ) : (
        <CellBlank key={key.id} />
      );
    });
  };

  return (
    <div className="schedule-row_role-container">
      <Link
        className="schedule-row schedule-row_role"
        to={`/app/form/schedule/${props.row_id}`}
      >
        {renderRow()}
      </Link>
    </div>
  );
}

export default RowRole;
