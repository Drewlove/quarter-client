export const GetErrorMessage = (name, value) => {
  switch (name) {
    case "department":
      return getErrorMessageDepartment(value);
    case "role":
      return getErrorMessageName(value);
    default:
      break;
  }
};

const getErrorMessageDepartment = (value) => {
  if (value.length === 0) {
    return "Select a department.";
  } else {
    return "";
  }
};

const getErrorMessageName = (value) => {
  if (value.length === 0) {
    return "Enter a name.";
  } else {
    return "";
  }
};
