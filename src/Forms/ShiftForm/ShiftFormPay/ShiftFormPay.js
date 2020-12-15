import React from "react";
import Error from "../../CommonFormComponents/Error/Error";

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
          type="number"
          id="pay"
          placeholder="Hourly Pay Rate"
          name="pay"
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.error ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default ShiftFormPay;
