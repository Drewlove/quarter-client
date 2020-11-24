import {nanoid} from 'nanoid'; 

let collatedSchedule = {}; 

let counter = 0; 

export const CollateSchedule = (shifts) => {
  collatedSchedule = {}; 
  
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