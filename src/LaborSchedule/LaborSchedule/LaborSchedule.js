import React, {useState, useEffect} from "react";
import { nanoid } from "nanoid";
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
    setSchedule(collateSchedule(shifts));
  }, []);

  const collatedSchedule = {};
  let counter = 0;

  const collateSchedule = (shifts) => {
    shifts.forEach((shift) => {
      if (!collatedSchedule[shift.department]) makeNewDeptRowShift(shift, shift.role);
      else if (collatedSchedule[shift.department]) manageNewShift(shift);
    });
    return collatedSchedule;
  };

  function manageNewShift(shift) {
    sumShiftCost(shift);
    if (!collatedSchedule[shift.department][shift.role]) {
      makeNewRow(shift.department, shift.role);
      addShift(shift.department, shift.role, shift);
    } else if (!collatedSchedule[shift.department][shift.role][shift.day].isShift) {
      addShift(shift.department, shift.role, shift);
    } else {
      makeNewRow(shift.department, `${shift.role}-${counter}`);
      addShift(shift.department, `${shift.role}-${counter}`, shift);
      counter++;
    }
  }

  function makeNewDeptRowShift(shift, rowName) {
    makeNewDept(shift.department);
    makeNewRow(shift.department, rowName);
    addShift(shift.department, rowName, shift);
    collatedSchedule[shift.department].cost = 0;
    sumShiftCost(shift);
  }

  function makeNewDept(department) {
    collatedSchedule[department] = {};
  }

  function makeNewRow(department, rowName) {
    let dayArr = [];
    for (let i = 0; i < 7; i++) {
      dayArr[i] = { id: nanoid(), isShift: false };
    }
    collatedSchedule[department][rowName] = dayArr;
  }

  function addShift(department, rowName, shift) {
    collatedSchedule[department][rowName][shift.day] = {
      ...shift,
      ...collatedSchedule[department][rowName][shift.day],
      isShift: true,
    };
  }

  function sumShiftCost(shift) {
    collatedSchedule[shift.department].cost +=
      (shift.end - shift.start) * shift.hourly * shift.people;
  }

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
