import React from "react";
import FormError from "../../Forms/CommonFormComponents/FormError/FormError";
import FormSaveButton from "../../Forms/CommonFormComponents/FormSaveButton/FormSaveButton";
import FormDeleteButton from "../../Forms/CommonFormComponents/FormDeleteButton/FormDeleteButton";

function DepartmentForm(props) {
  const renderDeleteButton = () => {
    return <FormDeleteButton id={props.id} formName="departments" />;
  };
  return (
    <form className="form form_department">
      <fieldset className="fieldset_form">
        {props.id !== "new" ? renderDeleteButton() : null}
        <section className="input-section">
          <label className="input-section__label" htmlFor="line-item">
            Department
          </label>
          <div className="input-section__input-container">
            <input
              className={`input-section__input ${
                props.formError ? "input-section__error" : ""
              }`}
              type="text"
              id="department"
              placeholder="Department"
              name="department_name"
              onChange={(e) => props.handleChange(e)}
              onBlur={(e) => props.handleBlur(e)}
              value={props.data.department_name}
            />
            {props.formError.department_name.length > 0 ? (
              <FormError message={props.formError.department_name} />
            ) : null}
          </div>
        </section>
        <FormSaveButton
          formName="departments"
          validateForm={props.validateForm}
          getError={props.getError}
          data={props.data}
          id={props.id}
          setFormError={props.setFormError}
          formError={props.formError}
        />
      </fieldset>
    </form>
  );
}

export default DepartmentForm;
