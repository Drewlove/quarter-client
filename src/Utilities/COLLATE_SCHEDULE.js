import { SUM_WEEKLY_SHIFT_TOTAL } from "../Utilities/UtilityFunctions";

let collatedSchedule = {};

export const COLLATE_SCHEDULE = (shifts) => {
  collatedSchedule = {};
  shifts.forEach((shift) => {
    if (!collatedSchedule[shift.department_name]) addDepartment(shift);
    if (!collatedSchedule[shift.department_name].shifts[shift.shift_id]) {
      addRow(shift);
      collatedSchedule[shift.department_name].cost += SUM_WEEKLY_SHIFT_TOTAL(
        shift
      );
    }
  });
  const sortedSchedule = sortSchedule(collatedSchedule);
  return sortedSchedule;
};

function addDepartment(shift) {
  collatedSchedule[shift.department_name] = { cost: 0, shifts: {} };
}

function addRow(shift) {
  let row = [];
  for (let i = 0; i < 7; i++) {
    row[i] = {
      isShift: false,
      id: `${shift.shift_department}${shift.shift_role}-${i}`,
    };
  }
  shift.shift_day.forEach((day) => {
    row[day] = { isShift: true, id: `${shift.shift_id}-${day}`, shift: shift };
  });

  collatedSchedule[shift.department_name].shifts[shift.shift_id] = row;
}

function sortSchedule(schedule) {
  let sortedSchedule = Object.keys(schedule)
    .sort()
    .map(function (dept) {
      return {
        deptName: [dept][0],
        shifts: schedule[dept].shifts,
        cost: schedule[dept].cost,
      };
    });
  return sortedSchedule;
}
