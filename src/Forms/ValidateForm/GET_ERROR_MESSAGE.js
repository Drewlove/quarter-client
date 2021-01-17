export const GET_ERROR_MESSAGE = (name, formValue) => {
  switch (name) {
    case "department_name":
      return getErrorMessageDepartmentName(formValue);
    case "department_id":
      return getErrorMessageDepartmentId(formValue);
    case "role_name":
      return getErrorMessageRoleName(formValue);
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
