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
  return collatedSchedule;
};

function addDepartment(shift) {
  collatedSchedule[shift.department_name] = { cost: 0, shifts: {} };
}

function addRow(shift) {
  let row = {
    shifts: getShifts(shift),
    row_id: shift.shift_id,
  };
  collatedSchedule[shift.department_name].shifts[
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
