import React from "react";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";
import Error from "../../CommonFormComponents/FormError/FormError";

function LineItemFormPercentOf(props) {
  const renderLineItems = (lineItems) => {
    return lineItems.map((key) => {
      return (
        <option value={key.line_item_id} key={key.line_item_id}>
          {CapitalizeAllWords(key.line_item_category)} - {key.line_item_name}
        </option>
      );
    });
  };

  return (
    <section className="input-section input-section_percent-of">
      {console.log(props.value)}
      <label className="input-section__label" htmlFor="percent_of">
        Percent Of
      </label>
      <div className="input-section__input-container">
        <select
          className="input-section__input"
          id="percent_of"
          onChange={(e) => props.onChange(e)}
          name="percent_of"
          value={props.value}
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
