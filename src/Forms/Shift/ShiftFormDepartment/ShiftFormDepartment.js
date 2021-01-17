import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";

function ShiftFormDepartment(props) {
  const renderOptions = (options) => {
    return options.map((option) => {
      return (
        <option value={option} key={option}>
          {CapitalizeAllWords(option)}
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
          className={`input-section__input ${
            props.error ? "input-section__error" : ""
          }`}
          id="department"
          onChange={props.handleChange}
          name="department"
          value={props.value}
        >
          <option value={""} disabled>
            - Select Department -
          </option>
          {props.options ? renderOptions(props.options) : null}
        </select>
        {props.error.length > 0 ? <FormError message={props.error} /> : null}
      </div>
    </section>
  );
}

export default ShiftFormDepartment;
