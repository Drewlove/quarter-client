import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormRole(props) {
  const getFilteredOptions = () => {
    return props.roles.filter(
      (option) => option.department_id.toString() === props.departmentId
    );
  };

  const renderRoles = () => {
    const filteredOptions = getFilteredOptions();
    const sortedOptions = sortOptions(filteredOptions);

    return sortedOptions.map((option) => {
      return (
        <option
          className="option option_shift-role"
          value={option.role_id.toString()}
          key={option.role_id}
        >
          {option.role_name}
        </option>
      );
    });
  };

  const sortOptions = (options) => {
    return options.sort((a, b) =>
      a.role_name.toUpperCase() >= b.role_name.toUpperCase() ? 1 : -1
    );
  };

  return (
    <section className="form-section form-section_role">
      <label className="form-section__label" htmlFor="role">
        Role
      </label>
      <div className="form-section__input-container">
        <select
          className="form-section__input form-section__input_role"
          id="role"
          onChange={props.handleChange}
          name="shift_role"
          value={props.value}
        >
          <option className="option option_shift-role" value={""} disabled>
            - Select Role -
          </option>
          {props.roles.length > 0 ? renderRoles() : null}
        </select>
        {props.formError.length > 0 ? (
          <FormError message={props.formError} />
        ) : null}
      </div>
    </section>
  );
}

export default ShiftFormRole;
