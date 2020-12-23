import React, { useState } from "react";
import FormError from "../../Forms/CommonFormComponents/FormError/FormError";
import DepartmentFormSaveButton from "../../Forms/CommonFormComponents/FormSaveButton/FormSaveButton";
import DepartmentFormDeleteButton from "../../Forms/CommonFormComponents/FormDeleteButton/FormDeleteButton";

function DepartmentForm() {
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    validate(e.target.value);
    setDepartment(e.target.value);
  };

  const handleBlur = (e) => {
    validate(department);
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const handleSave = (e) => {
    e.preventDefault();
  };

  const validate = (value) => {
    if (value.length === 0) {
      setError("Enter a department.");
    } else {
      setError("");
    }
  };

  return (
    <main className="main">
      <form className="form form_department">
        <fieldset className="fieldset_form">
          <DepartmentFormDeleteButton handleDelete={handleDelete} />
          <section className="input-section">
            <label className="input-section__label" htmlFor="line-item">
              Department
            </label>
            <div className="input-section__input-container">
              <input
                className={`input-section__input ${
                  error ? "input-section__error" : ""
                }`}
                type="text"
                id="department"
                placeholder="Department"
                name="department"
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                value={department}
              />
              {error ? <FormError message={error} /> : null}
            </div>
          </section>
          <DepartmentFormSaveButton handleSave={handleSave} />
        </fieldset>
      </form>
    </main>
  );
}

export default DepartmentForm;
