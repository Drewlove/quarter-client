import React, { useState } from "react";
import RoleFormDepartment from "../RoleFormDepartment/RoleFormDepartment";
import RoleFormRoleName from "../RoleFormName/RoleFormRoleName";
import { GetErrorMessage } from "../RoleFormErrors";
import RoleFormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import RoleFormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";

function RoleForm() {
  const [input, setInput] = useState({ department: "", role: "" });
  const [error, setError] = useState({ department: "", role: "" });

  const handleChange = (e) => {
    validate(e);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (e) => {
    let errorMessage = GetErrorMessage(e.target.name, e.target.value);
    setError({ ...error, [e.target.name]: errorMessage });
  };

  const handleBlur = (e) => {
    validate(e);
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const handleSave = (e) => {
    e.preventDefault();
    validateAllInputs();
  };

  const validateAllInputs = () => {
    let errors = {};

    Object.keys(input).forEach((key) => {
      errors[key] = GetErrorMessage(key, input[key]);
    });
    if (input.amountType === "dollars") errors.percentOf = "";

    setError(errors);
  };

  return (
    <main className="main">
      <form className="form form_role">
        <fieldset className="fieldset_form">
          <RoleFormDeleteButton handleDelete={handleDelete} />
          <RoleFormDepartment
            value={input.department}
            error={error.department}
            handleChange={handleChange}
          />
          <RoleFormRoleName
            value={input.role}
            error={error.role}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <RoleFormSaveButton handleSave={handleSave} />
        </fieldset>
      </form>
    </main>
  );
}

export default RoleForm;
