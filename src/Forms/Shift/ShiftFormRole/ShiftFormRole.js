import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";

function ShiftFormRole(props) {
  const getFilteredOptions = () => {
    return props.roles.filter(
      (option) => option.department_id.toString() === props.departmentId
    );
  };

  const renderRoles = () => {
    const filteredOptions = getFilteredOptions();

    return filteredOptions.map((option) => {
      return (
        <option value={option.role_id.toString()} key={option.role_id}>
          {CapitalizeAllWords(option.role_name)}
        </option>
      );
    });
  };

  return (
    <section className="input-section input-section_role">
      <label className="input-section__label" htmlFor="role">
        Role
      </label>
      <div className="input-section__input-container">
        <select
          className="input-section__input"
          id="role"
          onChange={props.handleChange}
          name="shift_role"
          value={props.value}
        >
          <option value={""} disabled>
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
