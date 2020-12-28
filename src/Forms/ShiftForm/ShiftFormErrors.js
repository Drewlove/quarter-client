export const GetErrorMessage = (name, value) => {
  switch (name) {
    case "people":
      return getErrorMessagePeople(value);
    case "pay":
      return getErrorMessagePay(value);
    case "department":
      return getErrorMessageDepartment(value);
    case "role":
      return getErrorMessageRole(value);
    case "startTime":
      return getErrorMessageStartTime(value);
    case "endTime":
      return getErrorMessageEndTime(value);
    case "days":
      return getErrorMessageDays(value);
    default:
      break;
  }
};

const getErrorMessagePeople = (value) => {
  if (value.length === 0 || value <= 0) {
    return "Enter at least one person.";
  } else if (parseFloat(value) !== parseInt(value)) {
    return "Enter a whole number.";
  } else {
    return "";
  }
};

const getErrorMessagePay = (value) => {
  if (value.length === 0 || value[0] === "-") {
    return "Enter a number greater than or equal to 0.";
  } else if (value.indexOf(".") >= 0 && value.split(".")[1].length > 2) {
    return "Enter a number with max of two digits to right of decimal point.";
  } else if (multipleDecimals(value)) {
    return "Enter a number with a maximum of one decimal.";
  } else {
    return "";
  }
};

const multipleDecimals = (value) => {
  let decimals = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === ".") decimals++;
  }
  return decimals > 1 ? true : false;
};

const getErrorMessageDepartment = (value) => {
  if (value.length === 0) {
    return "Select a department.";
  } else {
    return "";
  }
};

const getErrorMessageRole = (value) => {
  if (value.length === 0) {
    return "Select a role.";
  } else {
    return "";
  }
};

const getErrorMessageStartTime = (value) => {
  if (value.length === 0) {
    return "Select a start time.";
  } else {
    return "";
  }
};

const getErrorMessageEndTime = (value) => {
  if (value.length === 0) {
    return "Select an end time.";
  } else {
    return "";
  }
};

const getErrorMessageDays = (value) => {
  Object.entries(value).forEach((day) => {
    let dayBoolean = day[1];
    if (dayBoolean === true) return "";
  });
  return "Select at least one day.";
};
