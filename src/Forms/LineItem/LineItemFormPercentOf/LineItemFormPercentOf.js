import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function LineItemFormPercentOf(props) {
  const displayCategory = (catName) => {
    switch (catName) {
      case "sales":
        return "Sales";
      case "cogs":
        return "COGS";
      case "overhead":
        return "Overhead";
      default:
        return "";
    }
  };

  const renderLineItems = (lineItems) => {
    return lineItems.map((key) => {
      return (
        <option value={key.line_item_id} key={key.line_item_id}>
          {displayCategory(key.line_item_category)} - {key.line_item_name}
        </option>
      );
    });
  };

  return (
    <section className="form-section form-section_percent-of">
      <label className="form-section__label" htmlFor="percent_of">
        Percent Of
      </label>
      <div className="form-section__input-container">
        <select
          className="form-section__input"
          id="percent_of"
          onChange={(e) => props.onChange(e)}
          name="percent_of"
          value={props.value === null ? "" : props.value}
        >
          <option value={""} disabled>
            - Select Line Item -
          </option>
          {renderLineItems(props.lineItems.sales)}
          {renderLineItems(props.lineItems.cogs)}
          {renderLineItems(props.lineItems.overhead)}
        </select>
        {props.error ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default LineItemFormPercentOf;
