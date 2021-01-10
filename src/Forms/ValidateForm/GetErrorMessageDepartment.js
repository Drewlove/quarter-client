export const GetErrorMessageDepartment = (name, value) => {
  switch (name) {
    case "department_name":
      return getErrorMessageDepartmentName(value);
    default:
      break;
  }
};

const getErrorMessageDepartmentName = (value) => {
  if (value.length === 0) {
    return "Enter a name.";
  } else {
    return "";
  }
};
