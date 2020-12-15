export const GetErrorMessage = (name, value) => {
  let errorMessage = "";
  switch (name) {
    case "people":
      return (errorMessage = getErrorMessagePeople(value));
      break;
    case "pay":
      return (errorMessage = getErrorMessagePay(value));
      break;
    case "department":
      return (errorMessage = getErrorMessageDepartment(value));
      break;
    case "role":
      return (errorMessage = getErrorMessageRole(value));
      break;
    case "startTime":
      return (errorMessage = getErrorMessageStartTime(value));
      break;
    case "endTime":
      return (errorMessage = getErrorMessageEndTime(value));
      break;
    case "days":
      return (errorMessage = getErrorMessageDays(value));
      break;
  }
};

const getErrorMessagePeople = (value) => {
  let errorMessage = "";
  if (value.length === 0 || value <= 0) {
    return (errorMessage = "Enter at least one person.");
  } else if (parseFloat(value) !== parseInt(value)) {
    return (errorMessage = "Enter a whole number.");
  } else {
    return (errorMessage = "");
  }
};

const getErrorMessagePay = (value) => {
  let errorMessage = "";
  if (value.length === 0 || value < 0) {
    return (errorMessage = "Enter a valid pay rate.");
  } else if (value.indexOf(".") >= 0 && value.split(".")[1].length > 2) {
    return (errorMessage =
      "Enter number with max of two digits to right of decimal point.");
  } else {
    return (errorMessage = "");
  }
};

const getErrorMessageDepartment = (value) => {
  let errorMessage = "";
  if (value.length === 0) {
    return (errorMessage = "Select a department.");
  } else {
    return (errorMessage = "");
  }
};

const getErrorMessageRole = (value) => {
  let errorMessage = "";
  if (value.length === 0) {
    return (errorMessage = "Select a role.");
  } else {
    return (errorMessage = "");
  }
};

const getErrorMessageStartTime = (value) => {
  let errorMessage = "";
  if (value.length === 0) {
    return (errorMessage = "Select a start time.");
  } else {
    return (errorMessage = "");
  }
};

const getErrorMessageEndTime = (value) => {
  let errorMessage = "";
  if (value.length === 0) {
    return (errorMessage = "Select an end time.");
  } else {
    return (errorMessage = "");
  }
};

const getErrorMessageDays = (value) => {
  let errorMessage = "Select at least one day.";
  for (let [day, boolean] of Object.entries(value)) {
    if (boolean === true) return (errorMessage = "");
  }
  return errorMessage;
};
