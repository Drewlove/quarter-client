import React from "react";
import Error from "../../Error/Error";

function LineItemFormAmountType(props) {
  return (
    <section className="input-section">
      <p className="input-section__label">Amount Type</p>
      <div className="input-section__input-container">
        <div
          className={`input-section__input input-section__input_radio 
          ${props.error ? "input-section__error" : ""}`}
        >
          <div className="input-section__radio-container">
            <input
              type="radio"
              className="radio"
              name="amountType"
              id="dollars"
              value="dollars"
              checked={props.value === "dollars"}
              onChange={(e) => props.onChange(e)}
            />
            <label htmlFor="dollars">Dollars</label>
          </div>
          <div className="input-section__radio-container">
            <input
              type="radio"
              className="radio"
              name="amountType"
              id="percentage"
              value="percentage"
              checked={props.value === "percentage"}
              onChange={(e) => props.onChange(e)}
            />
            <label htmlFor="percentage">Percent</label>
          </div>
        </div>
        {props.error ? <Error message="Choose an amount type" /> : null}
      </div>
    </section>
  );
}

export default LineItemFormAmountType;
