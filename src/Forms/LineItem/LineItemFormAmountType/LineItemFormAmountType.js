import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function LineItemFormAmountType(props) {
  return (
    <section className="input-section input-section_amount-type">
      <p className="input-section__label">Amount Type</p>
      <div className="input-section__input-container">
        <div className="input-section__input input-section__input_radio">
          <div className="input-section__radio-container">
            <input
              type="radio"
              className="radio"
              name="line_item_amount_type"
              id="dollars"
              value="dollars"
              checked={props.value === "dollars"}
              onChange={(e) => props.handleChangeAmountType(e)}
            />
            <label htmlFor="dollars">Dollars</label>
          </div>
          <div className="input-section__radio-container">
            <input
              type="radio"
              className="radio"
              name="line_item_amount_type"
              id="percentage"
              value="percentage"
              checked={props.value === "percent"}
              onChange={(e) => props.handleChangeAmountType(e)}
            />
            <label htmlFor="percentage">Percent</label>
          </div>
        </div>
        {props.formError ? <Error message="Choose an amount type" /> : null}
      </div>
    </section>
  );
}

export default LineItemFormAmountType;
