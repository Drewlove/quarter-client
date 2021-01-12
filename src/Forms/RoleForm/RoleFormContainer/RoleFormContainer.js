import React, { useState, useEffect } from "react";
import RoleFormDepartment from "../RoleFormDepartment/RoleFormDepartment";
import RoleFormRoleName from "../RoleFormName/RoleFormRoleName";
import { GetErrorMessage } from "../RoleFormErrors";
import FormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import { API_GET } from "../../../Utilities/API_Methods/API_GET";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../../LoadingIndicator/LoadingIndicator";

function RoleForm() {
  const { id } = useParams();
  const [{ data, isLoading, isError }, dispatch] = API_GET("roles", id);
  const [input, setInput] = useState({ department: "", role: "" });
  const [error, setError] = useState({ department: "", role: "" });

  // const handleChange = (e) => {
  //   validate(e);
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleChange = (e) => {
    validate(e);
    console.log(e.target.name, e.target.value);
    let updatedData = { ...data, [e.target.name]: e.target.value };
    dispatch({ type: "UPDATE_DATA", payload: updatedData });
  };

  useEffect(() => {
    if (id === "new") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: { role_name: "", role_id: 0, department_id: 0 },
      });
    }
  }, [id, dispatch]);

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

  const renderLoading = () => {
    return <LoadingIndicator />;
  };

  const renderResults = () => {
    return isError ? renderError() : renderForm();
  };

  const renderError = () => {
    return <p className="loading-error">Error! Failed to load data.</p>;
  };

  const renderForm = () => {
    return (
      <form className="form form_role">
        <fieldset className="fieldset_form">
          <FormDeleteButton handleDelete={handleDelete} />
          <RoleFormDepartment
            value={data.department_id}
            error={error.department}
            handleChange={handleChange}
          />
          <RoleFormRoleName
            value={input.role}
            error={error.role}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormSaveButton handleSave={handleSave} />
        </fieldset>
      </form>
    );
  };

  return (
    <main className="main">
      {isLoading ? renderLoading() : renderResults()}
    </main>
  );
}

export default RoleForm;
