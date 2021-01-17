import React from "react";
import Error from "../CommonFormComponents/FormError/FormError";

function LineItemFormAmount(props) {
  const getAmountSign = () => {
    return props.amountType === "dollars" ? "$" : "%";
  };

  return (
    <section className="input-section input-section_amount">
      <label className="input-section__label" htmlFor="amount">
        Amount {getAmountSign()}{" "}
      </label>
      <div className="input-section__input-container">
        <input
          className={`input-section__input ${
            props.error ? "input-section__error" : ""
          }`}
          type="text"
          id="amount"
          placeholder={
            props.amountType === "dollars"
              ? "Dollar Amount"
              : "Percentage Amount"
          }
          name="amount"
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.error ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default LineItemFormAmount;
