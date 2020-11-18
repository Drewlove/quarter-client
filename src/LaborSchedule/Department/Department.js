import React, { useState, useEffect } from "react";

import DepartmentRow from "../DepartmentRow/DepartmentRow";
import { CapitalizeAllWords } from "../../Utilities/UtilityFunctions";

function Department(props) {

  const renderSchedule = () => {
    return Object.keys(props.schedule).map(key =>{
      if(key !== 'cost') return <DepartmentRow key={key} rowName={key} row={props.schedule[key]}/>
    })
  }

  return (
    <>
    {console.log(props)}
      <section className="schedule-row">
        <div className="schedule-department">
          <h4 className="schedule-text_department">
            {CapitalizeAllWords(props.deptName)} - ${props.schedule.cost}
          </h4>
        </div>
      </section>
      {renderSchedule()}
    </>
  );
}

export default Department;
