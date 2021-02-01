import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormDepartment(props) {
  const renderDepartments = () => {
    let sortedDepartments = sortDepartments();
    return sortedDepartments.map((key) => {
      return (
        <option
          className="option option_shift-department"
          key={key.department_id}
          value={key.department_id}
        >
          {key.department_name}
        </option>
      );
    });
  };

  const sortDepartments = () => {
    return props.departments.sort((a, b) =>
      a.department_name.toUpperCase() >= b.department_name.toUpperCase()
        ? 1
        : -1
    );
  };

  return (
    <section className={`input-section input-section_department`}>
      <label className="input-section__label" htmlFor="department">
        Department
      </label>
      <div className="input-section__input-container">
        <select
          className="input-section__input input-section__input_department"
          id="department"
          onChange={props.handleChange}
          name="shift_department"
          value={props.value}
        >
          <option
            value={""}
            disabled
            className="option option_shift-department"
          >
            - Select Department -
          </option>
          {props.departments.length > 0 ? renderDepartments() : null}
        </select>
        {props.formError.length > 0 ? (
          <FormError message={props.formError} />
        ) : null}
      </div>
    </section>
  );
}

export default ShiftFormDepartment;
