import React from "react";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";
import Error from "../../CommonFormComponents/Error/Error";

function LineItemFormPercentOf(props) {
  const salesCategories = ["food", "beverage", "other"];

  const renderCategories = (categories) => {
    return categories.map((category) => {
      return (
        <option value={category} key={category}>
          {CapitalizeAllWords(category)}
        </option>
      );
    });
  };

  return (
    <section className="input-section">
      <label className="input-section__label" htmlFor="percentOf">
        Percent Of
      </label>
      <div className="input-section__input-container">
        <select
          className={`input-section__input ${
            props.error ? "input-section__error" : ""
          }`}
          id="percentOf"
          onChange={(e) => props.onChange(e)}
          name="percentOf"
          value={props.value}
        >
          <option value={""} disabled>
            - Select Line Item -
          </option>
          {renderCategories(salesCategories)}
        </select>
        {props.error ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default LineItemFormPercentOf;
