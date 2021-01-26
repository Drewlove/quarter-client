import React from "react";
import { COLLATE_SCHEDULE } from "../../Utilities/COLLATE_SCHEDULE";
import Department from "../Department/Department";
import EmptyList from "../../EmptyList/EmptyList";

function Schedule(props) {
  const renderEmptyList = () => {
    return <EmptyList name="shift" url="/form/schedule/new" />;
  };

  const renderResults = () => {
    return (
      <>
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
        <section className="schedule__holder">{renderSchedule()}</section>
      </>
    );
  };

  const renderSchedule = () => {
    let schedule = COLLATE_SCHEDULE(props.data[0]);
    // console.log(schedule.kitchen);
    return Object.keys(schedule).map((key) => {
      return <Department key={key} schedule={schedule[key]} deptName={key} />;
    });
  };

  return (
    <main className="main">
      {props.data[0].length === 0 ? renderEmptyList() : renderResults()}
    </main>
  );
}

export default Schedule;
