import {nanoid} from 'nanoid'; 

let collatedSchedule = {}; 

export const CollateSchedule = (shifts) => {
  collatedSchedule = {}; 
  shifts.forEach(shift => {
    if(!collatedSchedule[shift.department]) addDepartment(shift);
    if(!collatedSchedule[shift.department].roles[shift.rowId]) addRow(shift);
    if(!collatedSchedule[shift.department].roles[shift.rowId][shift.day].isShift) addShift(shift);
    sumShiftCost(shift); 
  })
  return collatedSchedule; 
}

function addDepartment(shift) {
  collatedSchedule[shift.department] = { cost: 0, roles: {}};
}

function addRow(shift) {
  let row = [];
  for (let i = 0; i < 7; i++) {
    row[i] = { day: i, id: nanoid(), isShift: false };
  }
  collatedSchedule[shift.department].roles[shift.rowId] = row;
}

function addShift(shift) {
  collatedSchedule[shift.department].roles[shift.rowId][shift.day] = {
    ...shift,
    isShift: true
  };
}

function sumShiftCost(shift){
  collatedSchedule[shift.department].cost +=
    (shift.end - shift.start) * shift.hourly * shift.people;
}