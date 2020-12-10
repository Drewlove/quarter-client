import React from "react";
import Error from "../Error/Error";
import { CapitalizeAllWords } from "../../Utilities/UtilityFunctions";

function ShiftFormRole(props) {
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
    <section className={`input-section ${props.optionalClass}`}>
      <label className="input-section__label" htmlFor="role">
        Role
      </label>
      <div className="input-section__input-container">
        <select
          className={`input-section__input ${
            props.error ? "input-section__error" : ""
          }`}
          id="role"
          onChange={props.handleChange}
          name="role"
          value={props.value}
        >
          <option value={""} disabled>
            - Select Role -
          </option>
          {props.options ? renderOptions(props.options) : null}
        </select>
        {props.error.length > 0 ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default ShiftFormRole;
