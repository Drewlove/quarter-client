import React, { useState, useEffect } from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";
import FormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import { GET_ERROR_MESSAGE } from "../../ValidateForm/GET_ERROR_MESSAGE";
import { useAuth0 } from "@auth0/auth0-react";

function DepartmentForm(props) {
  const { user } = useAuth0();
  const [formData, setFormData] = useState({
    department_name: "",
    app_user_id: user.sub,
  });
  const [formError, setFormError] = useState({
    department_name: "",
  });

  useEffect(() => {
    if (props.id !== "new")
      setFormData({
        app_user_id: user.sub,
        department_name: props.data[0].department_name,
      });
    if (props.id === "new") {
      setFormData({
        app_user_id: user.sub,
        department_name: "",
      });
    }
  }, [props.id, user.sub, props.data]);

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
        endpointSuffix="departments"
        id={props.id}
        redirectSuffix="app/departments"
      />
    );
  };

  return (
    <form className="form form_department">
      <fieldset className="fieldset_form">
        {props.id !== "new" ? renderDeleteButton() : null}
        <section className="input-section input-section_role-name">
          <label className="input-section__label" htmlFor="line-item">
            Department
          </label>
          <div className="input-section__input-container">
            <input
              className="input-section__input"
              type="text"
              id="department"
              placeholder="Department"
              name="department_name"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              value={formData.department_name}
            />
            {formError.department_name.length > 0 ? (
              <FormError message={formError.department_name} />
            ) : null}
          </div>
        </section>
        <FormSaveButton
          formData={formData}
          formName="department"
          endpointSuffix="departments"
          redirectSuffix="app/departments"
          id={props.id}
          setFormError={setFormError}
        />
      </fieldset>
    </form>
  );
}

export default DepartmentForm;
