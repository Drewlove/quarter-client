import React, { useEffect, useState } from "react";
import RoleFormDepartment from "../RoleFormDepartment/RoleFormDepartment";
import RoleFormRoleName from "../RoleFormName/RoleFormRoleName";
import FormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import { GET_ERROR_MESSAGE } from "../../ValidateForm/GET_ERROR_MESSAGE";

function RoleForm(props) {
  const [formData, setFormData] = useState({
    role_id: "",
    role_name: "",
    department_id: "",
    department_name: "",
  });
  const [formError, setFormError] = useState({
    role_name: "",
    department_id: "",
  });

  useEffect(() => {
    if (props.id !== "new")
      setFormData({
        role_id: props.data[1].role_id,
        role_name: props.data[1].role_name,
        department_id: props.data[1].department_id.toString(),
      });
  }, [props.id, props.data]);

  const handleChange = (e) => {
    validate(e);
    let updatedForm = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedForm);
  };

  const validate = (e) => {
    let errorMessage = GET_ERROR_MESSAGE(e.target.name, e.target.value);
    setFormError({ ...formError, [e.target.name]: errorMessage });
  };

  const handleBlur = (e) => {
    validate(e);
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const renderDeleteButton = () => {
    return (
      <FormDeleteButton
        handleDelete={handleDelete}
        endpointSuffix="roles"
        id={props.id}
        redirectSuffix="roles"
      />
    );
  };

  return (
    <form className="form form_role">
      <fieldset className="fieldset_form">
        {props.id !== "new" ? renderDeleteButton() : null}
        <RoleFormDepartment
          departments={props.data[0]}
          value={formData.department_id}
          formError={formError.department_id}
          handleChange={handleChange}
        />
        <RoleFormRoleName
          value={formData.role_name}
          formError={formError.role_name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <FormSaveButton
          formData={formData}
          formName="role"
          endpointSuffix="roles"
          redirectSuffix="roles"
          id={props.id}
          setFormError={setFormError}
        />
      </fieldset>
    </form>
  );
}

export default RoleForm;
