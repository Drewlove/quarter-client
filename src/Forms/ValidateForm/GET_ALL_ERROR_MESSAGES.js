import { GET_ERROR_MESSAGE } from "./GET_ERROR_MESSAGE";

export const GET_ALL_ERROR_MESSAGES = (formName, formData) => {
  switch (formName) {
    case "department":
      return getDepartmentErrors(formData);
    case "role":
      return getRoleErrors(formData);
    case "shift":
      return getShiftErrors(formData);
    default:
  }
};

function getDepartmentErrors(formData) {
  let formErrorsObj = {
    department_name: GET_ERROR_MESSAGE(
      "department_name",
      formData.department_name
    ),
  };
  return formErrorsObj;
}

function getRoleErrors(formData) {
  let formErrorsObj = {
    department_id: GET_ERROR_MESSAGE("department_id", formData.department_id),
    role_name: GET_ERROR_MESSAGE("role_name", formData.role_name),
  };
  return formErrorsObj;
}

function getShiftErrors(formData) {
  let formErrorsObj = {
    shift_department: GET_ERROR_MESSAGE(
      "shift_department",
      formData.shift_department
    ),
    shift_role: GET_ERROR_MESSAGE("shift_role", formData.shift_role),
    people: GET_ERROR_MESSAGE("people", formData.people),
    wage: GET_ERROR_MESSAGE("wage", formData.wage),
    payroll_tax: GET_ERROR_MESSAGE("payroll_tax", formData.payroll_tax),
    shift_start: GET_ERROR_MESSAGE("shift_start", formData.shift_start),
    shift_end: GET_ERROR_MESSAGE("shift_end", formData.shift_end),
    shift_day: GET_ERROR_MESSAGE("shift_day", formData.shift_day),
  };
  return formErrorsObj;
}
