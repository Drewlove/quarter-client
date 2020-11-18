import React from "react";
import DepartmentRowCellButton from "../DepartmentRowCellButton/DepartmentRowCellButton";
import DepartmentRowCellShift from "../DepartmentRowCellShift/DepartmentRowCellShift";

function DepartmentRow(props) {
  const renderRow = (row) => {
    return row.map((cellData) => {
      return cellData.role ? (
        <DepartmentRowCellShift key={cellData.id} shift={cellData} />
      ) : (
        <DepartmentRowCellButton key={cellData.id} />
      );
    });
  };

  return (
    <>
      <section className="schedule-row">{renderRow(props.row)}</section>
    </>
  );
}

export default DepartmentRow;
