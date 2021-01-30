import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";

function ShiftFormDepartment(props) {
  const renderDepartments = () => {
    return Object.keys(props.departments).map((key) => {
      return (
        <option
          value={props.departments[key].toString()}
          key={props.departments[key]}
        >
          {CapitalizeAllWords(key)}
        </option>
      );
    });
  };

  return (
    <section className={`input-section input-section_department`}>
      <label className="input-section__label" htmlFor="department">
        Department
      </label>
      <div className="input-section__input-container">
        <select
          className="input-section__input"
          id="department"
          onChange={props.handleChange}
          name="shift_department"
          value={props.value}
        >
          <option value={""} disabled>
            - Select Department -
          </option>
          {Object.keys(props.departments).length > 0
            ? renderDepartments()
            : null}
        </select>
        {props.formError.length > 0 ? (
          <FormError message={props.formError} />
        ) : null}
      </div>
    </section>
  );
}

export default ShiftFormDepartment;
