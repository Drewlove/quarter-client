let collatedSchedule = {};

export const COLLATE_SCHEDULE = (shifts) => {
  collatedSchedule = {};
  shifts.forEach((shift) => {
    if (!collatedSchedule[shift.department_name]) addDepartment(shift);
    if (!collatedSchedule[shift.department_name].shifts[shift.shift_id])
      addRow(shift);
    sumShiftCost(shift);
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

function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}

function sumShiftCost(shift) {
  collatedSchedule[shift.department_name].cost +=
    (timeStringToFloat(shift.shift_end) -
      timeStringToFloat(shift.shift_start)) *
    shift.wage *
    shift.people *
    shift.shift_day.length;
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
