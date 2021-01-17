import { GET_ERROR_MESSAGE } from "./GET_ERROR_MESSAGE";

export const GET_ALL_ERROR_MESSAGES = (formName, formData) => {
  switch (formName) {
    case "department":
      return getDepartmentErrors(formData);
    case "role":
      return getRoleErrors(formData);
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
