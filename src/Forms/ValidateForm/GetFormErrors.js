import { GetErrorMessageDepartment } from "./GetErrorMessageDepartment";

export const GET_FORM_ERRORS = (formName, data) => {
  switch (formName) {
    case "departments":
      return validateDepartmentForm(data);
    default:
      break;
  }
};

function validateDepartmentForm(data) {
  let error = {
    department_name: GetErrorMessageDepartment(
      "department_name",
      data.department_name
    ),
  };
  return error;
}
