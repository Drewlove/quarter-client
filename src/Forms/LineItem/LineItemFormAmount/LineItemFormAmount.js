import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function LineItemFormAmount(props) {
  const getAmountSign = () => {
    return props.line_item_amount_type === "dollars" ? "$" : "%";
  };

  return (
    <section className="form-section form-section_amount">
      <label className="form-section__label" htmlFor="amount">
        Amount {getAmountSign()}{" "}
      </label>
      <div className="form-section__input-container">
        <input
          className="form-section__input"
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
