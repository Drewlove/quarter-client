import React from "react";
import CellButton from "../CellBlank/CellBlank";
import CellShift from "../CellShift/CellShift";

function RowRole(props) {
  const renderRow = (row) => {
    return row.map((cellData) => {
      return cellData.isShift ? (
        <CellShift key={cellData.id} shift={cellData} />
      ) : (
        <CellButton key={cellData.id} />
      );
    });
  };

  return (
    <>
      <section className="schedule-row schedule-row_role">{renderRow(props.row)}</section>
    </>
  );
}

export default RowRole;
