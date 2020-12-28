import React, { useState, useEffect } from "react";
import { CollateSchedule } from "../../Utilities/ScheduleAlgo";
import Department from "../Department/Department";

function LaborSchedule() {
  const [schedule, setSchedule] = useState({});

  const shifts = [
    {
      id: 1,
      day: 3,
      department: "bake off",
      role: "kettle",
      start: 4,
      end: 8,
      people: 2,
      hourly: 12,
      rowId: 1,
    },
    {
      id: 2,
      day: 4,
      department: "bake off",
      role: "kettle",
      start: 4,
      end: 8,
      people: 2,
      hourly: 12,
      rowId: 1,
    },
    {
      id: 3,
      day: 5,
      department: "bake off",
      role: "kettle",
      start: 4,
      end: 8,
      people: 2,
      hourly: 12,
      rowId: 1,
    },
    {
      id: 4,
      day: 6,
      department: "bake off",
      role: "kettle",
      start: 4,
      end: 8,
      people: 2,
      hourly: 12,
      rowId: 1,
    },
    {
      id: 5,
      day: 3,
      department: "bake off",
      role: "ovens",
      start: 5,
      end: 9,
      people: 1,
      hourly: 12,
      rowId: 2,
    },
    {
      id: 6,
      day: 4,
      department: "bake off",
      role: "ovens",
      start: 5,
      end: 9,
      people: 1,
      hourly: 12,
      rowId: 2,
    },
    {
      id: 7,
      day: 5,
      department: "bake off",
      role: "ovens",
      start: 5,
      end: 9,
      people: 1,
      hourly: 12,
      rowId: 2,
    },
    {
      id: 8,
      day: 6,
      department: "bake off",
      role: "ovens",
      start: 5,
      end: 9,
      people: 1,
      hourly: 12,
      rowId: 2,
    },

    {
      id: 9,
      day: 2,
      department: "production",
      role: "doughs",
      start: 12,
      end: 15,
      people: 1,
      hourly: 12,
      rowId: 3,
    },
    {
      id: 10,
      day: 4,
      department: "production",
      role: "doughs",
      start: 12,
      end: 15,
      people: 1,
      hourly: 12,
      rowId: 3,
    },
    {
      id: 11,
      day: 2,
      department: "production",
      role: "roll and shape",
      start: 12,
      end: 15,
      people: 3,
      hourly: 12,
      rowId: 4,
    },
    {
      id: 12,
      day: 4,
      department: "production",
      role: "roll and shape",
      start: 12,
      end: 15,
      people: 3,
      hourly: 12,
      rowId: 4,
    },
    {
      id: 13,
      day: 2,
      department: "production",
      role: "lead, role and shape",
      start: 12,
      end: 15.5,
      people: 1,
      hourly: 15,
      rowId: 5,
    },
    {
      id: 14,
      day: 4,
      department: "production",
      role: "lead, role and shape",
      start: 12,
      end: 15.5,
      people: 1,
      hourly: 15,
      rowId: 5,
    },

    {
      id: 15,
      day: 3,
      department: "service",
      role: "service",
      start: 7,
      end: 15,
      people: 3,
      hourly: 12,
      rowId: 6,
    },
    {
      id: 16,
      day: 4,
      department: "service",
      role: "service",
      start: 7,
      end: 15,
      people: 3,
      hourly: 12,
      rowId: 6,
    },
    {
      id: 17,
      day: 5,
      department: "service",
      role: "service",
      start: 7,
      end: 15,
      people: 3,
      hourly: 12,
      rowId: 6,
    },
    {
      id: 18,
      day: 6,
      department: "service",
      role: "service",
      start: 7,
      end: 15,
      people: 3,
      hourly: 12,
      rowId: 6,
    },
    {
      id: 19,
      day: 3,
      department: "service",
      role: "service lead",
      start: 7,
      end: 15,
      people: 1,
      hourly: 15,
      rowId: 7,
    },
    {
      id: 20,
      day: 4,
      department: "service",
      role: "service lead",
      start: 7,
      end: 15,
      people: 1,
      hourly: 15,
      rowId: 7,
    },
    {
      id: 21,
      day: 5,
      department: "service",
      role: "service lead",
      start: 7,
      end: 15,
      people: 1,
      hourly: 15,
      rowId: 7,
    },
    {
      id: 22,
      day: 6,
      department: "service",
      role: "service lead",
      start: 7,
      end: 15,
      people: 1,
      hourly: 15,
      rowId: 7,
    },
  ];

  useEffect(() => {
    console.log("setting schedule");
    setSchedule(CollateSchedule(shifts));
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
      {renderDepartments()}
    </main>
  );
}

export default LaborSchedule;
