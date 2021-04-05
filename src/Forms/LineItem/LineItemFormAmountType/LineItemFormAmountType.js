import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function LineItemFormAmountType(props) {
  return (
    <section className="form-section form-section_amount-type">
      <p className="form-section__label">Amount Type</p>
      <div className="form-section__input-container">
        <div className="form-section__input form-section__input_radio">
          <div className="form-section__radio-container">
            <label htmlFor="dollars">
              <input
                type="radio"
                className="toggle-container__input toggle-container__input_days"
                name="line_item_amount_type"
                id="dollars"
                value="dollars"
                checked={props.value === "dollars"}
                onChange={(e) => props.handleChangeAmountType(e)}
              />
              <div className="toggle-container__box toggle-container__box_amount-type">
                Dollars
              </div>
            </label>
          </div>
          <div className="form-section__radio-container">
            <label htmlFor="percent">
              <input
                type="radio"
                className="toggle-container__input toggle-container__input_days"
                name="line_item_amount_type"
                id="percent"
                value="percent"
                checked={props.value === "percent"}
                onChange={(e) => props.handleChangeAmountType(e)}
              />
              <div className="toggle-container__box toggle-container__box_amount-type">
                Percent
              </div>
            </label>
          </div>
        </div>
        {props.formError ? <Error message="Choose an amount type" /> : null}
      </div>
    </section>
  );
}

export default LineItemFormAmountType;
