import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function RoleFormDepartment(props) {
  const renderDepartments = () => {
    return props.departments.map((key) => {
      return (
        <option
          value={key.department_id}
          key={key.department_id}
          className="form-section__option"
        >
          {key.department_name}
        </option>
      );
    });
  };

  return (
    <section className="form-section form-section_role-department">
      <label className="form-section__label" htmlFor="department">
        Department
      </label>
      <div className="form-section__input-container">
        <select
          className="form-section__input"
          id="department"
          onChange={props.handleChange}
          name="department_id"
          value={props.value}
        >
          <option value={""} disabled>
            - Select Department -
          </option>
          {renderDepartments()}
        </select>
        {props.formError.length > 0 ? (
          <Error message={props.formError} />
        ) : null}
      </div>
    </section>
  );
}

export default RoleFormDepartment;
