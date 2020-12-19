import React from "react";
import CellButton from "../CellBlank/CellBlank";
import CellShift from "../CellShift/CellShift";

function RowRole(props) {
  const renderRow = (row) => {
    return row.map((key) => {
      return key.isShift ? (
        <CellShift key={key.id} shift={key} id={key.id} />
      ) : (
        <CellButton key={key.id} />
      );
    });
  };

  return (
    <>
      <section className="schedule-row schedule-row_role">
        {renderRow(props.row)}
      </section>
    </>
  );
}

export default RowRole;
