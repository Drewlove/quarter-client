export const GET_ERROR_MESSAGE = (name, formValue, secondFormValue) => {
  switch (name) {
    case "department_name":
      return getErrorMessageDepartmentName(formValue);
    case "department_id":
      return getErrorMessageDepartmentId(formValue);
    case "role_name":
      return getErrorMessageRoleName(formValue);
    case "shift_department":
      return getErrorMessageShiftDepartment(formValue);
    case "shift_role":
      return getErrorMessageShiftRole(formValue);
    case "people":
      return getErrorMessagePeople(formValue);
    case "wage":
      return getErrorMessageWage(formValue);
    case "payroll_tax":
      return getErrorMessagePayrollTax(formValue);
    case "shift_start":
      return getErrorMessageShiftStart(formValue);
    case "shift_end":
      return getErrorMessageShiftEnd(formValue, secondFormValue);
    case "shift_day":
      return getErrorMessageShiftDay(formValue);
    case "line_item_category":
      return getErrorMessageLineItemCategory(formValue);
    case "line_item_name":
      return getErrorMessageLineItemName(formValue);
    case "amount":
      return getErrorMessageAmount(formValue);
    case "percent_of":
      return getErrorMessagePercentofLineItem(formValue);
    default:
  }
};

function getErrorMessageDepartmentName(formValue) {
  if (formValue.length === 0) {
    return "Department name cannot be blank.";
  } else {
    return "";
  }
}

function getErrorMessageDepartmentId(formValue) {
  if (formValue.length === 0) {
    return "Department selection cannot be blank.";
  } else {
    return "";
  }
}

function getErrorMessageRoleName(formValue) {
  if (formValue.length === 0) {
    return "Role name cannot be blank.";
  } else {
    return "";
  }
}

function getErrorMessageShiftDepartment(formValue) {
  if (formValue.length === 0) {
    return "Department selection cannot be blank.";
  } else {
    return "";
  }
}

function getErrorMessageShiftRole(formValue) {
  if (formValue.length === 0) {
    return "Role selection cannot be blank.";
  } else {
    return "";
  }
}

function getErrorMessagePeople(formValue) {
  if (formValue <= 0) {
    return "Enter 1 or more people.";
  } else {
    return "";
  }
}

function getErrorMessageWage(formValue) {
  let valAsNum = parseFloat(formValue.replace(/,/g, "")).toFixed(2);
  if (valAsNum <= 0 || isNaN(valAsNum)) {
    return "Enter $0.01 or more.";
  } else if (valAsNum >= 10000) {
    return "Value is out of range.";
  } else {
    return "";
  }
}

function getErrorMessagePayrollTax(formValue) {
  if (formValue === "") {
    return "Enter a number greater than or equal to 0";
  } else {
    return "";
  }
}

function getErrorMessageShiftStart(formValue) {
  if (formValue.length === 0) {
    return "Enter a start time.";
  } else {
    return "";
  }
}

function getErrorMessageShiftEnd(shiftStartVal, shiftEndVal) {
  if (shiftEndVal.length === 0) {
    return "Enter an end time.";
  } else if (strToTimeVal(shiftStartVal) >= strToTimeVal(shiftEndVal)) {
    return "Shift end time must be later than shift start time. ";
  } else {
    return "";
  }
}

function strToTimeVal(str) {
  let timeArr = str.split(":");
  let hour = parseInt(timeArr[0]);
  let min = parseInt(timeArr[1]) / 60;
  let timeVal = hour + min;
  return timeVal;
}

function getErrorMessageShiftDay(formValue) {
  if (formValue.length === 0) {
    return "Select at least one day.";
  } else {
    return "";
  }
}

function getErrorMessageLineItemCategory(formValue) {
  if (formValue.length === 0) {
    return "Category selection cannot be blank.";
  } else {
    return "";
  }
}

function getErrorMessageLineItemName(formValue) {
  if (formValue.length === 0) {
    return "Line item name cannot be blank.";
  } else {
    return "";
  }
}

function getErrorMessageAmount(formValue) {
  let valAsNum = parseFloat(formValue.replace(/,/g, "")).toFixed(2);
  if (valAsNum <= 0 || isNaN(valAsNum)) {
    return "Enter a value greater than 0.";
  } else if (valAsNum >= 10000000) {
    return "Value is out of range.";
  } else {
    return "";
  }
}

function getErrorMessagePercentofLineItem(formValue) {
  if (formValue.length === 0) {
    return "Line item selection cannot be blank.";
  } else {
    return "";
  }
}
