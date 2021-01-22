import React, { useState, useEffect } from "react";
import { COLLATE_SCHEDULE } from "../../Utilities/COLLATE_SCHEDULE";
import Department from "../Department/Department";

function Schedule(props) {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    // console.log(props.data[0]);
    setSchedule(COLLATE_SCHEDULE(props.data[0]));
  }, []);

  const renderDepartments = () => {
    return Object.keys(schedule).map((key) => {
      return <Department key={key} schedule={schedule[key]} deptName={key} />;
    });
  };

  return (
    <main className="main">
      <section className="schedule-row schedule-row_weekdays">
        <div className="schedule-row_weekdays__weekday">
          <h3>Mon</h3>
        </div>
        <div className="schedule-row_weekdays__weekday">
          <h3>Tue</h3>
        </div>
        <div className="schedule-row_weekdays__weekday">
          <h3>Wed</h3>
        </div>
        <div className="schedule-row_weekdays__weekday">
          <h3>Thu</h3>
        </div>
        <div className="schedule-row_weekdays__weekday">
          <h3>Fri</h3>
        </div>
        <div className="schedule-row_weekdays__weekday">
          <h3>Sat</h3>
        </div>
        <div className="schedule-row_weekdays__weekday">
          <h3>Sun</h3>
        </div>
      </section>
      <section className="schedule__holder">{renderDepartments()}</section>
    </main>
  );
}

export default Schedule;
