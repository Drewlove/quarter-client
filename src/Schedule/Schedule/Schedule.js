import React from "react";
import { COLLATE_SCHEDULE } from "../../Utilities/COLLATE_SCHEDULE";
import Department from "../Department/Department";
import EmptyList from "../../EmptyList/EmptyList";

function Schedule(props) {
  const renderEmptyList = () => {
    return <EmptyList name="shift" url="/form/schedule/new" />;
  };

  let schedule = [];

  const renderResults = () => {
    schedule = COLLATE_SCHEDULE(props.data[0]);
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
        <section className="schedule__total-wages">
          {renderTotalWages()}
        </section>
        <section className="schedule__holder">{renderSchedule()}</section>
      </>
    );
  };

  const renderTotalWages = () => {
    let totalCost = 0;
    schedule.forEach((key) => {
      totalCost += key.cost;
    });
    return (
      <h2>
        Total Payroll: $
        {totalCost.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
      </h2>
    );
  };

  const renderSchedule = () => {
    return schedule.map((key) => {
      return (
        <Department
          key={key.deptName}
          shifts={key.shifts}
          cost={key.cost}
          deptName={key.deptName}
        />
      );
    });
  };

  return (
    <main className="main">
      {props.data[0].length === 0 ? renderEmptyList() : renderResults()}
    </main>
  );
}

export default Schedule;
