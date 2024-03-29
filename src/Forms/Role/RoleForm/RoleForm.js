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
  });

  const [formError, setFormError] = useState({
    role_name: "",
    department_id: "",
  });

  useEffect(() => {
    if (props.rowId !== "new")
      setFormData({
        role_id: props.data[1].role_id,
        role_name: props.data[1].role_name,
        department_id: props.data[1].department_id.toString(),
      });
  }, [props.rowId, props.data]);

  const handleChange = (e) => {
    validate(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    let errorMessage = GET_ERROR_MESSAGE(e.target.name, e.target.value);
    setFormError({ ...formError, [e.target.name]: errorMessage });
  };

  const handleBlur = (e) => {
    validate(e);
  };

  const renderDeleteButton = () => {
    return (
      <FormDeleteButton
        endpointSuffix="roles"
        rowId={props.rowId}
        redirectSuffix="app/roles"
      />
    );
  };

  return (
    <form className="form form_role">
      <fieldset className="fieldset fieldset_form">
        {props.rowId !== "new" ? renderDeleteButton() : null}
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
          redirectSuffix="app/roles"
          rowId={props.rowId}
          setFormError={setFormError}
        />
      </fieldset>
    </form>
  );
}

export default RoleForm;
