import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormWage(props) {
  return (
    <section className="form-section form-section_wage">
      <label className="form-section__label" htmlFor="wage">
        Hourly Wage
      </label>
      <div className="form-section__input-container">
        <input
          className="form-section__input form-section__input_wage"
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
