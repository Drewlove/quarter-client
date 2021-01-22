import React from "react";
import { Link } from "react-router-dom";
import CellButton from "../CellBlank/CellBlank";
import CellShift from "../CellShift/CellShift";

function RowRole(props) {
  const renderRow = () => {
    return props.row.map((key) => {
      return key.isShift ? (
        <CellShift key={key.id} shift={key.shift} id={key.id} />
      ) : (
        <CellButton key={key.id} />
      );
    });
  };

  const getUrl = () => {
    return;
  };

  return (
    <>
      <Link
        className="schedule-row schedule-row_role"
        to={`/form/schedule/${props.id}`}
      >
        {renderRow()}
      </Link>
    </>
  );
}

export default RowRole;
