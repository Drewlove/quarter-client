import { SUM_WEEKLY_SHIFT_TOTAL } from "../Utilities/UtilityFunctions";

let collatedSchedule = {};

export const COLLATE_SCHEDULE = (shifts) => {
  collatedSchedule = {};
  shifts.forEach((shift) => {
    if (!collatedSchedule[shift.department_name]) addDepartment(shift);
    addRow(shift);
    collatedSchedule[shift.department_name].cost += SUM_WEEKLY_SHIFT_TOTAL(
      shift
    );
  });
  let sortedSchedule = sortSchedule(collatedSchedule);

  return sortedSchedule;
};

function addDepartment(shift) {
  collatedSchedule[shift.department_name] = { cost: 0, row: {} };
}

function addRow(shift) {
  let row = {
    shifts: getShifts(shift),
    row_id: shift.shift_id,
  };
  collatedSchedule[shift.department_name].row[
    `${shift.role_name}-${shift.shift_id}`
  ] = row;
}

function getShifts(shift) {
  let shifts = [];
  for (let i = 0; i < 7; i++) {
    shifts[i] = {
      shift: null,
      isShift: false,
      id: `${shift.shift_department}${shift.shift_role}-${i}`,
    };
  }
  shift.shift_day.forEach((day) => {
    shifts[day] = {
      ...shifts[day],
      isShift: true,
      shift: shift,
    };
  });
  return shifts;
}

function sortSchedule(schedule) {
  let deptNamesSortedAlpha = Object.keys(schedule).sort((a, b) =>
    a.localeCompare(b)
  );
  let scheduleSorted = [];
  deptNamesSortedAlpha.forEach((key) => {
    let obj = { ...schedule[key], deptName: key };
    scheduleSorted.push(obj);
  });
  return scheduleSorted;
}
