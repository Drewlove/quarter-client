import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function LineItemFormCategory(props) {
  const renderCategories = () => {
    return props.categories.map((key) => {
      return (
        <option
          className="input-section__input-option"
          value={key.actualVal}
          key={key.actualVal}
        >
          {key.displayVal}
        </option>
      );
    });
  };

  return (
    <section className="input-section input-section_category">
      <label className="input-section__label" htmlFor="line_item_category">
        Category
      </label>
      <div className="input-section__input-container">
        <select
          className="input-section__input"
          id="line_item_category"
          onChange={props.handleChange}
          name="line_item_category"
          value={props.value}
        >
          <option value={""} disabled>
            - Select Category -
          </option>
          {renderCategories()}
        </select>
        {props.error ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default LineItemFormCategory;
