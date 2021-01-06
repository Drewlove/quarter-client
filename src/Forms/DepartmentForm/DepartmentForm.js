import React from "react";
import FormError from "../../Forms/CommonFormComponents/FormError/FormError";
import DepartmentFormSaveButton from "../../Forms/CommonFormComponents/FormSaveButton/FormSaveButton";
import DepartmentFormDeleteButton from "../../Forms/CommonFormComponents/FormDeleteButton/FormDeleteButton";

function DepartmentForm(props) {
  const renderDeleteButton = () => {
    return <DepartmentFormDeleteButton handleDelete={props.handleDelete} />;
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
              onBlur={() => props.handleBlur()}
              value={props.data.department_name}
            />
            {props.formError ? <FormError message={props.formError} /> : null}
          </div>
        </section>
        <DepartmentFormSaveButton handleSave={props.handleSave} />
      </fieldset>
    </form>
  );
}

export default DepartmentForm;
