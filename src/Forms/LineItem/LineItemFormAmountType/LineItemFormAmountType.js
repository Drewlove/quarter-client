import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function LineItemFormAmountType(props) {
  return (
    <section className="form-section form-section_amount-type">
      <p className="form-section__label">Amount Type</p>
      <div className="form-section__input-container">
        <div className="form-section__input form-section__input_radio">
          <div className="form-section__radio-container">
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
          <div className="form-section__radio-container">
            <input
              type="radio"
              className="radio"
              name="line_item_amount_type"
              id="percent"
              value="percent"
              checked={props.value === "percent"}
              onChange={(e) => props.handleChangeAmountType(e)}
            />
            <label htmlFor="percent">Percent</label>
          </div>
        </div>
        {props.formError ? <Error message="Choose an amount type" /> : null}
      </div>
    </section>
  );
}

export default LineItemFormAmountType;
