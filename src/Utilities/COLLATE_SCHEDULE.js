import { nanoid } from "nanoid";

let collatedSchedule = {};

export const COLLATE_SCHEDULE = (shifts) => {
  collatedSchedule = {};
  shifts.forEach((shift) => {
    if (!collatedSchedule[shift.department_name]) addDepartment(shift);
    if (!collatedSchedule[shift.department_name].shifts[shift.shift_id])
      addRow(shift);
    sumShiftCost(shift);
  });
  return collatedSchedule;
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

function sumShiftCost(shift) {
  collatedSchedule[shift.department_name].cost +=
    (shift.shift_end - shift.shift_start) *
    shift.wage *
    shift.people *
    shift.shift_day.length;
}
