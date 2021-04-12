import React, { useState, useEffect } from "react";
import { COLLATE_SCHEDULE } from "../../Utilities/COLLATE_SCHEDULE";
import Department from "../Department/Department";
import EmptyList from "../../EmptyList/EmptyList";
import { useLocation } from "react-router-dom";

function Schedule(props) {
  const [timePeriod, setTimePeriod] = useState("quarter");
  let schedule = [];
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const renderEmptyList = () => {
    return <EmptyList name="shift" url="/app/form/schedule/new" />;
  };

  const renderResults = () => {
    schedule = COLLATE_SCHEDULE(props.data[0]);
    let totalScheduleCost = 0;
    let multiplier = timePeriod === "quarter" ? 13 : 1;
    schedule.forEach((key) => {
      let roleCost = key.cost * multiplier;
      key.cost = roleCost;
      totalScheduleCost += roleCost;
    });
    return (
      <>
        <section className="schedule__header">
          <div className="schedule__total-wages">
            {renderTotalWages(totalScheduleCost)}
          </div>
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

  const renderTotalWages = (totalScheduleCost) => {
    const timePeriodName = timePeriod === "week" ? "Weekly" : "Quarterly";
    return (
      <button
        onClick={(e) => handleClick(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <h2>
          {timePeriodName} Payroll: $
          {totalScheduleCost.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
      </button>
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newTimePeriod = timePeriod === "week" ? "quarter" : "week";
    setTimePeriod(newTimePeriod);
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    document.activeElement.blur();
  };

  const renderSchedule = () => {
    return schedule.map((key) => {
      return (
        <Department
          key={`${key.deptName}-${key.cost}`}
          row={key.row}
          cost={key.cost}
          deptName={key.deptName}
          multiplier={timePeriod}
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
