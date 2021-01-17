import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";

function LineItemFormCategory(props) {
  const expenseCategories = ["sales", "cogs", "overhead"];

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
    <section className="input-section input-section_category">
      <label className="input-section__label" htmlFor="category">
        Category
      </label>
      <div className="input-section__input-container">
        <select
          className={`input-section__input ${
            props.error ? "input-section__error" : ""
          }`}
          id="category"
          onChange={props.handleChange}
          name="category"
          value={props.value}
        >
          <option value={""} disabled>
            - Select Category -
          </option>
          {renderCategories(expenseCategories)}
        </select>
        {props.error ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default LineItemFormCategory;
