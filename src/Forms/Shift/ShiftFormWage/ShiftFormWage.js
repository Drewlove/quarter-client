import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormWage(props) {
  return (
    <section className="input-section input-section_wage">
      <label className="input-section__label" htmlFor="wage">
        Hourly Wage
      </label>
      <div className="input-section__input-container">
        <input
          className="input-section__input input-section__input_wage"
          type="text"
          id="wage"
          placeholder="Hourly wage Rate"
          name="wage"
          value={props.value}
          onChange={props.handleChangeWage}
          onBlur={props.handleBlurWage}
        />
        {props.formError ? <FormError message={props.formError} /> : null}
      </div>
    </section>
  );
}

export default ShiftFormWage;
