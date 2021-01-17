import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function RoleFormDepartment(props) {
  const renderDepartments = () => {
    return props.departments.map((key) => {
      return (
        <option value={key.department_id} key={key.department_id}>
          {key.department_name}
        </option>
      );
    });
  };

  return (
    <section className="input-section input-section_role-department">
      <label className="input-section__label" htmlFor="department">
        Department
      </label>
      <div className="input-section__input-container">
        <select
          className="input-section__input"
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
