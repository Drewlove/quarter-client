import React, {useState, useEffect} from "react";
import {CollateSchedule} from '../../Utilities/ScheduleAlgo'
import Department from '../Department/Department'; 

function LaborSchedule() {
  const [schedule, setSchedule] = useState({});

  const shifts = [
    {
      day: 5,
      department: "bake off",
      role: "kettle",
      start: 5,
      end: 9,
      people: 1,
      hourly: 12,
    },
    {
      day: 5,
      department: "bake off",
      role: "kettle",
      start: 4,
      end: 8,
      people: 1,
      hourly: 12,
    },
    {
      day: 6,
      department: "bake off",
      role: "kettle",
      start: 4,
      end: 8,
      people: 1,
      hourly: 12,
    },
    {
      day: 4,
      department: "bake off",
      role: "kettle",
      start: 4,
      end: 8,
      people: 1,
      hourly: 12,
    },
    {
      day: 3,
      department: "bake off",
      role: "kettle",
      start: 4,
      end: 8,
      people: 1,
      hourly: 12,
    },
    {
      day: 3,
      department: "bake off",
      role: "starters",
      start: 12,
      end: 13.5,
      people: 1,
      hourly: 12,
    },
    {
      day: 5,
      department: "bake off",
      role: "starters",
      start: 12,
      end: 13.5,
      people: 1,
      hourly: 12,
    },
    {
      day: 5,
      department: "service",
      role: "line",
      start: 8,
      end: 14,
      people: 2,
      hourly: 12
    }, 
    {
      day: 4,
      department: "service",
      role: "line",
      start: 8,
      end: 14,
      people: 2,
      hourly: 12
    },
      {
      day: 4,
      department: "service",
      role: "service leader",
      start: 8,
      end: 14,
      people: 2,
      hourly: 12
    }
  ];

  useEffect(() => {
    setSchedule(CollateSchedule(shifts));
  }, []);

  const renderDepartments = () => {
    return Object.keys(schedule).map(key => {
      return(
        <Department key={key} schedule={schedule[key]} deptName={key} />
      ) 
    })
  }

  return (
    <main className="main">
      <section className="schedule-row schedule-row_days">
        <div className="schedule-row__schedule-cell schedule-row__schedule-cell_days">
          <h3>Mon</h3>
        </div>
        <div className="schedule-row__schedule-cell schedule-row__schedule-cell_days">
          <h3>Tue</h3>
        </div>
        <div className="schedule-row__schedule-cell schedule-row__schedule-cell_days">
          <h3>Wed</h3>
        </div>
        <div className="schedule-row__schedule-cell schedule-row__schedule-cell_days">
          <h3>Thu</h3>
        </div>
        <div className="schedule-row__schedule-cell schedule-row__schedule-cell_days">
          <h3>Fri</h3>
        </div>
        <div className="schedule-row__schedule-cell schedule-row__schedule-cell_days">
          <h3>Sat</h3>
        </div>
        <div className="schedule-row__schedule-cell schedule-row__schedule-cell_days">
          <h3>Sun</h3>
        </div>
      </section>
      {renderDepartments()}
    </main>
  );
}

export default LaborSchedule;
