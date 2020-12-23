import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";

function LineItemFormSelect(props) {
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
    <section
      className={`input-section input-section_select ${props.optionalClass}`}
    >
      <label className="input-section__label" htmlFor={props.name}>
        {CapitalizeAllWords(props.name)}
      </label>
      <div className="input-section__input-container">
        <select
          className={`input-section__input ${
            props.error ? "input-section__error" : ""
          }`}
          id={props.name}
          onChange={props.handleChange}
          name={props.name}
          value={props.value}
        >
          <option value={""} disabled>
            - Select {CapitalizeAllWords(props.name)} -
          </option>
          {props.options ? renderOptions(props.options) : null}
        </select>
        {props.error ? <FormError message={props.error} /> : null}
      </div>
    </section>
  );
}

export default LineItemFormSelect;
