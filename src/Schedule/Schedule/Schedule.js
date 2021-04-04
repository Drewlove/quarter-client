import React, { useState } from "react";
import { COLLATE_SCHEDULE } from "../../Utilities/COLLATE_SCHEDULE";
import Department from "../Department/Department";
import EmptyList from "../../EmptyList/EmptyList";

function Schedule(props) {
  const [timePeriod, setTimePeriod] = useState("weekly");
  let schedule = [];

  const renderEmptyList = () => {
    return <EmptyList name="shift" url="/app/form/schedule/new" />;
  };

  const renderResults = () => {
    schedule = COLLATE_SCHEDULE(props.data[0]);
    let multiplier = timePeriod === "quarter" ? 13 : 1;
    Object.keys(schedule).forEach((key) => {
      schedule[key].cost *= multiplier;
    });
    return (
      <>
        <section className="schedule__header">
          <div className="schedule__total-wages">{renderTotalWages()}</div>
          <div className="schedule-row">
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
          </div>
        </section>
        <section className="schedule__holder">{renderSchedule()}</section>
      </>
    );
  };

  const renderTotalWages = () => {
    let totalCost = 0;
    Object.keys(schedule).forEach((key) => {
      totalCost += schedule[key].cost;
    });
    const timePeriodName = timePeriod === "week" ? "Weekly" : "Quarterly";
    return (
      <button
        onClick={() => handleClick()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <h2>
          {timePeriodName} Payroll: $
          {totalCost.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
      </button>
    );
  };

  const handleClick = () => {
    const newTimePeriod = timePeriod === "week" ? "quarter" : "week";
    setTimePeriod(newTimePeriod);
  };

  const handleMouseLeave = (e) => {
    document.activeElement.blur();
  };

  const renderSchedule = () => {
    return Object.keys(schedule).map((key) => {
      return (
        <Department
          key={key}
          row={schedule[key].row}
          cost={schedule[key].cost}
          deptName={key}
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
