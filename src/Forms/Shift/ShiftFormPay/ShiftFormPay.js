import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormPay(props) {
  return (
    <section className="input-section input-section_pay">
      <label className="input-section__label" htmlFor="pay">
        Pay
      </label>
      <div className="input-section__input-container">
        <input
          className={`input-section__input ${
            props.error ? "input-section__error" : ""
          }`}
          type="text"
          id="pay"
          placeholder="Hourly Pay Rate"
          name="pay"
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.error ? <FormError message={props.error} /> : null}
      </div>
    </section>
  );
}

export default ShiftFormPay;
