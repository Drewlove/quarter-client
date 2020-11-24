import React from "react";
import RowRole from "../RowRole/RowRole";
import { CapitalizeAllWords } from "../../Utilities/UtilityFunctions";

function Department(props) {

  const renderSchedule = () => {
    return Object.keys(props.schedule).map(key =>{
      if(key !== 'cost') return <RowRole key={key} rowName={key} row={props.schedule[key]}/>
    })
  }

  return (
    <>
      <section className="schedule-row schedule-row_department">
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
