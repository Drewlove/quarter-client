import React from "react";
import { Link } from "react-router-dom";
import CellBlank from "../CellBlank/CellBlank";
import CellShift from "../CellShift/CellShift";

function RowRole(props) {
  const renderRow = () => {
    return props.row.map((key) => {
      return key.isShift ? (
        <CellShift key={key.id} shift={key.shift} id={key.id} />
      ) : (
        <CellBlank key={key.id} />
      );
    });
  };

  return (
    <div className="schedule-row_role-container">
      <Link
        className="schedule-row schedule-row_role"
        to={`/form/schedule/${props.id}`}
      >
        {renderRow()}
      </Link>
    </div>
  );
}

export default RowRole;
