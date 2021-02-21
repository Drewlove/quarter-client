import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";
import { FORMAT_NUM } from "../../../Utilities/UtilityFunctions";

//NEXT, format the number
//do the rest of the child components rendered in LineItemForm
//do error handlig
//do tests (start with leaf nodes, work your way up the tree, finishing with integration tests at LineItemForm)

function LineItemFormAmount(props) {
  const getAmountSign = () => {
    return props.line_item_amount_type === "dollars" ? "$" : "%";
  };

  return (
    <section className="input-section input-section_amount">
      <label className="input-section__label" htmlFor="amount">
        Amount {getAmountSign()}{" "}
      </label>
      <div className="input-section__input-container">
        <input
          className="input-section__input"
          type="text"
          id="amount"
          placeholder={
            props.line_item_amount_type === "dollars"
              ? "Dollar Amount"
              : "Percentage Amount"
          }
          name="amount"
          value={props.value}
          onChange={props.handleChangeAmount}
          onBlur={props.handleBlurAmount}
        />
        {props.error ? <FormError message={props.error} /> : null}
      </div>
    </section>
  );
}

export default LineItemFormAmount;
